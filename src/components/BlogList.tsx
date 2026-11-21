"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";
import { blogPosts } from "@/data/blogPosts";
import { Locale } from "@/types/site";

const CARD_GRADIENTS: Record<string, string> = {
  blue: "from-[#0c1d38] to-[#1e468c]",
  violet: "from-[#0c1d38] to-[#4c3080]",
  coral: "from-[#0c1d38] to-[#8a3626]",
  mint: "from-[#0c1d38] to-[#105c4e]",
};

export function BlogList({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";
  const allLabel = isFa ? "همه" : "All";
  const ReadArrow = isFa ? FaArrowLeft : FaArrowRight;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allLabel);

  const categories = useMemo(
    () => [allLabel, ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    [allLabel]
  );

  const posts = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(isFa ? "fa" : "en");
    return blogPosts.filter((post) => {
      const matchesCategory = category === allLabel || post.category === category;
      const matchesQuery =
        !normalized ||
        `${post.title} ${post.excerpt}`
          .toLocaleLowerCase(isFa ? "fa" : "en")
          .includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [allLabel, category, isFa, query]);

  const formatIndex = (index: number) =>
    isFa
      ? `۰${new Intl.NumberFormat("fa-IR").format(index + 1)}`
      : `0${index + 1}`;

  return (
    <div className="mt-12 space-y-10">
      {/* Search & Category Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative flex w-full items-center lg:max-w-sm">
          <FaMagnifyingGlass
            aria-hidden="true"
            className="pointer-events-none absolute start-4 h-4 w-4 text-(--text-muted)"
          />
          <span className="sr-only">
            {isFa ? "جست‌وجوی مقاله" : "Search articles"}
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={isFa ? "جست‌وجو در یادداشت‌ها..." : "Search articles..."}
            className="w-full rounded-full border border-(--border) bg-(--surface) py-3 ps-11 pe-4 text-sm text-(--text) outline-none transition-colors focus:border-(--accent)"
          />
        </label>

        <div
          className="flex flex-wrap gap-2"
          aria-label={isFa ? "دسته‌بندی مقالات" : "Article categories"}
        >
          {categories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                  active
                    ? "border-(--accent) bg-(--accent) text-white"
                    : "border-(--border) bg-(--surface) text-(--text-muted) hover:border-(--accent)/50 hover:text-(--text)"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Posts Grid or Empty State */}
      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => {
            const gradient = CARD_GRADIENTS[post.accent] ?? CARD_GRADIENTS.blue;
            return (
              <article
                key={post.slug}
                className="sig-card group flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              >
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className={`relative flex h-40 flex-col justify-between bg-gradient-to-br ${gradient} p-5 text-white`}
                >
                  <span className="font-mono text-xs font-bold text-white/70">
                    {formatIndex(index)}
                  </span>
                  <b className="w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                    {post.category}
                  </b>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2 text-xs font-medium text-(--text-muted)">
                    <time>{post.date}</time>
                    <span>
                      {post.readTime} {isFa ? "مطالعه" : "read"}
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-extrabold leading-snug text-(--text)">
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="transition-colors group-hover:text-(--accent)"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-2.5 flex-1 text-xs leading-relaxed text-(--text-muted)">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-extrabold text-(--accent)"
                  >
                    <span>{isFa ? "خواندن مقاله" : "Read Article"}</span>
                    <ReadArrow className="h-3 w-3 transition-transform group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="sig-card flex flex-col items-center justify-center px-6 py-16 text-center">
          <h2 className="text-xl font-black text-(--text)">
            {isFa ? "مقاله‌ای پیدا نشد." : "No articles found."}
          </h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            {isFa
              ? "عبارت دیگری جست‌وجو کن یا دسته‌بندی را تغییر بده."
              : "Try a different keyword or switch the category filter."}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory(allLabel);
            }}
            className="mt-6 rounded-full bg-(--navy) px-6 py-2.5 text-xs font-extrabold text-white transition-transform hover:-translate-y-0.5 dark:bg-(--accent)"
          >
            {isFa ? "پاک‌کردن فیلترها" : "Clear Filters"}
          </button>
        </div>
      )}
    </div>
  );
}