module.exports = [
"[project]/.next-internal/server/app/[lang]/shop/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/ProductVisual.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductVisual",
    ()=>ProductVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const VISUAL_GRADIENTS = {
    blue: "from-[#164db3] to-[#75a5f7]",
    mint: "from-[#086b64] to-[#66c8ac]",
    violet: "from-[#6332a3] to-[#bd8bec]",
    coral: "from-[#a93628] to-[#f18b72]",
    amber: "from-[#a85b08] to-[#f2b84b]",
    slate: "from-[#172b4d] to-[#60789e]"
};
function ProductVisual({ product, compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex flex-col justify-end overflow-hidden bg-gradient-to-br text-white isolate ${VISUAL_GRADIENTS[product.accent]} ${compact ? "min-h-56 p-5" : "min-h-80 rounded-[32px] p-8"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute -top-24 -end-16 -z-10 h-64 w-64 rounded-full border border-white/25 shadow-[0_0_0_2.5rem_rgba(255,255,255,0.04),0_0_0_5rem_rgba(255,255,255,0.03)]"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductVisual.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-4 start-4 z-10 rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[11px] font-bold backdrop-blur-md",
                children: product.category
            }, void 0, false, {
                fileName: "[project]/src/components/ProductVisual.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute end-[8%] top-[22%] h-[44%] w-[52%] rotate-3 rounded-xl border border-white/35 bg-white/15 p-3 shadow-xl backdrop-blur-sm rtl:-rotate-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-white/70"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductVisual.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-white/70"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductVisual.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-white/70"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductVisual.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductVisual.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "block h-1.5 rounded-full bg-white/45"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductVisual.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "block h-1.5 w-[70%] rounded-full bg-white/45"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductVisual.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "block h-1.5 w-[85%] rounded-full bg-white/45"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductVisual.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductVisual.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductVisual.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: `relative z-10 max-w-[80%] font-extrabold leading-snug drop-shadow-sm ${compact ? "text-lg" : "text-3xl sm:text-4xl"}`,
                children: product.title
            }, void 0, false, {
                fileName: "[project]/src/components/ProductVisual.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductVisual.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCT_ACCENT_STYLES",
    ()=>PRODUCT_ACCENT_STYLES,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getProductBySlug",
    ()=>getProductBySlug,
    "localizeProduct",
    ()=>localizeProduct,
    "products",
    ()=>products
]);
const PRODUCT_ACCENT_STYLES = {
    blue: {
        badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        border: "hover:border-blue-500/40",
        dot: "bg-blue-500"
    },
    mint: {
        badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        border: "hover:border-emerald-500/40",
        dot: "bg-emerald-500"
    },
    violet: {
        badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
        border: "hover:border-violet-500/40",
        dot: "bg-violet-500"
    },
    coral: {
        badge: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
        border: "hover:border-orange-500/40",
        dot: "bg-orange-500"
    },
    amber: {
        badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        border: "hover:border-amber-500/40",
        dot: "bg-amber-500"
    },
    slate: {
        badge: "bg-slate-500/10 text-slate-700 dark:text-slate-300",
        border: "hover:border-slate-500/40",
        dot: "bg-slate-500"
    }
};
const products = [
    {
        slug: "react-dashboard-kit",
        category: "UI Kit",
        title: "React Dashboard Kit",
        description: "A polished, responsive dashboard starter for modern SaaS products.",
        price: "$39",
        accent: "blue",
        tag: "Best seller",
        includes: [
            "18 responsive screens",
            "Dark & light components",
            "React + Tailwind source",
            "Lifetime updates"
        ],
        fa: {
            category: "کیت رابط کاربری",
            title: "کیت داشبورد React",
            description: "یک قالب حرفه‌ای، سریع و واکنش‌گرا برای راه‌اندازی پنل مدیریت محصولات ایرانی.",
            price: "۲٬۹۹۰٬۰۰۰ تومان",
            tag: "پرفروش‌ترین",
            includes: [
                "۱۸ صفحه کاملاً واکنش‌گرا",
                "حالت روشن و تاریک",
                "سورس کامل React و Tailwind",
                "به‌روزرسانی رایگان"
            ]
        }
    },
    {
        slug: "django-api-starter",
        category: "Boilerplate",
        title: "Django API Starter",
        description: "Production-ready authentication, roles, payments, and API foundations.",
        price: "$49",
        accent: "mint",
        tag: "Developer pick",
        includes: [
            "JWT authentication",
            "Role-based access",
            "Docker setup",
            "API documentation"
        ],
        fa: {
            category: "زیرساخت آماده",
            title: "استارتر API جنگو",
            description: "زیرساخت مطمئن احراز هویت، سطح دسترسی و API برای شروع سریع یک محصول واقعی.",
            price: "۳٬۹۹۰٬۰۰۰ تومان",
            tag: "پیشنهاد برنامه‌نویس‌ها",
            includes: [
                "احراز هویت امن با JWT",
                "مدیریت نقش و سطح دسترسی",
                "راه‌اندازی کامل Docker",
                "مستندات فارسی API"
            ]
        }
    },
    {
        slug: "ai-project-playbook",
        category: "eBook + Source",
        title: "AI Project Playbook",
        description: "A practical guide and reusable code for shipping your first AI product.",
        price: "$24",
        accent: "violet",
        tag: "New",
        includes: [
            "120-page digital guide",
            "5 real project blueprints",
            "Python source files",
            "Prompt templates"
        ],
        fa: {
            category: "کتاب و کد منبع",
            title: "نقشه راه پروژه‌های هوش مصنوعی",
            description: "یک مسیر عملی و قدم‌به‌قدم برای ساخت و ارائه اولین محصول هوش مصنوعی شما.",
            price: "۱٬۴۹۰٬۰۰۰ تومان",
            tag: "تازه منتشر شده",
            includes: [
                "راهنمای فارسی ۱۲۰ صفحه‌ای",
                "۵ نقشه راه از پروژه‌های واقعی",
                "فایل کامل کدهای Python",
                "مجموعه قالب‌های پرامپت"
            ]
        }
    },
    {
        slug: "personal-website-design",
        category: "Website Design",
        title: "Complete Personal Website",
        description: "A distinctive personal website designed and developed around your identity, work, and goals.",
        price: "From $490",
        accent: "coral",
        tag: "Custom service",
        includes: [
            "Custom UI/UX design",
            "Responsive development",
            "Portfolio and contact sections",
            "Basic SEO and deployment"
        ],
        fa: {
            category: "طراحی و توسعه سایت",
            title: "طراحی کامل سایت شخصی",
            description: "طراحی و توسعه یک سایت شخصی متمایز و حرفه‌ای، متناسب با هویت، تخصص و اهداف شما.",
            price: "شروع از ۱۴٬۹۰۰٬۰۰۰ تومان",
            tag: "سرویس اختصاصی",
            includes: [
                "طراحی اختصاصی رابط و تجربه کاربری",
                "پیاده‌سازی کامل و واکنش‌گرا",
                "بخش نمونه‌کار، رزومه و تماس",
                "سئوی پایه و راه‌اندازی نهایی"
            ]
        }
    },
    {
        slug: "ecommerce-website-design",
        category: "E-commerce Design",
        title: "Complete E-commerce Website",
        description: "A fast, secure online store built for showcasing products, managing orders, and growing sales.",
        price: "From $1,190",
        accent: "amber",
        tag: "Business ready",
        includes: [
            "Custom storefront design",
            "Products and inventory management",
            "Cart and payment integration",
            "Order dashboard and deployment"
        ],
        fa: {
            category: "طراحی فروشگاه اینترنتی",
            title: "طراحی کامل سایت فروشگاهی",
            description: "فروشگاهی سریع، امن و حرفه‌ای برای معرفی محصولات، مدیریت سفارش‌ها و افزایش فروش آنلاین.",
            price: "شروع از ۳۴٬۹۰۰٬۰۰۰ تومان",
            tag: "آماده کسب‌وکار",
            includes: [
                "طراحی اختصاصی صفحات فروشگاه",
                "مدیریت محصول، موجودی و دسته‌بندی",
                "سبد خرید و اتصال درگاه پرداخت",
                "پنل سفارش‌ها و راه‌اندازی نهایی"
            ]
        }
    },
    {
        slug: "corporate-website-design",
        category: "Corporate Design",
        title: "Complete Corporate Website",
        description: "A scalable corporate website that presents your organization, services, and credibility with clarity.",
        price: "From $1,690",
        accent: "slate",
        tag: "Scalable solution",
        includes: [
            "Brand-aligned UI/UX design",
            "Services and company profiles",
            "Content management system",
            "Security, SEO, and deployment"
        ],
        fa: {
            category: "طراحی سایت سازمانی",
            title: "طراحی کامل سایت سازمانی",
            description: "یک وب‌سایت سازمانی معتبر و توسعه‌پذیر برای معرفی مجموعه، خدمات و ارتباط حرفه‌ای با مخاطبان.",
            price: "شروع از ۴۹٬۹۰۰٬۰۰۰ تومان",
            tag: "راهکار توسعه‌پذیر",
            includes: [
                "طراحی هماهنگ با هویت سازمانی",
                "معرفی خدمات، واحدها و مجموعه",
                "پنل مدیریت محتوای اختصاصی",
                "امنیت، سئو و استقرار نهایی"
            ]
        }
    }
];
const getProductBySlug = (slug)=>products.find((product)=>product.slug === slug);
const localizeProduct = (product, locale)=>locale === "fa" ? {
        ...product,
        ...product.fa
    } : product;
const __TURBOPACK__default__export__ = products;
}),
"[project]/src/app/[lang]/shop/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductVisual$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductVisual.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(lang)) return {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])({
        locale: lang,
        path: "/shop",
        title: lang === "fa" ? "فروشگاه محصولات و خدمات دیجیتال | محمدامین ملاکاظمی‌ها" : "Digital Products & Services | Mohammadamin Mollakazemiha"
    });
}
async function ShopPage({ params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(lang)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const isFa = lang === "fa";
    const ArrowIcon = isFa ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowLeft"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowRight"];
    const t = isFa ? {
        kicker: "فروشگاه محصولات و خدمات دیجیتال",
        titleLine1: "چیزهایی که کمک می‌کنند",
        titleLine2: "یک قدم جلوتر باشید.",
        description: "از قالب و کد آماده تا طراحی کامل وب‌سایت؛ راهکارهایی کاربردی که بر اساس تجربه پروژه‌های واقعی ارائه می‌شوند.",
        view: "دیدن جزئیات",
        benefits: [
            {
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaCode"],
                title: "اجرای حرفه‌ای",
                text: "محصولات تمیز، مستند و خدماتی متناسب با نیاز واقعی شما."
            },
            {
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaBolt"],
                title: "فرایند شفاف",
                text: "پس از ثبت سفارش، جزئیات تحویل یا مراحل اجرای پروژه هماهنگ می‌شود."
            },
            {
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaShieldHalved"],
                title: "پشتیبانی واقعی",
                text: "در مسیر راه‌اندازی و استفاده از محصول تنها نمی‌مانید."
            }
        ]
    } : {
        kicker: "Digital products & services",
        titleLine1: "Tools and services made",
        titleLine2: "for people who build.",
        description: "From production-ready resources to complete custom websites, all shaped by real project experience.",
        view: "View details",
        benefits: [
            {
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaCode"],
                title: "Professional delivery",
                text: "Clean products and tailored services designed around real needs."
            },
            {
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaBolt"],
                title: "Clear process",
                text: "Delivery details or project milestones are confirmed after your order."
            },
            {
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaShieldHalved"],
                title: "Real support",
                text: "Practical help throughout setup, delivery, and launch."
            }
        ]
    };
    const localizedProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].map((product)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localizeProduct"])(product, lang));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-6xl px-6 py-16 sm:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "max-w-3xl space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-extrabold text-[var(--accent)]",
                        children: t.kicker
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-black leading-tight tracking-tight sm:text-5xl",
                        children: [
                            t.titleLine1,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            t.titleLine2
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base",
                        children: t.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                children: localizedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "sig-card group flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${lang}/shop/${product.slug}`,
                                "aria-label": `${t.view}: ${product.title}`,
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductVisual$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductVisual"], {
                                    product: product,
                                    compact: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 flex-col p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-bold text-[var(--accent)]",
                                            children: product.tag
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-3 text-lg font-extrabold",
                                        children: product.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-sm font-extrabold tabular-nums",
                                                children: product.price
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${lang}/shop/${product.slug}`,
                                                className: "inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-bold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white",
                                                children: [
                                                    t.view,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, product.slug, true, {
                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20 grid gap-6 border-t border-[var(--border)] pt-10 md:grid-cols-3",
                children: t.benefits.map(({ Icon, title, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-extrabold",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs leading-relaxed text-[var(--text-muted)]",
                                        children: text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, title, true, {
                        fileName: "[project]/src/app/[lang]/shop/page.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/shop/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/shop/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/shop/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/shop/page.tsx [app-rsc] (ecmascript)"));
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

//# sourceMappingURL=%5Broot-of-the-server%5D__f00d5cff._.js.map