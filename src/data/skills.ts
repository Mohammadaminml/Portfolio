import { Locale } from "@/types/site";

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  label: Record<Locale, string>;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    label: { fa: "فرانت‌اند", en: "Frontend" },
    items: [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 100 },
      { name: "JavaScript", level: 100 },
      { name: "React", level: 100 },
      { name: "Tailwind", level: 90 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    category: "Backend",
    label: { fa: "بک‌اند", en: "Backend" },
    items: [
      { name: "Python", level: 100 },
      { name: "Django", level: 100 },
      { name: "Node.js", level: 100 },
      { name: "Express", level: 90 },
    ],
  },
  {
    category: "Database",
    label: { fa: "پایگاه داده", en: "Database" },
    items: [
      { name: "MongoDB", level: 100 },
      { name: "MySQL", level: 100 },
      { name: "PostgreSQL", level: 90 },
    ],
  },
];

export default skills;