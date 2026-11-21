import { FiCpu, FiLayout, FiServer } from "react-icons/fi";
import { getTranslations } from "@/data/translations";
import { Locale } from "@/types/site";

const ICONS = [FiLayout, FiServer, FiCpu];

export function ServicesAndStatsSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <section className="space-y-14">
      {/* Services */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-extrabold text-[var(--accent)]">
            {t.home.services.kicker}
          </span>
          <h2 className="text-3xl font-black leading-snug">
            {t.home.services.title}
          </h2>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {t.home.services.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.home.services.items.map(([title, desc], idx) => {
            const Icon = ICONS[idx] ?? FiLayout;
            return (
              <article key={title} className="sig-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 divide-y divide-[var(--border)] overflow-hidden rounded-[28px_12px_28px_12px] border border-[var(--border)] bg-[var(--surface-muted)]/60 md:grid-cols-4 md:divide-x md:divide-y-0 rtl:md:divide-x-reverse">
        {t.home.stats.map(([value, label]) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center px-4 py-8 text-center"
          >
            <strong className="text-3xl font-black tabular-nums text-[var(--text)] sm:text-4xl">
              {value}
            </strong>
            <span className="mt-2 text-xs font-medium text-[var(--text-muted)]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}