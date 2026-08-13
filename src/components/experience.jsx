import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { fadeUp, viewport } from "../animations/motion";

export default function Experience() {
  const { content, isRtl } = useLanguage();
  return (
    <section className="py-32" id="experience">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold mb-16">
          {content.experience.title}
        </motion.h2>

        <div className="relative border-l ml-4 border-white/10">

          {content.experience.items.map(([title, company, year], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: isRtl ? 45 : -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: .6, delay: index * .1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 ml-8"
            >

              <motion.div
                className="timeline-dot absolute w-4 h-4 rounded-full mt-2 -left-2"
                whileInView={{ scale: [0, 1.35, 1] }}
                viewport={viewport}
              />

              <motion.div whileHover={{ x: isRtl ? -6 : 6 }} className="glass accent-card p-6 rounded-3xl">
                <h3 className="text-2xl font-bold">
                  {title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {company}
                </p>

                <p className="text-gray-400 mt-2">
                  {year}
                </p>
              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
