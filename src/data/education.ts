import { Locale } from "@/types/site";

export interface EducationItem {
  id: string;
  degree: Record<Locale, string>;
  field: Record<Locale, string>;
  university: Record<Locale, string>;
  period: Record<Locale, string>;
}

export const education: EducationItem[] = [
  {
    id: "msc-computer-engineering",
    degree: {
      fa: "کارشناسی ارشد مهندسی کامپیوتر",
      en: "M.Sc. in Computer Engineering",
    },
    field: {
      fa: "مهندسی نرم‌افزار",
      en: "Software Engineering",
    },
    university: {
      fa: "دانشگاه آزاد اسلامی واحد تهران شمال",
      en: "Islamic Azad University, North Tehran Branch",
    },
    period: {
      fa: "۱۴۰۴ – اکنون",
      en: "2025 – Present",
    },
  },
  {
    id: "bsc-computer-engineering",
    degree: {
      fa: "کارشناسی مهندسی کامپیوتر",
      en: "B.Sc. in Computer Engineering",
    },
    field: {
      fa: "مهندسی هوش مصنوعی",
      en: "Artificial Intelligence Engineering",
    },
    university: {
      fa: "دانشگاه آزاد اسلامی واحد تهران غرب",
      en: "Islamic Azad University, West Tehran Branch",
    },
    period: {
      fa: "۱۴۰۱ – ۱۴۰۴",
      en: "2022 – 2025",
    },
  },
];

export default education;