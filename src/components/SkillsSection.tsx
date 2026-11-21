import type { IconType } from "react-icons";
import {
  FaBrain,
  FaCode,
  FaGears,
  FaServer,
  FaShieldHalved,
} from "react-icons/fa6";
import { Locale } from "@/types/site";

interface SkillGroup {
  id: string;
  Icon: IconType;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    Icon: FaCode,
    title: {
      fa: "مهندسی فرانت‌اند",
      en: "Frontend Engineering",
    },
    subtitle: {
      fa: "رابط‌های کاربری سریع، تایپ‌سیف و مقیاس‌پذیر",
      en: "Fast, type-safe, and scalable user interfaces",
    },
    skills: [
      "React 19",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "Ant Design v5",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Axios",
      "HTML5 / CSS3",
      "SEO & Accessibility",
    ],
  },
  {
    id: "backend",
    Icon: FaServer,
    title: {
      fa: "بک‌اند و پایگاه‌داده",
      en: "Backend & Databases",
    },
    subtitle: {
      fa: "طراحی APIهای امن، معماری سرویس و کوئری‌های بهینه",
      en: "Reliable APIs, service architecture, and optimized queries",
    },
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      ".NET",
      "C",
      "C++",
      "Node.js",
      "Microsoft SQL Server",
      "PostgreSQL",
      "RESTful APIs",
      "System Architecture",
    ],
  },
  {
    id: "ai",
    Icon: FaBrain,
    title: {
      fa: "هوش مصنوعی کاربردی",
      en: "Applied AI",
    },
    subtitle: {
      fa: "هوشمندسازی فرایندها، عامل‌های هوشمند و یادگیری ماشین",
      en: "Workflow automation, AI agents, and machine learning",
    },
    skills: [
      "LLM Integration",
      "AI Agents & Function Calling",
      "Prompt Engineering",
      "Machine Learning",
      "Edge AI",
      "Generative AI",
      "Data Processing",
    ],
  },
  {
    id: "devops",
    Icon: FaGears,
    title: {
      fa: "دواپس و زیرساخت",
      en: "DevOps & Infrastructure",
    },
    subtitle: {
      fa: "استقرار خودکار، پایش پایپ‌لاین و مدیریت سرور",
      en: "Automated deployments, pipeline monitoring, and infrastructure",
    },
    skills: [
      "GitLab CI/CD",
      "GitHub Actions",
      "Webhooks",
      "Docker",
      "Linux",
      "DNS & CDN",
      "Git",
    ],
  },
  {
    id: "testing",
    Icon: FaShieldHalved,
    title: {
      fa: "تست و تضمین کیفیت",
      en: "Testing & QA",
    },
    subtitle: {
      fa: "تست بار، تست سرتاسری و ارزیابی عملکرد نرم‌افزار",
      en: "Load testing, end-to-end verification, and performance evaluation",
    },
    skills: [
      "Playwright (E2E)",
      "k6 (Performance & Load)",
      "Unit & Integration Testing",
      "Usability Evaluation",
      "API Testing",
    ],
  },
];

export function SkillsSection({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";

  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      <div className="space-y-1.5">
        <span className="text-xs font-extrabold text-(--accent)">
          {isFa ? "توانمندی‌های فنی" : "TECHNICAL SKILLS"}
        </span>
        <h2 className="text-3xl font-black">
          {isFa ? "مهارت‌های فنی" : "Skills & Expertise"}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map(({ id, Icon, title, subtitle, skills }) => (
          <article
            key={id}
            className="sig-card flex flex-col p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex items-start gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px_6px] bg-(--accent-soft) text-(--accent)">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-(--text)">
                  {title[locale]}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-(--text-muted)">
                  {subtitle[locale]}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  dir="ltr"
                  className="rounded-full border border-(--border) bg-(--bg) px-3 py-1 text-xs font-semibold text-(--text) transition-colors hover:border-(--accent)/50 hover:text-(--accent)"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}