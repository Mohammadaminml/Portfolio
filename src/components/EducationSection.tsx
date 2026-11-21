import { education } from "@/data/education";
import { Locale } from "@/types/site";

export function EducationSection({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";

  return (
    <section id="education" className="scroll-mt-24 space-y-8">
      <div className="space-y-1.5">
        <span className="text-xs font-extrabold text-(--accent)">
          {isFa ? "سوابق تحصیلی" : "ACADEMIC BACKGROUND"}
        </span>
        <h2 className="text-3xl font-black">
          {isFa ? "تحصیلات" : "Education"}
        </h2>
      </div>

      <div className="space-y-5">
        {education.map((item) => (
          <article
            key={item.id}
            className="sig-card p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-extrabold text-(--text) sm:text-xl">
                {item.degree[locale]}
              </h3>
              <span className="rounded-full border border-(--border) bg-(--bg) px-3 py-0.5 text-xs font-semibold text-(--text-muted)">
                {item.period[locale]}
              </span>
            </div>

            <p className="mt-2 text-sm font-semibold text-(--accent)">
              {item.field[locale]}
            </p>

            <p className="mt-2 text-sm text-(--text-muted)">
              {item.university[locale]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}