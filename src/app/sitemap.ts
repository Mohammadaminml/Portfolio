import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SUPPORTED_LOCALES } from "@/types/site";

const STATIC_ROUTES = [
  "",
  "/about",
  "/skills",
  "/experience",
  "/projects",
  "/statistics",
  "/education",
  "/publications",
  "/tech-stack",
  "/blog",
  "/shop",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return STATIC_ROUTES.flatMap((route) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : route === "/projects" ? 0.9 : 0.7,
      alternates: {
        languages: {
          fa: `${SITE_URL}/fa${route}`,
          en: `${SITE_URL}/en${route}`,
        },
      },
    }))
  );
}