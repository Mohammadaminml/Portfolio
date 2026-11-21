import type { IconType } from "react-icons";
import { FaDocker, FaGitAlt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { Locale } from "@/types/site";

const TECHS: [string, IconType][] = [
  ["React", FaReact],
  ["Python", FaPython],
  ["Node.js", FaNodeJs],
  ["Django", SiDjango],
  ["MongoDB", SiMongodb],
  ["PostgreSQL", SiPostgresql],
  ["Tailwind", SiTailwindcss],
  ["Git", FaGitAlt],
  ["Docker", FaDocker],
];

export function TechStackSection({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";

  return (
    <section id="tech" className="scroll-mt-24 space-y-8">
      <div className="space-y-1.5">
        <span className="text-xs font-extrabold text-[var(--accent)]">
          {isFa ? "ابزارهای روزمره" : "DAILY TOOLKIT"}
        </span>
        <h2 className="text-3xl font-black">
          {isFa ? "فناوری‌های مورد استفاده" : "Tech Stack"}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {TECHS.map(([name, Icon]) => (
          <div
            key={name}
            className="sig-card group flex min-h-36 flex-col items-center justify-center gap-3.5 p-6 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1"
          >
            <Icon
              size={44}
              aria-hidden="true"
              className="text-[var(--text)] transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--accent)]"
            />
            <span className="text-sm font-semibold text-[var(--text-muted)]">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}