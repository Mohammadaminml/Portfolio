import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import products from "../src/data/products.js";
import projects from "../src/data/projects.js";
import blogPosts from "../src/data/blogPosts.js";

const origin = "https://mohammadaminmollakazemiha.ir";
const siteName = "محمدامین ملاکاظمی‌ها";
const routes = [
  ["about", `درباره من | ${siteName}`, "آشنایی با مسیر، تجربه و نگاه محمدامین ملاکاظمی‌ها به مهندسی نرم‌افزار و ساخت محصول."],
  ["skills", `مهارت‌های فنی | ${siteName}`, "مهارت‌های فرانت‌اند، بک‌اند، پایگاه داده و فناوری‌های توسعه محصول."],
  ["experience", `مسیر حرفه‌ای | ${siteName}`, "سوابق و تجربه حرفه‌ای در توسعه نرم‌افزار، محصول و آموزش."],
  ["projects", `پروژه‌ها و Case Studyها | ${siteName}`, "مسئله، تصمیم‌های فنی، راهکار و خروجی پروژه‌های منتخب نرم‌افزاری."],
  ["shop", `محصولات و خدمات دیجیتال | ${siteName}`, "ابزارهای توسعه، محصولات دیجیتال و خدمات طراحی و پیاده‌سازی وب‌سایت."],
  ["statistics", `آمار و دستاوردها | ${siteName}`, "نمایی کوتاه از تجربه، پروژه‌ها، آموزش و دستاوردهای حرفه‌ای."],
  ["education", `تحصیلات | ${siteName}`, "سوابق دانشگاهی در مهندسی کامپیوتر، نرم‌افزار و هوش مصنوعی."],
  ["publications", `مقالات علمی | ${siteName}`, "مقالات منتشرشده در زمینه هوش مصنوعی، شبکه، بلاکچین و سامانه‌های هوشمند."],
  ["tech-stack", `فناوری‌های مورد استفاده | ${siteName}`, "فناوری‌ها و ابزارهای مورد استفاده برای طراحی، توسعه و استقرار محصول."],
  ["contact", `شروع همکاری | ${siteName}`, "فرم درخواست پروژه برای توسعه محصول، وب‌سایت، بک‌اند، هوش مصنوعی و مشاوره فنی."],
  ["blog", `وبلاگ فنی | ${siteName}`, "یادداشت‌های کاربردی درباره معماری محصول، مهندسی فرانت‌اند و ساخت قابلیت‌های هوش مصنوعی."],
  ...projects.map((project) => [`projects/${project.slug}`, `${project.title} | پروژه‌های ${siteName}`, project.summary, project.image]),
  ...products.map((product) => [`shop/${product.slug}`, `${product.fa.title} | فروشگاه ${siteName}`, product.fa.description]),
  ...blogPosts.map((post) => [`blog/${post.slug}`, `${post.title} | وبلاگ ${siteName}`, post.excerpt]),
];

const dist = resolve("dist");
const source = await readFile(resolve(dist, "index.html"), "utf8");
const escapeAttribute = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

for (const [route, title, description, image] of routes) {
  const canonical = `${origin}/${route}`;
  const pageImage = image ? `${origin}${image}` : `${origin}/profile.webp`;
  const html = source
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escapeAttribute(description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttribute(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttribute(description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${pageImage}$2`)
    .replace(/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${escapeAttribute(title)}$2`)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${route.startsWith("shop/") ? "product" : route.startsWith("projects/") || route.startsWith("blog/") ? "article" : "website"}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escapeAttribute(title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escapeAttribute(description)}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${pageImage}$2`);
  const directory = resolve(dist, route);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), html);
}

const sitemapRoutes = ["", ...routes.map(([route]) => route)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map((route) => `  <url><loc>${origin}/${route}</loc><lastmod>2026-08-14</lastmod><priority>${route === "" ? "1.0" : route === "projects" || route === "shop" || route === "contact" ? "0.9" : "0.7"}</priority></url>`).join("\n")}
</urlset>
`;
await writeFile(resolve(dist, "sitemap.xml"), sitemap);

console.log(`Generated ${routes.length} crawlable route entries.`);
