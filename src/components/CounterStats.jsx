import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

export default function CounterStats() {
  const { content } = useLanguage();
  return (
    <section className="py-24" id="stats">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold mb-12">{content.statistics.title}</motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {content.statistics.items.map(([num, label]) => (
            <motion.div
              key={label}
              variants={cardReveal}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass stat-card p-8 rounded-3xl text-center"
            >
              <h3 className="text-5xl font-bold text-blue-400">{num}</h3>
              <p className="mt-3 text-gray-300">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
