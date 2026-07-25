import education from "../data/education";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

export default function Education() {
  const { content } = useLanguage();
  return (
    <section id="education" className="py-32">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold mb-16">
          {content.education.title}
        </motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-8">

          {education.map((item, index) => {
            const [degree, field, university, period] = content.education.items[index];
            return (

            <motion.div
              key={item.degree}
              variants={cardReveal}
              whileHover={{ y: -6 }}
              className="glass accent-card education-card p-8 rounded-[30px]"
            >

              <h3 className="text-2xl font-bold">
                {degree}
              </h3>

              <p className="text-blue-400 mt-2">
                {field}
              </p>

              <p className="text-gray-300 mt-2">
                {university}
              </p>

              <p className="text-gray-500 mt-3">
                {period}
              </p>

            </motion.div>

          )})}

        </motion.div>

      </div>

    </section>
  );
}
