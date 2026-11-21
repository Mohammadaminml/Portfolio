import { Locale } from "@/types/site";

interface StatItem {
  value: string;
  label: string;
}

const STATS: Record<Locale, StatItem[]> = {
  fa: [
    { value: "۶+", label: "سال تجربه" },
    { value: "۶۰+", label: "پروژه واقعی" },
    { value: "۱۵۰+", label: "دانشجو" },
    { value: "۳", label: "مقاله علمی" },
  ],
  en: [
    { value: "6+", label: "Years Experience" },
    { value: "60+", label: "Delivered Projects" },
    { value: "150+", label: "Students Mentored" },
    { value: "3", label: "Published Papers" },
  ],
};

export function CounterStatsSection({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";
  const items = STATS[locale];

  return (
    <section id="stats" className="scroll-mt-24 space-y-8">
      <div className="space-y-1.5">
        <span className="text-xs font-extrabold text-(--accent)">
          {isFa ? "آمار و دستاوردها" : "BY THE NUMBERS"}
        </span>
        <h2 className="text-3xl font-black">
          {isFa ? "نگاهی سریع به اعداد" : "Statistics"}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="sig-card p-8 text-center transition-transform duration-200 hover:-translate-y-1.5"
          >
            <h3 className="text-4xl font-black tabular-nums text-(--accent) sm:text-5xl">
              {item.value}
            </h3>
            <p className="mt-3 text-sm font-medium text-(--text-muted)">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}