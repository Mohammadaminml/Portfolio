import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaClock } from "react-icons/fa6";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

const HERO_GRADIENTS: Record<string, string> = {
  blue: "from-[#0c1d38] to-[#1e468c]",
  violet: "from-[#0c1d38] to-[#4c3080]",
  coral: "from-[#0c1d38] to-[#8a3626]",
  mint: "from-[#0c1d38] to-[#105c4e]",
};

export function generateStaticParams() {
  return (["fa", "en"] as const).flatMap((lang) =>
    blogPosts.map((post) => ({ lang, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) return {};

  const post = getBlogPost(slug);
  if (!post) return {};

  return buildMetadata({
    locale: lang,
    path: `/blog/${post.slug}`,
    title: `${post.title} | ${
      lang === "fa" ? "وبلاگ محمدامین ملاکاظمی‌ها" : "Blog | Mohammadamin Mollakazemiha"
    }`,
    description: post.excerpt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const post = getBlogPost(slug);
  if (!post) notFound();

  const isFa = lang === "fa";
  const BackArrow = isFa ? FaArrowRight : FaArrowLeft;
  const ReadArrow = isFa ? FaArrowLeft : FaArrowRight;

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  const heroGradient = HERO_GRADIENTS[post.accent] ?? HERO_GRADIENTS.blue;

  const formatIndex = (index: number) =>
    isFa
      ? `۰${new Intl.NumberFormat("fa-IR").format(index + 1)}`
      : `0${index + 1}`;

  return (
    <article className="bg-(--bg)">
      {/* Article Hero */}
      <header
        className={`bg-gradient-to-br ${heroGradient} py-16 text-white sm:py-24`}
      >
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
          >
            <BackArrow className="h-3.5 w-3.5" />
            <span>{isFa ? "بازگشت به وبلاگ" : "Back to Blog"}</span>
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/75">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-white">
              {post.category}
            </span>
            <time>{post.date}</time>
            <span className="inline-flex items-center gap-1.5">
              <FaClock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readTime} {isFa ? "مطالعه" : "read"}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-loose text-white/80 sm:text-base">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Main Layout: Sticky TOC + Article Content */}
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 lg:grid-cols-[16rem_1fr] lg:gap-16 lg:py-20">
        <aside className="rounded-2xl border border-(--border) bg-(--surface) p-5 lg:sticky lg:top-28">
          <p className="text-xs font-extrabold text-(--accent)">
            {isFa ? "در این مقاله" : "IN THIS ARTICLE"}
          </p>
          <nav
            aria-label={isFa ? "فهرست مقاله" : "Table of contents"}
            className="mt-4 flex flex-col gap-2.5"
          >
            {post.sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-baseline gap-2.5 text-sm font-medium text-(--text-muted) transition-colors hover:text-(--accent)"
              >
                <span className="font-mono text-xs font-bold text-(--text-muted)/60 group-hover:text-(--accent)">
                  {formatIndex(index)}
                </span>
                <span>{section.title}</span>
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-12">
          {post.sections.map((section, index) => (
            <section
              id={section.id}
              key={section.id}
              className="scroll-mt-28 space-y-4 border-t border-(--border) pt-8 first:border-t-0 first:pt-0"
            >
              <span className="font-mono text-xs font-bold text-(--accent)">
                {formatIndex(index)}
              </span>
              <h2 className="text-2xl font-black text-(--text) sm:text-3xl">
                {section.title}
              </h2>

              <div className="space-y-4 text-sm leading-loose text-(--text-muted) sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc space-y-2 ps-5 pt-2 text-sm leading-relaxed text-(--text-muted) marker:text-(--accent) sm:text-base">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="border-t border-(--border) bg-(--surface-muted) py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold text-(--accent)">
                {isFa ? "ادامه مطالعه" : "KEEP READING"}
              </p>
              <h2 className="text-2xl font-black sm:text-3xl">
                {isFa ? "یادداشت‌های مرتبط" : "Related Posts"}
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${lang}/blog/${item.slug}`}
                  className="sig-card group flex flex-col justify-between p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div>
                    <span className="text-xs font-bold text-(--text-muted)">
                      {item.category} · {item.readTime}
                    </span>
                    <h3 className="mt-2 text-lg font-extrabold text-(--text) transition-colors group-hover:text-(--accent) sm:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <b className="mt-6 inline-flex items-center gap-1.5 text-xs font-extrabold text-(--accent)">
                    <span>{isFa ? "مطالعه مقاله" : "Read Article"}</span>
                    <ReadArrow className="h-3 w-3 transition-transform group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
                  </b>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}