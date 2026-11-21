"use client";

import { FormEvent, useState } from "react";
import { FiMessageSquare, FiSend, FiX } from "react-icons/fi";
import { Locale } from "@/types/site";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export function AiAssistant({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: isFa
        ? "سلام! هر سوالی درباره رزومه، مهارت‌ها یا پروژه‌های محمدامین دارید بپرسید."
        : "Hi! Ask me anything about Mohammadamin's resume, skills, or projects.",
    },
  ]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setInput("");
    setLoading(true);
    setMessages((prev) => [
      ...prev,
      { role: "user", content: trimmed },
      { role: "assistant", content: "" },
    ]);

    try {
      const res = await fetch(`${API_BASE}/api/v1/ai/chat/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, locale }),
      });

      if (!res.ok || !res.body) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || "Request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const parsed = JSON.parse(line.slice(6));
          if (parsed.delta) {
            setMessages((prev) => {
              const updated = [...prev];
              const last = updated[updated.length - 1];
              if (last?.role === "assistant") {
                updated[updated.length - 1] = {
                  ...last,
                  content: last.content + parsed.delta,
                };
              }
              return updated;
            });
          }
        }
      }
    } catch (err) {
      const fallbackMsg =
        err instanceof Error
          ? err.message
          : isFa
            ? "خطا در ارتباط با دستیار هوشمند."
            : "Failed to reach the AI assistant.";
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: fallbackMsg };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 end-5 z-50">
      {open ? (
        <div
          role="dialog"
          aria-label={isFa ? "دستیار هوشمند پورتفولیو" : "AI Portfolio Assistant"}
          className="flex h-[460px] w-[340px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl sm:w-[380px]"
        >
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <span className="text-sm font-bold">
              {isFa ? "دستیار هوشمند رزومه (AI)" : "AI Resume Assistant"}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-lg p-1 text-[var(--text-muted)] hover:bg-[var(--surface-muted)]"
            >
              <FiX className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3.5 py-2.5 leading-relaxed ${
                  msg.role === "user"
                    ? "ms-auto bg-[var(--accent)] text-white"
                    : "me-auto bg-[var(--surface-muted)] text-[var(--text)]"
                }`}
              >
                {msg.content || (loading ? "..." : "")}
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-[var(--border)] p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              placeholder={isFa ? "سوالت را بنویس..." : "Ask a question..."}
              className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--accent)] text-white disabled:opacity-50"
            >
              <FiSend className="h-4 w-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={isFa ? "باز کردن دستیار هوشمند" : "Open AI Assistant"}
          className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          <FiMessageSquare className="h-4 w-4" />
          <span>{isFa ? "سوال از AI" : "Ask AI"}</span>
        </button>
      )}
    </div>
  );
}