module.exports = [
"[project]/.next-internal/server/app/[lang]/projects/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/portfolio.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARTICLES",
    ()=>ARTICLES,
    "CASE_STUDIES",
    ()=>CASE_STUDIES,
    "EXPERIENCES",
    ()=>EXPERIENCES,
    "SKILL_GROUPS",
    ()=>SKILL_GROUPS,
    "TESTIMONIALS",
    ()=>TESTIMONIALS
]);
const CASE_STUDIES = [
    {
        slug: "delta-real-estate-crm",
        title: {
            fa: "پلتفرم و CRM املاک دلتا",
            en: "Delta Real Estate Platform & CRM"
        },
        category: {
            fa: "فول‌استک / سیستم سازمانی",
            en: "Full-Stack / Enterprise CRM"
        },
        summary: {
            fa: "بازطراحی ماژول‌های مدیریت آژانس‌ها، مشاوران و تحلیل روند قیمت ملک با معماری ماژولار.",
            en: "Refactored agency/consultant management modules and real estate price trend analytics."
        },
        problem: {
            fa: "کوئری‌های سنگین و ساختار درهم‌تنیده‌ی کامپوننت‌ها باعث کندی داشبورد مشاوران و دشواری نگهداری کد شده بود.",
            en: "Heavy queries and tightly coupled UI components slowed down consultant dashboards and hindered maintainability."
        },
        solution: {
            fa: "جداسازی لایه‌ی منطق و API از کامپوننت‌های UI با TypeScript، بهینه‌سازی state و کشینگ با TanStack Query و یکپارچه‌سازی دقیق با APIهای Django و SQL Server.",
            en: "Separated API/business logic from UI components in TypeScript, introduced TanStack Query caching, and integrated Django + SQL Server endpoints."
        },
        metrics: [
            {
                label: {
                    fa: "کاهش زمان بارگذاری داشبورد",
                    en: "Dashboard Load Reduction"
                },
                value: "40%"
            },
            {
                label: {
                    fa: "پوشش تایپ در ماژول‌های جدید",
                    en: "TypeScript Coverage"
                },
                value: "100%"
            },
            {
                label: {
                    fa: "کاهش باگ‌های تکراری UI",
                    en: "Fewer Recurring UI Bugs"
                },
                value: "55%"
            }
        ],
        stack: [
            "React 19",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Django",
            "SQL Server"
        ],
        liveUrl: "https://deltadev.ir",
        featured: true
    },
    {
        slug: "gitlab-cicd-webhook-monitor",
        title: {
            fa: "سیستم مانیتورینگ پایپ‌لاین GitLab CI/CD",
            en: "GitLab CI/CD & Webhook Monitoring System"
        },
        category: {
            fa: "بک‌اند / DevOps",
            en: "Backend / DevOps Tooling"
        },
        summary: {
            fa: "سرویس دریافت Webhookهای گیت‌لب و نمایش لحظه‌ای وضعیت بیلد و دیپلوی ریپوهای خصوصی.",
            en: "Real-time GitLab webhook collector and dashboard tracking private repository pipelines."
        },
        problem: {
            fa: "تیم توسعه برای پیگیری خطاهای پایپ‌لاین در چند ریپوزیتوری خصوصی مجبور به بررسی دستی و زمان‌بر بود.",
            en: "Developers had to manually inspect multiple private repositories to catch failed CI/CD pipelines."
        },
        solution: {
            fa: "طراحی API دریافت Webhook با Django REST Framework، ذخیره‌سازی رویدادها در دیتابیس رابطه‌ای و داشبورد فیلترپذیر با Next.js.",
            en: "Built a Django REST Framework webhook ingestion service backed by a relational database with a filterable Next.js dashboard."
        },
        metrics: [
            {
                label: {
                    fa: "زمان تشخیص خطای بیلد",
                    en: "Build Failure Detection"
                },
                value: "< 5s"
            },
            {
                label: {
                    fa: "ریپوهای تحت پوشش",
                    en: "Monitored Repositories"
                },
                value: "10+"
            },
            {
                label: {
                    fa: "کاهش بررسی دستی تیم",
                    en: "Manual Checks Saved"
                },
                value: "70%"
            }
        ],
        stack: [
            "Django",
            "DRF",
            "Next.js",
            "TypeScript",
            "Webhooks",
            "SQL Server"
        ],
        featured: true
    },
    {
        slug: "enterprise-next-boilerplate",
        title: {
            fa: "بویلرپلیت سازمانی Next.js",
            en: "Enterprise Next.js Boilerplate"
        },
        category: {
            fa: "اوپن‌سورس / معماری فرانت‌اند",
            en: "Open Source / Frontend Architecture"
        },
        summary: {
            fa: "قالب آماده‌ی تولید برای پروژه‌های فارسی و انگلیسی با معماری تمیز، مدیریت state و تقویم جلالی.",
            en: "Production-ready starter kit with clean architecture, state management, and RTL/Jalali support."
        },
        problem: {
            fa: "راه‌اندازی هر پروژه‌ی سازمانی جدید با تنظیمات تکراری استایل، احراز هویت، درخواست‌های HTTP و تقویم فارسی زمان زیادی می‌برد.",
            en: "Bootstrapping new enterprise apps repeatedly wasted days on styling, HTTP interceptors, state, and localization."
        },
        solution: {
            fa: "تدوین معماری استاندارد با Next.js App Router، Zustand، Axios، Tailwind v4 و مستندات کامل برای شروع سریع تیم‌ها.",
            en: "Standardized a scalable setup with Next.js App Router, Zustand, Axios, Tailwind v4, and clear documentation."
        },
        metrics: [
            {
                label: {
                    fa: "کاهش زمان راه‌اندازی پروژه",
                    en: "Project Setup Time Saved"
                },
                value: "80%"
            },
            {
                label: {
                    fa: "امتیاز Lighthouse پایه",
                    en: "Baseline Lighthouse Score"
                },
                value: "98"
            }
        ],
        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS v4",
            "Zustand",
            "Axios"
        ],
        repoUrl: "https://github.com/Mohammadaminml/enterprise-next-boilerplate",
        featured: false
    }
];
const EXPERIENCES = [
    {
        id: "delta-fullstack",
        role: {
            fa: "توسعه‌دهنده فول‌استک وب",
            en: "Full-Stack Web Developer"
        },
        company: {
            fa: "پلتفرم املاک دلتا",
            en: "Delta Real Estate Platform"
        },
        period: {
            fa: "۱۴۰۳ — اکنون",
            en: "2024 — Present"
        },
        highlights: [
            {
                fa: "توسعه و بازنویسی ماژول‌های کلیدی CRM با React، Next.js، TypeScript و Tailwind CSS.",
                en: "Built and refactored core CRM modules using React, Next.js, TypeScript, and Tailwind CSS."
            },
            {
                fa: "طراحی و یکپارچه‌سازی APIهای Django و کوئری‌های Microsoft SQL Server برای گزارش‌های تحلیلی.",
                en: "Integrated Django APIs and Microsoft SQL Server queries for real-time analytics."
            }
        ]
    }
];
const SKILL_GROUPS = [
    {
        category: {
            fa: "فرانت‌اند",
            en: "Frontend"
        },
        items: [
            "React 19",
            "Next.js",
            "TypeScript",
            "Tailwind CSS v4",
            "TanStack Query",
            "Zustand"
        ]
    },
    {
        category: {
            fa: "بک‌اند و دیتابیس",
            en: "Backend & Data"
        },
        items: [
            "Python",
            "Django",
            "Django REST Framework",
            "Node.js",
            "PostgreSQL",
            "SQL Server"
        ]
    },
    {
        category: {
            fa: "DevOps، تست و AI",
            en: "DevOps, Testing & AI"
        },
        items: [
            "Docker",
            "GitHub Actions",
            "Nginx",
            "k6 Performance",
            "RAG / LLM APIs",
            "Git"
        ]
    }
];
const TESTIMONIALS = [
    {
        id: "peer-1",
        quote: {
            fa: "محمدامین علاوه بر تسلط روی فرانت‌اند و بک‌اند، دید معماری دقیقی دارد و کدهایش همیشه تمیز و قابل نگهداری است.",
            en: "Beyond strong full-stack skills, Mohammadamin brings clear architectural thinking and consistently maintainable code."
        },
        author: {
            fa: "نمونه توصیه‌نامه همکار فنی",
            en: "Engineering Peer (Placeholder)"
        },
        role: {
            fa: "تیم مهندسی نرم‌افزار",
            en: "Software Engineering Team"
        }
    }
];
const ARTICLES = [
    {
        slug: "nextjs-seo-and-i18n-architecture",
        title: {
            fa: "معماری سئو و دو‌زبانه‌سازی واقعی در Next.js App Router",
            en: "Production SEO & Bilingual Architecture in Next.js App Router"
        },
        date: "2026-11",
        readTime: {
            fa: "۶ دقیقه مطالعه",
            en: "6 min read"
        }
    },
    {
        slug: "gitlab-webhooks-with-django",
        title: {
            fa: "طراحی سیستم مانیتورینگ CI/CD با Webhookهای گیت‌لب و Django",
            en: "Building a CI/CD Monitor with GitLab Webhooks & Django"
        },
        date: "2026-10",
        readTime: {
            fa: "۵ دقیقه مطالعه",
            en: "5 min read"
        }
    }
];
}),
"[project]/src/types/portfolio.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>t
]);
function t(text, locale) {
    return text[locale];
}
}),
"[project]/src/app/[lang]/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/portfolio.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LOCALES"].flatMap((lang)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CASE_STUDIES"].map((project)=>({
                lang,
                slug: project.slug
            })));
}
async function generateMetadata({ params }) {
    const { lang, slug } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(lang)) return {};
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CASE_STUDIES"].find((p)=>p.slug === slug);
    if (!project) return {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])({
        locale: lang,
        path: `/projects/${slug}`,
        title: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(project.title, lang)} | Case Study`,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(project.summary, lang)
    });
}
async function ProjectDetailPage({ params }) {
    const { lang, slug } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(lang)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CASE_STUDIES"].find((p)=>p.slug === slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const isFa = lang === "fa";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "mx-auto max-w-4xl space-y-12 px-6 py-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${lang}/projects`,
                        className: "text-sm font-medium text-[var(--accent)] hover:underline",
                        children: isFa ? "← بازگشت به پروژه‌ها" : "← Back to Projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold text-[var(--accent)]",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(project.category, lang)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold sm:text-4xl",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(project.title, lang)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base leading-relaxed text-[var(--text-muted)]",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(project.summary, lang)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3 pt-2",
                        children: [
                            project.liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.liveUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FiExternalLink"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    isFa ? "مشاهده نسخه زنده" : "Live Demo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            project.repoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.repoUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold hover:bg-[var(--surface-muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FiGithub"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    isFa ? "کد منبع در گیت‌هاب" : "Source Code"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 sm:grid-cols-3",
                children: project.metrics.map((metric, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-extrabold text-[var(--accent)]",
                                children: metric.value
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xs text-[var(--text-muted)]",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(metric.label, lang)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold",
                                children: isFa ? "مسئله (Problem)" : "The Problem"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm leading-relaxed text-[var(--text-muted)]",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(project.problem, lang)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold",
                                children: isFa ? "راه‌حل و معماری (Solution)" : "The Solution"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm leading-relaxed text-[var(--text-muted)]",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(project.solution, lang)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold",
                        children: isFa ? "استک فنی" : "Tech Stack"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: project.stack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium",
                                children: tech
                            }, tech, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4a5b4c5a._.js.map