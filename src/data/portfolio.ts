import {
  ArticlePreview,
  CaseStudy,
  ExperienceItem,
  SkillGroup,
  Testimonial,
} from "@/types/portfolio";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "delta-real-estate-crm",
    title: {
      fa: "پلتفرم و CRM املاک دلتا",
      en: "Delta Real Estate Platform & CRM",
    },
    category: {
      fa: "فول‌استک / سیستم سازمانی",
      en: "Full-Stack / Enterprise CRM",
    },
    summary: {
      fa: "بازطراحی ماژول‌های مدیریت آژانس‌ها، مشاوران و تحلیل روند قیمت ملک با معماری ماژولار.",
      en: "Refactored agency/consultant management modules and real estate price trend analytics.",
    },
    problem: {
      fa: "کوئری‌های سنگین و ساختار درهم‌تنیده‌ی کامپوننت‌ها باعث کندی داشبورد مشاوران و دشواری نگهداری کد شده بود.",
      en: "Heavy queries and tightly coupled UI components slowed down consultant dashboards and hindered maintainability.",
    },
    solution: {
      fa: "جداسازی لایه‌ی منطق و API از کامپوننت‌های UI با TypeScript، بهینه‌سازی state و کشینگ با TanStack Query و یکپارچه‌سازی دقیق با APIهای Django و SQL Server.",
      en: "Separated API/business logic from UI components in TypeScript, introduced TanStack Query caching, and integrated Django + SQL Server endpoints.",
    },
    metrics: [
      { label: { fa: "کاهش زمان بارگذاری داشبورد", en: "Dashboard Load Reduction" }, value: "40%" },
      { label: { fa: "پوشش تایپ در ماژول‌های جدید", en: "TypeScript Coverage" }, value: "100%" },
      { label: { fa: "کاهش باگ‌های تکراری UI", en: "Fewer Recurring UI Bugs" }, value: "55%" },
    ],
    stack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Django", "SQL Server"],
    liveUrl: "https://deltadev.ir",
    featured: true,
  },
  {
    slug: "gitlab-cicd-webhook-monitor",
    title: {
      fa: "سیستم مانیتورینگ پایپ‌لاین GitLab CI/CD",
      en: "GitLab CI/CD & Webhook Monitoring System",
    },
    category: {
      fa: "بک‌اند / DevOps",
      en: "Backend / DevOps Tooling",
    },
    summary: {
      fa: "سرویس دریافت Webhookهای گیت‌لب و نمایش لحظه‌ای وضعیت بیلد و دیپلوی ریپوهای خصوصی.",
      en: "Real-time GitLab webhook collector and dashboard tracking private repository pipelines.",
    },
    problem: {
      fa: "تیم توسعه برای پیگیری خطاهای پایپ‌لاین در چند ریپوزیتوری خصوصی مجبور به بررسی دستی و زمان‌بر بود.",
      en: "Developers had to manually inspect multiple private repositories to catch failed CI/CD pipelines.",
    },
    solution: {
      fa: "طراحی API دریافت Webhook با Django REST Framework، ذخیره‌سازی رویدادها در دیتابیس رابطه‌ای و داشبورد فیلترپذیر با Next.js.",
      en: "Built a Django REST Framework webhook ingestion service backed by a relational database with a filterable Next.js dashboard.",
    },
    metrics: [
      { label: { fa: "زمان تشخیص خطای بیلد", en: "Build Failure Detection" }, value: "< 5s" },
      { label: { fa: "ریپوهای تحت پوشش", en: "Monitored Repositories" }, value: "10+" },
      { label: { fa: "کاهش بررسی دستی تیم", en: "Manual Checks Saved" }, value: "70%" },
    ],
    stack: ["Django", "DRF", "Next.js", "TypeScript", "Webhooks", "SQL Server"],
    featured: true,
  },
  {
    slug: "enterprise-next-boilerplate",
    title: {
      fa: "بویلرپلیت سازمانی Next.js",
      en: "Enterprise Next.js Boilerplate",
    },
    category: {
      fa: "اوپن‌سورس / معماری فرانت‌اند",
      en: "Open Source / Frontend Architecture",
    },
    summary: {
      fa: "قالب آماده‌ی تولید برای پروژه‌های فارسی و انگلیسی با معماری تمیز، مدیریت state و تقویم جلالی.",
      en: "Production-ready starter kit with clean architecture, state management, and RTL/Jalali support.",
    },
    problem: {
      fa: "راه‌اندازی هر پروژه‌ی سازمانی جدید با تنظیمات تکراری استایل، احراز هویت، درخواست‌های HTTP و تقویم فارسی زمان زیادی می‌برد.",
      en: "Bootstrapping new enterprise apps repeatedly wasted days on styling, HTTP interceptors, state, and localization.",
    },
    solution: {
      fa: "تدوین معماری استاندارد با Next.js App Router، Zustand، Axios، Tailwind v4 و مستندات کامل برای شروع سریع تیم‌ها.",
      en: "Standardized a scalable setup with Next.js App Router, Zustand, Axios, Tailwind v4, and clear documentation.",
    },
    metrics: [
      { label: { fa: "کاهش زمان راه‌اندازی پروژه", en: "Project Setup Time Saved" }, value: "80%" },
      { label: { fa: "امتیاز Lighthouse پایه", en: "Baseline Lighthouse Score" }, value: "98" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS v4", "Zustand", "Axios"],
    repoUrl: "https://github.com/Mohammadaminml/enterprise-next-boilerplate",
    featured: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "delta-fullstack",
    role: { fa: "توسعه‌دهنده فول‌استک وب", en: "Full-Stack Web Developer" },
    company: { fa: "پلتفرم املاک دلتا", en: "Delta Real Estate Platform" },
    period: { fa: "۱۴۰۳ — اکنون", en: "2024 — Present" },
    highlights: [
      {
        fa: "توسعه و بازنویسی ماژول‌های کلیدی CRM با React، Next.js، TypeScript و Tailwind CSS.",
        en: "Built and refactored core CRM modules using React, Next.js, TypeScript, and Tailwind CSS.",
      },
      {
        fa: "طراحی و یکپارچه‌سازی APIهای Django و کوئری‌های Microsoft SQL Server برای گزارش‌های تحلیلی.",
        en: "Integrated Django APIs and Microsoft SQL Server queries for real-time analytics.",
      },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: { fa: "فرانت‌اند", en: "Frontend" },
    items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS v4", "TanStack Query", "Zustand"],
  },
  {
    category: { fa: "بک‌اند و دیتابیس", en: "Backend & Data" },
    items: ["Python", "Django", "Django REST Framework", "Node.js", "PostgreSQL", "SQL Server"],
  },
  {
    category: { fa: "DevOps، تست و AI", en: "DevOps, Testing & AI" },
    items: ["Docker", "GitHub Actions", "Nginx", "k6 Performance", "RAG / LLM APIs", "Git"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "peer-1",
    quote: {
      fa: "محمدامین علاوه بر تسلط روی فرانت‌اند و بک‌اند، دید معماری دقیقی دارد و کدهایش همیشه تمیز و قابل نگهداری است.",
      en: "Beyond strong full-stack skills, Mohammadamin brings clear architectural thinking and consistently maintainable code.",
    },
    author: { fa: "نمونه توصیه‌نامه همکار فنی", en: "Engineering Peer (Placeholder)" },
    role: { fa: "تیم مهندسی نرم‌افزار", en: "Software Engineering Team" },
  },
];

export const ARTICLES: ArticlePreview[] = [
  {
    slug: "nextjs-seo-and-i18n-architecture",
    title: {
      fa: "معماری سئو و دو‌زبانه‌سازی واقعی در Next.js App Router",
      en: "Production SEO & Bilingual Architecture in Next.js App Router",
    },
    date: "2026-11",
    readTime: { fa: "۶ دقیقه مطالعه", en: "6 min read" },
  },
  {
    slug: "gitlab-webhooks-with-django",
    title: {
      fa: "طراحی سیستم مانیتورینگ CI/CD با Webhookهای گیت‌لب و Django",
      en: "Building a CI/CD Monitor with GitLab Webhooks & Django",
    },
    date: "2026-10",
    readTime: { fa: "۵ دقیقه مطالعه", en: "5 min read" },
  },
];