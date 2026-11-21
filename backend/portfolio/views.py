import logging
from django.db.models import Count
from rest_framework import generics, permissions, status, viewsets
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.throttling import ScopedRateThrottle
from rest_framework.views import APIView

from .models import Article, ContactMessage, PageView, Project
from .serializers import (
    ArticleSerializer,
    ContactMessageSerializer,
    PageViewSerializer,
    ProjectSerializer,
)

logger = logging.getLogger(__name__)


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request: Request, view) -> bool:
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = "slug"


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = "slug"

    def get_queryset(self):
        if self.request.user and self.request.user.is_staff:
            return Article.objects.all()
        return Article.objects.filter(is_published=True)


class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "contact"

    def perform_create(self, serializer):
        instance = serializer.save()
        logger.info("New contact message received id=%s", instance.id)


class PageViewStatsView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request: Request) -> Response:
        serializer = PageViewSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"status": "recorded"}, status=status.HTTP_201_CREATED)

    def get(self, request: Request) -> Response:
        total = PageView.objects.count()
        by_path = list(
            PageView.objects.values("path")
            .annotate(views=Count("id"))
            .order_by("-views")[:10]
        )
        return Response({"total_views": total, "top_pages": by_path})