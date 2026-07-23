import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import publications from "../data/publications";
import { useLanguage } from "../i18n/LanguageContext";

export default function Publications() {
  const { content, language } = useLanguage();
  const formatYear = (year) =>
    language === "fa" ? new Intl.NumberFormat("fa-IR").format(Number(year)) : year;
  return (
    <section id="publications" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16">{content.publications.title}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {publications.map((item, index) => {
            const [title, publisher] = content.publications.items[index];
            return (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-7 rounded-[30px] block"
            >
              <p className="text-blue-400 text-sm mb-4">{formatYear(item.date)}</p>

              <h3 className="text-xl font-bold leading-relaxed">
                {title}
              </h3>

              <p className="text-gray-400 mt-5">{publisher}</p>

              <div className="flex items-center gap-2 mt-8 text-blue-400">
                <span>{content.publications.view}</span>
                <FiExternalLink />
              </div>
            </motion.a>
          )})}
        </div>
      </div>
    </section>
  );
}
