import { createContext, useContext, useEffect } from "react";
import { translations } from "./translations";

/* eslint-disable react-refresh/only-export-components */

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  useEffect(() => {
    localStorage.removeItem("portfolio-language");
    localStorage.removeItem("portfolio-theme");
    delete document.documentElement.dataset.theme;
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.title = "محمدامین ملاکاظمی‌ها | مهندس نرم‌افزار و توسعه‌دهنده فول‌استک";
  }, []);

  return (
    <LanguageContext.Provider value={{ language: "fa", isRtl: true, content: translations.fa }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
