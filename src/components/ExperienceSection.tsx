import { getTranslations } from "@/data/translations";
import { Locale } from "@/types/site";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const { experience } = getTranslations(locale);
  const isFa = locale === "fa";

  return (
    <section id="experience" className="scroll-mt-24 space-y-10">
      <div className="space-y-1.5">
        <span className="text-xs font-extrabold text-[var(--accent)]">
          {isFa ? "مسیر حرفه‌ای" : "CAREER TIMELINE"}
        </span>
        <h2 className="text-3xl font-black">{experience.title}</h2>
      </div>

      <div className="relative ms-3 border-s-2 border-[var(--border)]">
        {experience.items.map(([title, company, year]) => (
          <div key={`${title}-${year}`} className="relative mb-8 ms-7 last:mb-0">
            <span
              aria-hidden="true"
              className="absolute -start-[37px] top-7 h-4 w-4 rounded-full border-4 border-[var(--bg)] bg-[var(--accent)] shadow-sm"
            />

            <article className="sig-card p-6 transition-transform duration-200 hover:-translate-x-1.5 ltr:hover:translate-x-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-extrabold text-[var(--text)] sm:text-xl">
                  {title}
                </h3>
                <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-0.5 text-xs font-semibold text-[var(--text-muted)]">
                  {year}
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
                {company}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}