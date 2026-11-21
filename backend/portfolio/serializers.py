from rest_framework import serializers
from .models import Article, ContactMessage, PageView, Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = "__all__"


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ("id", "name", "email", "subject", "message", "created_at")
        read_only_fields = ("id", "created_at")

    def validate_message(self, value: str) -> str:
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters.")
        return value.strip()


class PageViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageView
        fields = ("path", "locale")

    def validate_path(self, value: str) -> str:
        if not value.startswith("/"):
            raise serializers.ValidationError("Path must start with '/'.")
        return value[:255]