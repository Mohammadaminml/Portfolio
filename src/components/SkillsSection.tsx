import { skills } from "@/data/skills";
import { Locale } from "@/types/site";

export function SkillsSection({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";

  return (
    <section id="skills" className="scroll-mt-24 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">
          {isFa ? "مهارت‌های فنی" : "Technical Skills"}
        </h2>
        <p className="text-sm text-[var(--text-muted)]">
          {isFa
            ? "فناوری‌ها و ابزارهایی که در توسعه محصولات وب استفاده می‌کنم"
            : "Technologies and tools I use to build production web applications"}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-sm"
          >
            <h3 className="mb-5 flex items-center justify-between text-base font-bold">
              <span>{group.label[locale]}</span>
              <span className="text-xs font-normal text-[var(--text-muted)]">
                {group.category}
              </span>
            </h3>

            <div className="space-y-4">
              {group.items.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="text-[var(--text)]">{skill.name}</span>
                    <span className="tabular-nums text-[var(--text-muted)]">
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-muted)]"
                  >
                    <div
                      className="h-full rounded-full bg-[var(--accent)] transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}