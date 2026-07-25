import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import publications from "../data/publications";
import { useLanguage } from "../i18n/LanguageContext";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

export default function Publications() {
  const { content, language } = useLanguage();
  const formatYear = (year) =>
    language === "fa" ? new Intl.NumberFormat("fa-IR").format(Number(year)) : year;
  return (
    <section id="publications" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold mb-16">{content.publications.title}</motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid md:grid-cols-3 gap-6">
          {publications.map((item, index) => {
            const [title, publisher] = content.publications.items[index];
            return (
            <motion.a
              key={item.title}
              variants={cardReveal}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass publication-card p-7 rounded-[30px] flex flex-col"
            >
              <p className="text-blue-400 text-sm mb-4">{formatYear(item.date)}</p>

              <h3 className="text-xl font-bold leading-relaxed">
                {title}
              </h3>

              <p className="text-gray-400 mt-5">{publisher}</p>

              <div className="publication-link flex items-center gap-2 mt-auto pt-8 text-blue-400">
                <span>{content.publications.view}</span>
                <FiExternalLink />
              </div>
            </motion.a>
          )})}
        </motion.div>
      </div>
    </section>
  );
}
