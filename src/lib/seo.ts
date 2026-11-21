import type { Metadata } from "next";
import { Locale } from "@/types/site";
import { getDictionary } from "./i18n";

export const SITE_URL = "https://mohammadaminmollakazemiha.ir";

interface PageSeoOptions {
  locale: Locale;
  path?: string; // مثال: "/projects" یا "" برای صفحه اصلی
  title?: string;
  description?: string;
  image?: string;
}

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  image = "/profile.webp",
}: PageSeoOptions): Metadata {
  const dict = getDictionary(locale);
  const resolvedTitle = title ?? dict.meta.title;
  const resolvedDescription = description ?? dict.meta.description;
  const normalizedPath = path.startsWith("/") || path === "" ? path : `/${path}`;

  const canonicalUrl = `${SITE_URL}/${locale}${normalizedPath}`;
  const faUrl = `${SITE_URL}/fa${normalizedPath}`;
  const enUrl = `${SITE_URL}/en${normalizedPath}`;
  const ogImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: resolvedTitle,
    description: resolvedDescription,
    authors: [{ name: dict.meta.siteName, url: SITE_URL }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fa-IR": faUrl,
        "en-US": enUrl,
        "x-default": faUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? ["en_US"] : ["fa_IR"],
      siteName: dict.meta.siteName,
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: dict.meta.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImageUrl],
    },
  };
}

export function getPersonAndWebsiteJsonLd(locale: Locale) {
  const dict = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "محمدامین ملاکاظمی‌ها",
        alternateName: [
          "Mohammadamin Mollakazemiha",
          "Mohammad Amin Mollakazemiha",
        ],
        url: `${SITE_URL}/${locale}`,
        image: `${SITE_URL}/profile.webp`,
        jobTitle: dict.meta.jobTitle,
        description: dict.meta.description,
        knowsAbout: [
          "Software Engineering",
          "React",
          "Next.js",
          "TypeScript",
          "Django",
          "Python",
          "Artificial Intelligence",
        ],
        sameAs: [
          "https://github.com/Mohammadaminml",
          "https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201",
          "https://www.instagram.com/mohammadamin_tech",
          "https://t.me/MohammadAminTech",
          "https://x.com/mamiopv",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: dict.meta.siteName,
        inLanguage: locale === "fa" ? "fa-IR" : "en-US",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  };
}