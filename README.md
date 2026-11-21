# Mohammadamin Mollakazemiha — Full-Stack & AI Portfolio

Production-grade bilingual (Persian RTL / English LTR) full-stack portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Django REST Framework**, **PostgreSQL**, **Docker**, and a **RAG-powered Streaming AI Assistant**.

🌐 **Live Site:** [https://mohammadaminmollakazemiha.ir](https://mohammadaminmollakazemiha.ir)

---

## Architecture

```mermaid
flowchart LR
    User["Browser (FA RTL / EN LTR)"] --> Nginx["Nginx Reverse Proxy\n(HTTPS, CSP, HSTS, SSE)"]
    Nginx -->|"/"| Next["Next.js 15 (SSG/SSR)\nTypeScript + Tailwind v4"]
    Nginx -->|"/api/* & /admin/*"| Django["Django REST Framework\nJWT, Throttling, OpenAPI"]
    Django --> DB[("PostgreSQL 16")]
    Django -->|"RAG Context + SSE"| LLM["OpenAI-Compatible LLM\n(with Safe Fallback)"]