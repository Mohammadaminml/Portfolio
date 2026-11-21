import { Locale } from "@/types/site";

export interface PublicationItem {
  id: string;
  title: Record<Locale, string>;
  publisher: Record<Locale, string>;
  date: Record<Locale, string>;
  link: string;
}

export const publications: PublicationItem[] = [
  {
    id: "blockchain-healthcare-access-control",
    title: {
      fa: "بلاکچین در کنترل دسترسی سامانه‌های هوشمند سلامت",
      en: "Blockchain in Access Control of Smart Healthcare Systems",
    },
    publisher: {
      fa: "دانشکده رفاه",
      en: "Refah Faculty",
    },
    date: {
      fa: "۱۴۰۴",
      en: "2025",
    },
    link: "https://vcert.ir/users/qr.php?c=refah2-00810051",
  },
  {
    id: "edge-ai-future-networks",
    title: {
      fa: "هوش مصنوعی لبه: معماری‌ها، چالش‌ها و نقش آن در شبکه‌های آینده",
      en: "Edge Artificial Intelligence: Architectures, Challenges and Its Role in Future Networks",
    },
    publisher: {
      fa: "بیست‌ونهمین کنفرانس ملی علوم کامپیوتر",
      en: "29th National Conference on Computer Science, Engineering and Information Technology",
    },
    date: {
      fa: "۱۴۰۵",
      en: "2026",
    },
    link: "https://civilica.com/l/180631/",
  },
  {
    id: "generative-ai-intelligent-systems",
    title: {
      fa: "هوش مصنوعی مولد در سیستم‌های هوشمند",
      en: "Generative AI in Intelligent Systems: Applications, Challenges and Future Research Directions",
    },
    publisher: {
      fa: "بیست‌ونهمین کنفرانس ملی علوم کامپیوتر",
      en: "29th National Conference on Computer Science, Engineering and Information Technology",
    },
    date: {
      fa: "۱۴۰۵",
      en: "2026",
    },
    link: "https://civilica.com/l/180631/",
  },
];

export default publications;