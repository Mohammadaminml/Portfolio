from django.contrib import admin
from .models import Article, ContactMessage, PageView, Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title_en", "slug", "featured", "created_at")
    list_filter = ("featured",)
    search_fields = ("title_fa", "title_en", "slug")
    prepopulated_fields = {"slug": ("title_en",)}


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title_en", "slug", "is_published", "published_at")
    list_filter = ("is_published",)
    search_fields = ("title_fa", "title_en")
    prepopulated_fields = {"slug": ("title_en",)}


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "subject", "is_read", "created_at")
    list_filter = ("is_read",)
    readonly_fields = ("name", "email", "subject", "message", "created_at")


@admin.register(PageView)
class PageViewAdmin(admin.ModelAdmin):
    list_display = ("path", "locale", "created_at")
    list_filter = ("locale",)