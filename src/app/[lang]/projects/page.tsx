import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import { CASE_STUDIES } from "@/data/portfolio";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { t } from "@/types/portfolio";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return buildMetadata({
    locale: lang,
    path: "/projects",
    title: lang === "fa" ? "پروژه‌ها و Case Studyها | محمدامین ملاکاظمی‌ها" : "Projects & Case Studies | Mohammadamin Mollakazemiha",
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const isFa = lang === "fa";
  const ArrowIcon = isFa ? FiArrowUpLeft : FiArrowUpRight;

  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 py-14">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold">
          {isFa ? "همه پروژه‌ها" : "All Projects"}
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          {isFa
            ? "هر پروژه به‌صورت Case Study شامل مسئله، راه‌حل معماری و نتایج عددی مستند شده است."
            : "Each project is documented as a Case Study covering problem, architecture, and measurable outcomes."}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {CASE_STUDIES.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[var(--accent)]">
                {t(project.category, lang)}
              </span>
              <h2 className="text-xl font-bold">{t(project.title, lang)}</h2>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {t(project.summary, lang)}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[var(--surface-muted)] px-2 py-0.5 text-xs text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/${lang}/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                {isFa ? "جزئیات" : "Details"}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}