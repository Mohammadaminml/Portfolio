import { Locale } from "./site";

export interface LocalizedText {
  fa: string;
  en: string;
}

export interface ProjectMetric {
  label: LocalizedText;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  metrics: ProjectMetric[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  company: LocalizedText;
  period: LocalizedText;
  highlights: LocalizedText[];
}

export interface SkillGroup {
  category: LocalizedText;
  items: string[];
}

export interface Testimonial {
  id: string;
  quote: LocalizedText;
  author: LocalizedText;
  role: LocalizedText;
}

export interface ArticlePreview {
  slug: string;
  title: LocalizedText;
  date: string;
  readTime: LocalizedText;
}

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale];
}