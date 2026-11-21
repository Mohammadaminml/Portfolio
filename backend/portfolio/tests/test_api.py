import pytest
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from portfolio.models import Article, Project


@pytest.mark.django_db
def test_projects_list_and_admin_protection():
    client = APIClient()
    Project.objects.create(
        slug="delta-crm",
        title_fa="دلتا",
        title_en="Delta CRM",
        summary_fa="خلاصه",
        summary_en="Summary",
        problem_fa="مسئله",
        problem_en="Problem",
        solution_fa="راه‌حل",
        solution_en="Solution",
        featured=True,
    )

    res = client.get("/api/v1/projects/")
    assert res.status_code == 200
    assert len(res.data) == 1

    # کاربر عادی نباید بتواند پروژه بسازد
    create_res = client.post("/api/v1/projects/", {"slug": "new-p"}, format="json")
    assert create_res.status_code == 401


@pytest.mark.django_db
def test_jwt_admin_can_create_article():
    User.objects.create_superuser(username="admin", email="a@a.com", password="StrongPass123!")
    client = APIClient()

    token_res = client.post(
        "/api/v1/auth/token/",
        {"username": "admin", "password": "StrongPass123!"},
        format="json",
    )
    assert token_res.status_code == 200
    access = token_res.data["access"]

    client.credentials(HTTP_AUTHORIZATION=f"Bearer {access}")
    res = client.post(
        "/api/v1/articles/",
        {
            "slug": "nextjs-seo",
            "title_fa": "سئو",
            "title_en": "Next.js SEO",
            "excerpt_fa": "خلاصه",
            "excerpt_en": "Excerpt",
            "body_fa": "متن",
            "body_en": "Body",
            "is_published": True,
        },
        format="json",
    )
    assert res.status_code == 201
    assert Article.objects.count() == 1


@pytest.mark.django_db
def test_contact_validation_and_creation():
    client = APIClient()

    # پیام کوتاه باید رد شود
    bad = client.post(
        "/api/v1/contact/",
        {"name": "Ali", "email": "ali@example.com", "subject": "Hi", "message": "short"},
        format="json",
    )
    assert bad.status_code == 400

    good = client.post(
        "/api/v1/contact/",
        {
            "name": "Ali",
            "email": "ali@example.com",
            "subject": "Job Offer",
            "message": "We would like to discuss a senior full-stack role.",
        },
        format="json",
    )
    assert good.status_code == 201


@pytest.mark.django_db
def test_page_views_recording_and_stats():
    client = APIClient()
    post_res = client.post(
        "/api/v1/analytics/views/",
        {"path": "/fa/projects", "locale": "fa"},
        format="json",
    )
    assert post_res.status_code == 201

    stats = client.get("/api/v1/analytics/views/")
    assert stats.status_code == 200
    assert stats.data["total_views"] == 1