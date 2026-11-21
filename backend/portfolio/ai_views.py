import json
import logging
import os
from typing import Iterator

import httpx
from django.http import StreamingHttpResponse
from rest_framework import permissions, status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.throttling import ScopedRateThrottle
from rest_framework.views import APIView

from .ai_rag import (
    SYSTEM_PROMPT,
    build_fallback_response,
    is_prompt_injection,
    retrieve_context,
)

logger = logging.getLogger(__name__)


def _sse_event(payload: dict) -> str:
    return f"data: {json.dumps(payload, ensure_ascii=False)}\n\n"


def _stream_ai_or_fallback(message: str, locale: str, chunks: list[str]) -> Iterator[str]:
    api_key = os.environ.get("AI_API_KEY", "").strip()
    base_url = os.environ.get("AI_BASE_URL", "https://api.openai.com/v1").rstrip("/")
    model = os.environ.get("AI_MODEL", "gpt-4o-mini")

    if not api_key:
        yield _sse_event({"delta": build_fallback_response(locale, chunks), "fallback": True})
        yield _sse_event({"done": True})
        return

    context_block = "\n\n".join(chunks)
    payload = {
        "model": model,
        "stream": True,
        "temperature": 0.3,
        "max_tokens": 450,
        "messages": [
            {"role": "system", "content": f"{SYSTEM_PROMPT}\n\nCONTEXT:\n{context_block}"},
            {"role": "user", "content": message},
        ],
    }

    try:
        with httpx.Client(timeout=20.0) as client:
            with client.stream(
                "POST",
                f"{base_url}/chat/completions",
                headers={"Authorization": f"Bearer {api_key}"},
                json=payload,
            ) as upstream:
                upstream.raise_for_status()
                for line in upstream.iter_lines():
                    if not line or not line.startswith("data: "):
                        continue
                    data_str = line[6:].strip()
                    if data_str == "[DONE]":
                        break
                    chunk_json = json.loads(data_str)
                    delta = chunk_json["choices"][0].get("delta", {}).get("content")
                    if delta:
                        yield _sse_event({"delta": delta})
        yield _sse_event({"done": True})
    except Exception as exc:
        logger.warning("AI upstream failed, using fallback: %s", exc)
        yield _sse_event({"delta": build_fallback_response(locale, chunks), "fallback": True})
        yield _sse_event({"done": True})


class AiChatStreamView(APIView):
    permission_classes = [permissions.AllowAny]
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "ai_chat"

    def post(self, request: Request):
        message = str(request.data.get("message", "")).strip()
        locale = "en" if request.data.get("locale") == "en" else "fa"

        if not message or len(message) > 500:
            return Response(
                {"detail": "Message must be between 1 and 500 characters."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if is_prompt_injection(message):
            refusal = (
                "فقط می‌توانم به سوال‌های مرتبط با رزومه، مهارت‌ها و پروژه‌های محمدامین پاسخ بدهم."
                if locale == "fa"
                else "I can only answer questions about Mohammadamin's resume, skills, and projects."
            )
            return Response({"detail": refusal}, status=status.HTTP_400_BAD_REQUEST)

        chunks = retrieve_context(message)
        response = StreamingHttpResponse(
            _stream_ai_or_fallback(message, locale, chunks),
            content_type="text/event-stream; charset=utf-8",
        )
        response["Cache-Control"] = "no-cache"
        response["X-Accel-Buffering"] = "no"
        return response