import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowUpLeft, FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";
import { blogPosts } from "@/data/blogPosts";
import { ACCENT_STYLES } from "@/data/projects";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return buildMetadata({
    locale: lang,
    path: "/blog",
    title:
      lang === "fa"
        ? "مقالات و یادداشت‌های فنی | محمدامین ملاکاظمی‌ها"
        : "Technical Articles | Mohammadamin Mollakazemiha",
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const isFa = lang === "fa";
  const ArrowIcon = isFa ? FiArrowUpLeft : FiArrowUpRight;

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 py-14">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {isFa ? "مقالات و یادداشت‌های فنی" : "Technical Articles"}
        </h1>
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          {isFa
            ? "تجربه‌ها و تصمیم‌های مهندسی در معماری محصول، فرانت‌اند و هوش مصنوعی."
            : "Engineering notes on product architecture, frontend performance, and applied AI."}
        </p>
      </header>

      <div className="space-y-5">
        {blogPosts.map((post) => {
          const accent = ACCENT_STYLES[post.accent];
          return (
            <article
              key={post.slug}
              className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:shadow-md ${accent.border}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
                <span className={`rounded-full px-2.5 py-1 font-semibold ${accent.badge}`}>
                  {post.category}
                </span>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1">
                    <FiCalendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FiClock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h2 className="mt-4 text-xl font-bold">
                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {post.excerpt}
              </p>

              <Link
                href={`/${lang}/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                {isFa ? "مطالعه مقاله" : "Read article"}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}