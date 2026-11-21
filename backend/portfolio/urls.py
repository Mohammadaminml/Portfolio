from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .ai_views import AiChatStreamView
from .views import ArticleViewSet, ContactCreateView, PageViewStatsView, ProjectViewSet

router = DefaultRouter()
router.register("projects", ProjectViewSet, basename="project")
router.register("articles", ArticleViewSet, basename="article")

urlpatterns = [
    path("", include(router.urls)),
    path("contact/", ContactCreateView.as_view(), name="contact-create"),
    path("analytics/views/", PageViewStatsView.as_view(), name="page-views"),
    path("ai/chat/", AiChatStreamView.as_view(), name="ai-chat"),
]