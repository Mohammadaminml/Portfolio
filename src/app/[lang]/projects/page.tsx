import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";
import { ACCENT_STYLES } from "@/data/projects";
import { isValidLocale } from "@/lib/i18n";
import { getPublishedProjects } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type AccentKey = keyof typeof ACCENT_STYLES;

function getAccentStyle(accent: string) {
  if (accent in ACCENT_STYLES) {
    return ACCENT_STYLES[accent as AccentKey];
  }
  return Object.values(ACCENT_STYLES)[0];
}

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
    title:
      lang === "fa"
        ? "پروژه‌های منتخب | محمدامین ملاکاظمی‌ها"
        : "Selected Projects | Mohammadamin Mollakazemiha",
    description:
      lang === "fa"
        ? "مطالعات موردی پروژه‌های وب، موبایل و هوش مصنوعی با تمرکز بر مسئله، تصمیم‌های فنی و نتایج."
        : "Case studies across web, mobile, and AI engineering focusing on problems, architecture decisions, and outcomes.",
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const projects = await getPublishedProjects();
  const isFa = lang === "fa";
  const ArrowIcon = isFa ? FaArrowLeft : FaArrowRight;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-extrabold text-[var(--accent)]">
          {isFa ? "پروژه‌های منتخب" : "SELECTED PROJECTS"}
        </p>

        <h1 className="text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl">
          {isFa ? (
            <>
              پشت هر خروجی، یک مسئله
              <br />
              <span className="fa-hero-highlight">واقعی وجود دارد.</span>
            </>
          ) : (
            <>
              Behind every product, there is a
              <br />
              <span className="fa-hero-highlight">real-world problem.</span>
            </>
          )}
        </h1>

        <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {isFa
            ? "در این بخش فقط ابزارها را فهرست نکرده‌ام؛ می‌توانید مسئله، تصمیم‌های فنی و مسیر رسیدن به راهکار را ببینید."
            : "Rather than just listing tools, each case study walks through the problem, architectural trade-offs, and the path to the final solution."}
        </p>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const accent = getAccentStyle(project.accent);
          const title = isFa ? project.title : (project.titleEn || project.title);
          const eyebrow = isFa ? project.eyebrow : (project.eyebrowEn || project.eyebrow);
          const summary = isFa ? project.summary : (project.summaryEn || project.summary);

          return (
            <article
              key={project.id}
              className={`sig-card group flex flex-col overflow-hidden ${accent.border}`}
            >
              <Link
                href={`/${lang}/projects/${project.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="relative block aspect-[16/10] w-full overflow-hidden bg-[var(--navy)]"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt || title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">
                    {project.index}
                  </span>
                  <small className={`rounded-full px-3 py-1 text-xs font-semibold ${accent.badge}`}>
                    {eyebrow}
                  </small>
                </div>

                <h2 className="mt-5 text-xl font-black leading-snug sm:text-2xl">
                  <Link
                    href={`/${lang}/projects/${project.slug}`}
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    {title}
                  </Link>
                </h2>

                <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-muted)]">
                  {summary}
                </p>

                <div
                  dir="ltr"
                  className="mt-5 flex flex-wrap justify-start gap-1.5 rtl:justify-end"
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-[var(--border)] pt-5 text-xs font-extrabold">
                  <Link
                    href={`/${lang}/projects/${project.slug}`}
                    aria-label={
                      isFa
                        ? `مطالعه جزئیات پروژه ${title}`
                        : `Read case study: ${title}`
                    }
                    className="inline-flex items-center gap-1.5 text-[var(--accent)] transition-transform hover:-translate-x-0.5 ltr:hover:translate-x-0.5"
                  >
                    <span>{isFa ? "مطالعه پروژه" : "Read Case Study"}</span>
                    <ArrowIcon className="h-3 w-3" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                    >
                      <span>{isFa ? "نسخه زنده" : "Live Demo"}</span>
                      <FaArrowUpRightFromSquare className="h-3 w-3" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        isFa
                          ? `مخزن GitHub پروژه ${title}`
                          : `GitHub repository for ${title}`
                      }
                      className="inline-flex items-center gap-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}