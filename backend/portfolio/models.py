from django.db import models


class Project(models.Model):
    slug = models.SlugField(unique=True, max_length=120)
    title_fa = models.CharField(max_length=200)
    title_en = models.CharField(max_length=200)
    summary_fa = models.TextField()
    summary_en = models.TextField()
    problem_fa = models.TextField()
    problem_en = models.TextField()
    solution_fa = models.TextField()
    solution_en = models.TextField()
    stack = models.JSONField(default=list)
    metrics = models.JSONField(default=list)
    live_url = models.URLField(blank=True)
    repo_url = models.URLField(blank=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-featured", "-created_at"]

    def __str__(self) -> str:
        return self.title_en


class Article(models.Model):
    slug = models.SlugField(unique=True, max_length=140)
    title_fa = models.CharField(max_length=220)
    title_en = models.CharField(max_length=220)
    excerpt_fa = models.TextField()
    excerpt_en = models.TextField()
    body_fa = models.TextField()
    body_en = models.TextField()
    is_published = models.BooleanField(default=False)
    published_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-published_at", "-created_at"]

    def __str__(self) -> str:
        return self.title_en


class ContactMessage(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self) -> str:
        return f"{self.name} - {self.subject}"


class PageView(models.Model):
    path = models.CharField(max_length=255, db_index=True)
    locale = models.CharField(max_length=5, default="fa")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.path} ({self.locale})"