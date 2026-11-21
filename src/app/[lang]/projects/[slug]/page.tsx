import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaGithub,
} from "react-icons/fa6";
import { getProjectBySlug, projects } from "@/data/projects";
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
    projects.map((project) => ({ lang, slug: project.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) return {};
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    locale: lang,
    path: `/projects/${project.slug}`,
    title: `${project.title} | ${
      lang === "fa" ? "محمدامین ملاکاظمی‌ها" : "Mohammadamin Mollakazemiha"
    }`,
    description: project.summary,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const isFa = lang === "fa";
  const BackArrow = isFa ? FaArrowRight : FaArrowLeft;
  const NextArrow = isFa ? FaArrowLeft : FaArrowRight;

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const heroGradient = HERO_GRADIENTS[project.accent] ?? HERO_GRADIENTS.blue;

  return (
    <article className="overflow-hidden bg-[var(--bg)]">
      {/* Hero Header */}
      <header
        className={`bg-gradient-to-br ${heroGradient} pt-16 pb-24 text-white sm:pt-24 sm:pb-32`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href={`/${lang}/projects`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
          >
            <BackArrow className="h-3.5 w-3.5" />
            <span>{isFa ? "همه پروژه‌ها" : "All Projects"}</span>
          </Link>

          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold text-white/70">
                {project.eyebrow} · {project.index}
              </p>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                {project.description}
              </p>

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
                    >
                      <span>{isFa ? "مشاهده نسخه زنده" : "Live Demo"}</span>
                      <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>{isFa ? "مشاهده در GitHub" : "View on GitHub"}</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            <dl className="divide-y divide-white/20 border-y border-white/20 text-sm">
              <div className="py-4">
                <dt className="text-xs text-white/60">
                  {isFa ? "نقش من" : "My Role"}
                </dt>
                <dd className="mt-1 font-bold">{project.role}</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs text-white/60">
                  {isFa ? "دامنه اجرا" : "Scope"}
                </dt>
                <dd className="mt-1 font-bold">{project.scope}</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs text-white/60">
                  {isFa ? "فناوری‌ها" : "Technologies"}
                </dt>
                <dd className="mt-1 font-bold" dir="ltr">
                  {project.tech.join(" · ")}
                </dd>
              </div>
            </dl>
          </div>

          {/* Overlapping Cover Image */}
          <figure className="relative z-10 mt-12 -mb-36 aspect-[1.586/1] w-full overflow-hidden rounded-[28px_14px_28px_14px] border border-white/25 bg-[#10223e] shadow-2xl sm:mt-16 sm:-mb-52 sm:rounded-[40px_20px_40px_20px]">
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </figure>
        </div>
      </header>

      {/* Case Study Body */}
      <div className="mx-auto max-w-6xl px-6 pt-44 pb-20 sm:pt-64 sm:pb-28">
        {/* 01 Challenge */}
        <section className="grid max-w-4xl gap-4 border-t border-[var(--border)] py-12 md:grid-cols-[5rem_1fr] md:gap-10">
          <span className="font-mono text-sm font-bold text-[var(--text-muted)]">
            01
          </span>
          <div className="space-y-3">
            <p className="text-xs font-extrabold text-[var(--accent)]">
              {isFa ? "مسئله" : "THE CHALLENGE"}
            </p>
            <h2 className="text-2xl font-black sm:text-4xl">
              {isFa ? "چه چیزی باید حل می‌شد؟" : "What needed to be solved?"}
            </h2>
            <p className="pt-2 text-sm leading-loose text-[var(--text-muted)] sm:text-base">
              {project.challenge}
            </p>
          </div>
        </section>

        {/* 02 Solution */}
        <section className="grid max-w-4xl gap-4 border-t border-[var(--border)] py-12 md:grid-cols-[5rem_1fr] md:gap-10">
          <span className="font-mono text-sm font-bold text-[var(--text-muted)]">
            02
          </span>
          <div className="space-y-3">
            <p className="text-xs font-extrabold text-[var(--accent)]">
              {isFa ? "راهکار" : "THE SOLUTION"}
            </p>
            <h2 className="text-2xl font-black sm:text-4xl">
              {isFa ? "چطور به مسئله نزدیک شدم؟" : "How I approached it"}
            </h2>
            <p className="pt-2 text-sm leading-loose text-[var(--text-muted)] sm:text-base">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Key Decisions (Navy Block) */}
        <section className="fa-navy-block mt-10 grid gap-10 rounded-[32px_16px_32px_16px] p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-3">
            <p className="text-xs font-extrabold text-[#8eb7ff]">
              {isFa ? "تصمیم‌های کلیدی" : "KEY DECISIONS"}
            </p>
            <h2 className="text-2xl font-black leading-snug text-white sm:text-3xl">
              {isFa
                ? "انتخاب‌هایی که ساختار راهکار را شکل دادند."
                : "Architectural choices that shaped the solution."}
            </h2>
          </div>

          <ol className="divide-y divide-white/15 border-t border-white/15">
            {project.decisions.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[2.5rem_1fr] gap-3 py-5 text-sm leading-relaxed"
              >
                <b className="font-mono text-xs text-[#7890b0]">
                  0{index + 1}
                </b>
                <span className="text-slate-200">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Outcomes */}
        <section className="mt-20 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-extrabold text-[var(--accent)]">
              {isFa ? "خروجی پروژه" : "OUTCOMES"}
            </p>
            <h2 className="text-2xl font-black sm:text-4xl">
              {isFa
                ? "نتیجه‌ای قابل نگهداری، نه فقط یک دموی موقت."
                : "A maintainable result, not just a temporary demo."}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {project.outcomes.map((item) => (
              <p
                key={item}
                className="flex items-start gap-3 rounded-[22px_12px_22px_12px] border border-[var(--border)] bg-[var(--surface)] p-5 text-sm leading-relaxed text-[var(--text)]"
              >
                <FaCheck
                  className="mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </p>
            ))}
          </div>

          <small className="block text-xs leading-relaxed text-[var(--text-muted)]">
            {isFa
              ? "برای حفظ دقت و محرمانگی، فقط نتایجی نمایش داده شده‌اند که بدون انتشار اطلاعات مشتری قابل بیان هستند."
              : "To maintain accuracy and confidentiality, only outcomes that can be shared without disclosing client data are listed."}
          </small>
        </section>

        {/* Next Project */}
        <section className="mt-20 flex items-center justify-between gap-6 border-t border-[var(--border)] pt-10">
          <div>
            <span className="text-xs text-[var(--text-muted)]">
              {isFa ? "پروژه بعدی" : "Next Project"}
            </span>
            <h2 className="mt-1 text-xl font-black sm:text-3xl">
              <Link
                href={`/${lang}/projects/${nextProject.slug}`}
                className="transition-colors hover:text-[var(--accent)]"
              >
                {nextProject.title}
              </Link>
            </h2>
          </div>

          <Link
            href={`/${lang}/projects/${nextProject.slug}`}
            aria-label={
              isFa
                ? `پروژه بعدی: ${nextProject.title}`
                : `Next project: ${nextProject.title}`
            }
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--navy)] text-white transition-transform hover:-translate-x-1 ltr:hover:translate-x-1 dark:bg-[var(--accent)]"
          >
            <NextArrow className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </article>
  );
}