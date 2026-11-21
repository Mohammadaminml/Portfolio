import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowUpLeft, FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import {
  ARTICLES,
  CASE_STUDIES,
  EXPERIENCES,
  SKILL_GROUPS,
  TESTIMONIALS,
} from "@/data/portfolio";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { t } from "@/types/portfolio";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const isFa = lang === "fa";
  const ArrowIcon = isFa ? FiArrowUpLeft : FiArrowUpRight;
  const featuredProjects = CASE_STUDIES.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-5xl space-y-24 px-6 py-14 sm:py-20">
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-center">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            {isFa
              ? "مهندس نرم‌افزار فول‌استک • React / Django / AI"
              : "Full-Stack Software Engineer • React / Django / AI"}
          </span>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {dict.hero.heading}
          </h1>

          <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            {dict.hero.subheading}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={`/${lang}/projects`}
              className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              {dict.hero.primaryCta}
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--surface-muted)]"
            >
              <FiDownload className="h-4 w-4" />
              {isFa ? "دانلود رزومه" : "Download CV"}
            </a>
            <a
              href="#contact"
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              {dict.hero.secondaryCta}
            </a>
          </div>
        </div>

        <Image
          src="/profile.webp"
          alt={dict.meta.siteName}
          width={220}
          height={220}
          priority
          className="h-40 w-40 rounded-3xl border border-[var(--border)] object-cover shadow-sm sm:h-52 sm:w-52"
        />
      </section>

      {/* Featured Case Studies */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {isFa ? "پروژه‌های شاخص (Case Studies)" : "Featured Case Studies"}
            </h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {isFa
                ? "بررسی مسئله، تصمیم‌های معماری و نتایج عددی واقعی"
                : "Problem statements, architectural decisions, and measurable impact"}
            </p>
          </div>
          <Link
            href={`/${lang}/projects`}
            className="text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            {isFa ? "همه پروژه‌ها" : "All projects"}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-md"
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold text-[var(--accent)]">
                  {t(project.category, lang)}
                </span>
                <h3 className="text-xl font-bold">{t(project.title, lang)}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {t(project.summary, lang)}
                </p>

                <div className="grid grid-cols-2 gap-3 rounded-xl bg-[var(--surface-muted)] p-3">
                  {project.metrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-lg font-extrabold text-[var(--accent)]">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        {t(metric.label, lang)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/${lang}/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  {isFa ? "مطالعه کامل Case Study" : "Read full Case Study"}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience & Skills */}
      <section className="grid gap-12 md:grid-cols-2">
        <div id="experience" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl font-bold">{isFa ? "سوابق کاری" : "Experience"}</h2>
          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold">{t(exp.role, lang)}</h3>
                  <span className="text-xs text-[var(--text-muted)]">
                    {t(exp.period, lang)}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                  {t(exp.company, lang)}
                </p>
                <ul className="mt-4 list-disc space-y-2 ps-5 text-sm text-[var(--text-muted)]">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{t(item, lang)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div id="skills" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl font-bold">{isFa ? "مهارت‌های فنی" : "Technical Skills"}</h2>
          <div className="space-y-4">
            {SKILL_GROUPS.map((group, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <h3 className="text-sm font-bold text-[var(--text)]">
                  {t(group.category, lang)}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--text)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Articles */}
      <section className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            {isFa ? "توصیه‌نامه‌ها" : "Testimonials"}
          </h2>
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <p className="text-sm leading-relaxed text-[var(--text)]">
                «{t(item.quote, lang)}»
              </p>
              <footer className="mt-4 text-xs text-[var(--text-muted)]">
                <strong className="text-[var(--text)]">{t(item.author, lang)}</strong> —{" "}
                {t(item.role, lang)}
              </footer>
            </blockquote>
          ))}
        </div>

        <div id="articles" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl font-bold">
            {isFa ? "مقالات و یادداشت‌های فنی" : "Technical Articles"}
          </h2>
          <div className="space-y-3">
            {ARTICLES.map((article) => (
              <div
                key={article.slug}
                className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div>
                  <h3 className="text-sm font-bold">{t(article.title, lang)}</h3>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    {article.date} • {t(article.readTime, lang)}
                  </p>
                </div>
                <ArrowIcon className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="scroll-mt-24 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center sm:p-12"
      >
        <h2 className="text-2xl font-bold sm:text-3xl">
          {isFa ? "آماده همکاری روی پروژه‌های چالش‌برانگیز" : "Let’s build something impactful"}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
          {isFa
            ? "برای موقعیت‌های شغلی فول‌استک، مشاوره معماری فرانت‌اند/بک‌اند یا همکاری پروژه‌ای در دسترس هستم."
            : "Open to full-stack engineering roles, architecture consulting, and impactful product collaborations."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:contact@mohammadaminmollakazemiha.ir"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            <FiMail className="h-4 w-4" />
            {isFa ? "ارسال ایمیل مستقیم" : "Send Direct Email"}
          </a>
        </div>
      </section>
    </div>
  );
}