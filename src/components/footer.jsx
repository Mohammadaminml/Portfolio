import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { content } = useLanguage();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold">
          {content.footer.name}
        </h3>

        <p className="text-gray-500 mt-3">
          {content.footer.role}
        </p>

        <p className="text-gray-600 mt-8">
          {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
