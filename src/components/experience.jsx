import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function Experience() {
  const { content, language } = useLanguage();
  return (
    <section className="py-32" id="experience">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          {content.experience.title}
        </h2>

        <div className={`relative ${language === "fa" ? "border-r mr-4" : "border-l ml-4"} border-white/10`}>

          {content.experience.items.map(([title, company, year]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              className={language === "fa" ? "mb-12 mr-8" : "mb-12 ml-8"}
            >

              <div className={`absolute w-4 h-4 bg-blue-500 rounded-full mt-2 ${language === "fa" ? "-right-2" : "-left-2"}`} />

              <div className="glass p-6 rounded-3xl">
                <h3 className="text-2xl font-bold">
                  {title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {company}
                </p>

                <p className="text-gray-400 mt-2">
                  {year}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
