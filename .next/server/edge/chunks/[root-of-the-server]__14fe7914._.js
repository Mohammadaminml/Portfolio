(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__14fe7914._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/types/site.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPPORTED_LOCALES",
    ()=>SUPPORTED_LOCALES
]);
const SUPPORTED_LOCALES = [
    "fa",
    "en"
];
}),
"[project]/src/lib/i18n.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LOCALE",
    ()=>DEFAULT_LOCALE,
    "getDictionary",
    ()=>getDictionary,
    "getDirection",
    ()=>getDirection,
    "isValidLocale",
    ()=>isValidLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$site$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/site.ts [middleware-edge] (ecmascript)");
;
const DEFAULT_LOCALE = "fa";
function isValidLocale(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$site$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SUPPORTED_LOCALES"].includes(value);
}
function getDirection(locale) {
    return locale === "fa" ? "rtl" : "ltr";
}
const dictionaries = {
    fa: {
        meta: {
            siteName: "محمدامین ملاکاظمی‌ها",
            title: "محمدامین ملاکاظمی‌ها | مهندس نرم‌افزار و توسعه‌دهنده فول‌استک",
            description: "وب‌سایت رسمی محمدامین ملاکاظمی‌ها، مهندس نرم‌افزار، توسعه‌دهنده فول‌استک (React, Django, Python, AI)؛ معرفی سوابق، پروژه‌ها، مقالات و راه‌های ارتباطی.",
            jobTitle: "مهندس نرم‌افزار و توسعه‌دهنده فول‌استک"
        },
        accessibility: {
            skipToContent: "رفتن به محتوای اصلی",
            loading: "در حال بارگذاری...",
            switchLanguage: "تغییر زبان به انگلیسی"
        },
        nav: {
            home: "خانه",
            about: "درباره من",
            projects: "پروژه‌ها",
            experience: "سوابق",
            blog: "مقالات",
            contact: "تماس"
        },
        hero: {
            heading: "محمدامین ملاکاظمی‌ها",
            subheading: "مهندس نرم‌افزار و توسعه‌دهنده فول‌استک؛ طراحی و پیاده‌سازی سیستم‌های مقیاس‌پذیر وب و هوش مصنوعی با React، Next.js، Django و Python.",
            primaryCta: "مشاهده پروژه‌ها",
            secondaryCta: "تماس با من"
        }
    },
    en: {
        meta: {
            siteName: "Mohammadamin Mollakazemiha",
            title: "Mohammadamin Mollakazemiha | Full-Stack Software Engineer",
            description: "Official portfolio of Mohammadamin Mollakazemiha, Full-Stack Software Engineer specializing in React, Next.js, Django, Python, and AI systems.",
            jobTitle: "Full-Stack Software Engineer"
        },
        accessibility: {
            skipToContent: "Skip to main content",
            loading: "Loading...",
            switchLanguage: "Switch language to Persian"
        },
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            experience: "Experience",
            blog: "Blog",
            contact: "Contact"
        },
        hero: {
            heading: "Mohammadamin Mollakazemiha",
            subheading: "Full-Stack Software Engineer building scalable web platforms and AI-powered products with React, Next.js, Django, and Python.",
            primaryCta: "View Projects",
            secondaryCta: "Get in Touch"
        }
    }
};
function getDictionary(locale) {
    return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [middleware-edge] (ecmascript)");
;
;
const PUBLIC_FILE = /\.(.*)$/;
function middleware(request) {
    const { pathname } = request.nextUrl;
    if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname === "/robots.txt" || pathname === "/sitemap.xml" || PUBLIC_FILE.test(pathname)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const firstSegment = pathname.split("/")[1];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isValidLocale"])(firstSegment)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"]}${pathname === "/" ? "" : pathname}`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl, 308);
}
const config = {
    matcher: [
        "/((?!_next|api|.*\\..*).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__14fe7914._.js.map