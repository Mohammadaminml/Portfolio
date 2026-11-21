import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { CASE_STUDIES } from "@/data/portfolio";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { t } from "@/types/portfolio";
import { SUPPORTED_LOCALES } from "@/types/site";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((lang) =>
    CASE_STUDIES.map((project) => ({ lang, slug: project.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) return {};
  const project = CASE_STUDIES.find((p) => p.slug === slug);
  if (!project) return {};

  return buildMetadata({
    locale: lang,
    path: `/projects/${slug}`,
    title: `${t(project.title, lang)} | Case Study`,
    description: t(project.summary, lang),
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const project = CASE_STUDIES.find((p) => p.slug === slug);
  if (!project) notFound();

  const isFa = lang === "fa";

  return (
    <article className="mx-auto max-w-4xl space-y-12 px-6 py-14">
      <div className="space-y-4">
        <Link
          href={`/${lang}/projects`}
          className="text-sm font-medium text-[var(--accent)] hover:underline"
        >
          {isFa ? "← بازگشت به پروژه‌ها" : "← Back to Projects"}
        </Link>
        <p className="text-xs font-semibold text-[var(--accent)]">
          {t(project.category, lang)}
        </p>
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          {t(project.title, lang)}
        </h1>
        <p className="text-base leading-relaxed text-[var(--text-muted)]">
          {t(project.summary, lang)}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
            >
              <FiExternalLink className="h-4 w-4" />
              {isFa ? "مشاهده نسخه زنده" : "Live Demo"}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold hover:bg-[var(--surface-muted)]"
            >
              <FiGithub className="h-4 w-4" />
              {isFa ? "کد منبع در گیت‌هاب" : "Source Code"}
            </a>
          )}
        </div>
      </div>

      {/* Metrics */}
      <section className="grid gap-4 sm:grid-cols-3">
        {project.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <div className="text-2xl font-extrabold text-[var(--accent)]">
              {metric.value}
            </div>
            <div className="mt-1 text-xs text-[var(--text-muted)]">
              {t(metric.label, lang)}
            </div>
          </div>
        ))}
      </section>

      {/* Problem & Solution */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-lg font-bold">{isFa ? "مسئله (Problem)" : "The Problem"}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            {t(project.problem, lang)}
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-lg font-bold">
            {isFa ? "راه‌حل و معماری (Solution)" : "The Solution"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            {t(project.solution, lang)}
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold">{isFa ? "استک فنی" : "Tech Stack"}</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}