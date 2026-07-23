import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { content } = useLanguage();
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-5xl font-bold mb-12">
            {content.about.title}
          </h2>

          <div className="glass p-10 rounded-[40px]">

            {content.about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "text-gray-300 text-xl leading-relaxed" : "text-gray-400 mt-6 leading-loose"}
              >
                {paragraph}
              </p>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}
