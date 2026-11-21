export const SUPPORTED_LOCALES = ["fa", "en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export interface Dictionary {
  meta: {
    siteName: string;
    title: string;
    description: string;
    jobTitle: string;
  };
  accessibility: {
    skipToContent: string;
    loading: string;
    switchLanguage: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    blog: string;
    contact: string;
  };
  hero: {
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
  };
}