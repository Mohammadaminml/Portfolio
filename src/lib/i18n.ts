import { Dictionary, Locale, SUPPORTED_LOCALES } from "@/types/site";

export const DEFAULT_LOCALE: Locale = "fa";

export function isValidLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "fa" ? "rtl" : "ltr";
}

const dictionaries: Record<Locale, Dictionary> = {
  fa: {
    meta: {
      siteName: "محمدامین ملاکاظمی‌ها",
      title: "محمدامین ملاکاظمی‌ها | مهندس نرم‌افزار و توسعه‌دهنده فول‌استک",
      description:
        "وب‌سایت رسمی محمدامین ملاکاظمی‌ها، مهندس نرم‌افزار، توسعه‌دهنده فول‌استک (React, Django, Python, AI)؛ معرفی سوابق، پروژه‌ها، مقالات و راه‌های ارتباطی.",
      jobTitle: "مهندس نرم‌افزار و توسعه‌دهنده فول‌استک",
    },
    accessibility: {
      skipToContent: "رفتن به محتوای اصلی",
      loading: "در حال بارگذاری...",
      switchLanguage: "تغییر زبان به انگلیسی",
    },
    nav: {
      home: "خانه",
      about: "درباره من",
      projects: "پروژه‌ها",
      experience: "سوابق",
      blog: "مقالات",
      contact: "تماس",
    },
    hero: {
      heading: "محمدامین ملاکاظمی‌ها",
      subheading:
        "مهندس نرم‌افزار و توسعه‌دهنده فول‌استک؛ طراحی و پیاده‌سازی سیستم‌های مقیاس‌پذیر وب و هوش مصنوعی با React، Next.js، Django و Python.",
      primaryCta: "مشاهده پروژه‌ها",
      secondaryCta: "تماس با من",
    },
  },
  en: {
    meta: {
      siteName: "Mohammadamin Mollakazemiha",
      title: "Mohammadamin Mollakazemiha | Full-Stack Software Engineer",
      description:
        "Official portfolio of Mohammadamin Mollakazemiha, Full-Stack Software Engineer specializing in React, Next.js, Django, Python, and AI systems.",
      jobTitle: "Full-Stack Software Engineer",
    },
    accessibility: {
      skipToContent: "Skip to main content",
      loading: "Loading...",
      switchLanguage: "Switch language to Persian",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      heading: "Mohammadamin Mollakazemiha",
      subheading:
        "Full-Stack Software Engineer building scalable web platforms and AI-powered products with React, Next.js, Django, and Python.",
      primaryCta: "View Projects",
      secondaryCta: "Get in Touch",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}