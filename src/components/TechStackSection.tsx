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
  FaRocket,
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

interface TechGroup {
  title: Record<Locale, string>;
  items: TechItem[];
}

const TECH_GROUPS: TechGroup[] = [
  {
    title: { fa: "فرانت‌اند و رابط کاربری", en: "Frontend & UI" },
    items: [
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
    ],
  },
  {
    title: { fa: "بک‌اند، سیستم و پایگاه‌داده", en: "Backend, Systems & Data" },
    items: [
      {
        name: "Python & Django",
        role: { fa: "بک‌اند و DRF", en: "Backend & DRF" },
        Icon: FaPython,
      },
      {
        name: "FastAPI",
        role: { fa: "سرویس‌های سریع پایتون", en: "High-Performance APIs" },
        Icon: FaRocket,
      },
      {
        name: ".NET",
        role: { fa: "سرویس‌های سازمانی", en: "Enterprise Backend" },
        Icon: FaServer,
      },
      {
        name: "Node.js",
        role: { fa: "بک‌اند جاوااسکریپت", en: "JS Runtime" },
        Icon: FaNodeJs,
      },
      {
        name: "C / C++",
        role: { fa: "برنامه‌نویسی سیستمی", en: "Systems & Performance" },
        Icon: FaMicrochip,
      },
      {
        name: "SQL Server & PostgreSQL",
        role: { fa: "پایگاه‌داده رابطه‌ای", en: "Relational DBs" },
        Icon: FaDatabase,
      },
    ],
  },
  {
    title: { fa: "هوش مصنوعی و DevOps", en: "AI & DevOps" },
    items: [
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
    ],
  },
  {
    title: { fa: "کنترل نسخه و تست", en: "Version Control & Testing" },
    items: [
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
    ],
  },
];

export function TechStackSection({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";

  return (
    <section id="tech" className="scroll-mt-24 space-y-10">
      <div className="space-y-1.5">
        <span className="text-xs font-extrabold text-(--accent)">
          {isFa ? "جعبه‌ابزار من" : "MY TOOLBOX"}
        </span>
        <h2 className="text-3xl font-black">
          {isFa ? "فناوری‌های مورد استفاده" : "Tech Stack"}
        </h2>
      </div>

      <div className="space-y-8">
        {TECH_GROUPS.map((group) => (
          <div key={group.title.en} className="space-y-3.5">
            <h3 className="flex items-center gap-2 text-xs font-bold tracking-wide text-(--text-muted)">
              <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
              <span>{group.title[locale]}</span>
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map(({ name, role, Icon }) => (
                <div
                  key={name}
                  className="sig-card group flex items-center gap-3.5 px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-(--accent)/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--accent-soft) text-(--accent) transition-colors group-hover:bg-(--accent) group-hover:text-white">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>

                  <div className="min-w-0 flex-1 text-start">
                    <strong className="block truncate text-sm font-extrabold text-(--text)">
                      <span dir="ltr">{name}</span>
                    </strong>
                    <span className="mt-0.5 block truncate text-xs text-(--text-muted)">
                      {role[locale]}
                    </span>
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