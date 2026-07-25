import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { fadeUp, stagger, viewport } from "../animations/motion";

export default function About() {
  const { content } = useLanguage();
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >

          <motion.h2 variants={fadeUp} className="text-5xl font-bold mb-12">
            {content.about.title}
          </motion.h2>

          <motion.div variants={fadeUp} className="glass accent-card p-10 rounded-[40px]">

            {content.about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                variants={fadeUp}
                className={index === 0 ? "text-gray-300 text-xl leading-relaxed" : "text-gray-400 mt-6 leading-loose"}
              >
                {paragraph}
              </motion.p>
            ))}

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
