import type { IconType } from "react-icons";
import {
  FaBolt,
  FaBrain,
  FaCode,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaGitlab,
  FaLayerGroup,
  FaLinux,
  FaMicrochip,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
  FaShieldHalved,
  FaTerminal,
} from "react-icons/fa6";
import { Locale } from "@/types/site";

interface TechItem {
  name: string;
  role: Record<Locale, string>;
  Icon: IconType;
}

const TECH_STACK: TechItem[] = [
  {
    name: "React 19",
    role: { fa: "رابط کاربری", en: "UI Library" },
    Icon: FaReact,
  },
  {
    name: "Next.js",
    role: { fa: "فول‌استک و SSR", en: "App Router & SSR" },
    Icon: FaLayerGroup,
  },
  {
    name: "TypeScript",
    role: { fa: "تایپ‌سیفتی", en: "Type Safety" },
    Icon: FaCode,
  },
  {
    name: "Tailwind CSS v4",
    role: { fa: "استایل‌دهی", en: "Styling" },
    Icon: FaBolt,
  },
  {
    name: "Python & Django",
    role: { fa: "بک‌اند و DRF", en: "Backend & DRF" },
    Icon: FaPython,
  },
  {
    name: ".NET",
    role: { fa: "سرویس‌های سازمانی", en: "Enterprise Backend" },
    Icon: FaServer,
  },
  {
    name: "C / C++",
    role: { fa: "برنامه‌نویسی سیستمی", en: "Systems & Performance" },
    Icon: FaMicrochip,
  },
  {
    name: "Node.js",
    role: { fa: "بک‌اند جاوااسکریپت", en: "JS Runtime" },
    Icon: FaNodeJs,
  },
  {
    name: "SQL Server & PostgreSQL",
    role: { fa: "پایگاه‌داده رابطه‌ای", en: "Relational DBs" },
    Icon: FaDatabase,
  },
  {
    name: "Applied AI & LLMs",
    role: { fa: "عامل‌های هوشمند", en: "AI Agents & ML" },
    Icon: FaBrain,
  },
  {
    name: "Docker",
    role: { fa: "کانتینرسازی", en: "Containerization" },
    Icon: FaDocker,
  },
  {
    name: "GitLab CI/CD",
    role: { fa: "استقرار خودکار", en: "CI/CD Pipelines" },
    Icon: FaGitlab,
  },
  {
    name: "Linux",
    role: { fa: "سرور و زیرساخت", en: "Server & Infra" },
    Icon: FaLinux,
  },
  {
    name: "Git",
    role: { fa: "کنترل نسخه", en: "Version Control" },
    Icon: FaGitAlt,
  },
  {
    name: "Playwright",
    role: { fa: "تست سرتاسری E2E", en: "E2E Testing" },
    Icon: FaShieldHalved,
  },
  {
    name: "k6",
    role: { fa: "تست بار و عملکرد", en: "Load & Performance" },
    Icon: FaTerminal,
  },
];

export function TechStackSection({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";

  return (
    <section id="tech" className="scroll-mt-24 space-y-8">
      <div className="space-y-1.5">
        <span className="text-xs font-extrabold text-(--accent)">
          {isFa ? "جعبه‌ابزار من" : "MY TOOLBOX"}
        </span>
        <h2 className="text-3xl font-black">
          {isFa ? "فناوری‌های مورد استفاده" : "Tech Stack"}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {TECH_STACK.map(({ name, role, Icon }) => (
          <div
            key={name}
            className="sig-card group flex items-center gap-3.5 p-4 transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--accent-soft) text-(--accent) transition-colors group-hover:bg-(--accent) group-hover:text-white">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <strong
                dir="ltr"
                className="block truncate text-sm font-extrabold text-(--text)"
              >
                {name}
              </strong>
              <span className="block truncate text-xs text-(--text-muted)">
                {role[locale]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}