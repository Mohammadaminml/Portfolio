import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage === "fa" || savedLanguage === "en") return savedLanguage;
  return navigator.language.toLowerCase().startsWith("fa") ? "fa" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    const direction = language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      content: translations[language],
      toggleLanguage: () => setLanguage((current) => current === "en" ? "fa" : "en"),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Context and hook intentionally live together to keep the language API cohesive.
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
