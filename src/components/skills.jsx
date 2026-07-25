import skills from "../data/skills";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

export default function Skills() {
  const { content } = useLanguage();
  return (
    <section id="skills" className="py-32">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold mb-16">
          {content.skills.title}
        </motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-10">

          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              variants={cardReveal}
              whileHover={{ y: -5 }}
              className="glass accent-card p-8 rounded-[30px]"
            >

              <h3 className="text-2xl font-bold mb-8">
                {content.skills.categories[groupIndex]}
              </h3>

              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="mb-6"
                >

                  <div className="flex justify-between mb-2">

                    <span>{skill.name}</span>

                    <span>{skill.level}%</span>

                  </div>

                  <div className="skill-track h-2.5 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1.3,
                        delay: groupIndex * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      viewport={viewport}
                      className="skill-progress h-full"
                    />

                  </div>

                </div>
              ))}

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}
