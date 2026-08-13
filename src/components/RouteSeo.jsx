import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import products, { localizeProduct } from "../data/products";
import projects from "../data/projects";
import blogPosts from "../data/blogPosts";

const origin = "https://mohammadaminmollakazemiha.ir";
const siteName = "محمدامین ملاکاظمی‌ها";
const defaults = {
  title: "محمدامین ملاکاظمی‌ها | مهندس نرم‌افزار و توسعه‌دهنده فول‌استک",
  description: "وب‌سایت رسمی محمدامین ملاکاظمی‌ها؛ مهندس نرم‌افزار، توسعه‌دهنده فول‌استک و سازنده محصول دیجیتال.",
};

const pages = {
  "/": defaults,
  "/about": { title: `درباره من | ${siteName}`, description: "آشنایی با مسیر، تجربه و نگاه محمدامین ملاکاظمی‌ها به مهندسی نرم‌افزار و ساخت محصول." },
  "/skills": { title: `مهارت‌های فنی | ${siteName}`, description: "مهارت‌های فرانت‌اند، بک‌اند، پایگاه داده و فناوری‌های مورد استفاده در توسعه محصولات دیجیتال." },
  "/experience": { title: `مسیر حرفه‌ای | ${siteName}`, description: "سوابق و تجربه حرفه‌ای محمدامین ملاکاظمی‌ها در توسعه نرم‌افزار، محصول و آموزش." },
  "/projects": { title: `پروژه‌ها و Case Studyها | ${siteName}`, description: "مطالعه مسئله، تصمیم‌های فنی، راهکار و خروجی پروژه‌های منتخب نرم‌افزاری." },
  "/shop": { title: `محصولات و خدمات دیجیتال | ${siteName}`, description: "ابزارهای توسعه، محصولات دیجیتال و خدمات طراحی و پیاده‌سازی وب‌سایت." },
  "/statistics": { title: `آمار و دستاوردها | ${siteName}`, description: "نمایی کوتاه از تجربه، پروژه‌ها، آموزش و دستاوردهای حرفه‌ای." },
  "/education": { title: `تحصیلات | ${siteName}`, description: "سوابق دانشگاهی و تحصیلی در مهندسی کامپیوتر، نرم‌افزار و هوش مصنوعی." },
  "/publications": { title: `مقالات علمی | ${siteName}`, description: "مقالات منتشرشده در زمینه هوش مصنوعی، شبکه، بلاکچین و سامانه‌های هوشمند." },
  "/tech-stack": { title: `فناوری‌های مورد استفاده | ${siteName}`, description: "فناوری‌ها و ابزارهایی که برای طراحی، توسعه و استقرار محصولات نرم‌افزاری استفاده می‌کنم." },
  "/contact": { title: `شروع همکاری | ${siteName}`, description: "فرم درخواست پروژه برای توسعه محصول، وب‌سایت، بک‌اند، هوش مصنوعی و مشاوره فنی." },
  "/blog": { title: `وبلاگ فنی | ${siteName}`, description: "یادداشت‌های کاربردی درباره معماری محصول، مهندسی فرانت‌اند و ساخت قابلیت‌های هوش مصنوعی." },
};

function setMeta(selector, attribute, value) {
  document.querySelector(selector)?.setAttribute(attribute, value);
}

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const project = pathname.startsWith("/projects/") ? projects.find((item) => `/projects/${item.slug}` === pathname) : null;
    const productSource = pathname.startsWith("/shop/") ? products.find((item) => `/shop/${item.slug}` === pathname) : null;
    const post = pathname.startsWith("/blog/") ? blogPosts.find((item) => `/blog/${item.slug}` === pathname) : null;
    const product = productSource ? localizeProduct(productSource, "fa") : null;
    const meta = post
      ? { title: `${post.title} | وبلاگ ${siteName}`, description: post.excerpt, type: "article", imageAlt: post.title }
      : project
      ? { title: `${project.title} | پروژه‌های ${siteName}`, description: project.summary, image: project.image, type: "article", imageAlt: project.imageAlt }
      : product
        ? { title: `${product.title} | فروشگاه ${siteName}`, description: product.description, type: "product", imageAlt: product.title }
        : pages[pathname] || defaults;
    const canonical = `${origin}${pathname === "/" ? "/" : pathname}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", canonical);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:type"]', "content", meta.type || "website");
    setMeta('meta[property="og:image:alt"]', "content", meta.imageAlt || siteName);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    const image = meta.image ? `${origin}${meta.image}` : `${origin}/profile.webp`;
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:image"]', "content", image);
  }, [pathname]);

  return null;
}
