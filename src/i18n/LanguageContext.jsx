import { translations } from "./translations";

// The portfolio is English-only; this hook keeps content access consistent.
export function useLanguage() {
  return { content: translations.en };
}

