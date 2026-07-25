import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDocker
} from "react-icons/fa";

import {
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss
} from "react-icons/si";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

export default function TechStack() {
  const { content } = useLanguage();
  const techs = [
    ["React", FaReact],
    ["Python", FaPython],
    ["Node.js", FaNodeJs],
    ["Django", SiDjango],
    ["MongoDB", SiMongodb],
    ["PostgreSQL", SiPostgresql],
    ["Tailwind", SiTailwindcss],
    ["Git", FaGitAlt],
    ["Docker", FaDocker],
  ];

  return (
    <section className="py-32" id="tech">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold mb-16">
          {content.techStack.title}
        </motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">

          {techs.map(([name, Icon]) => (
            <motion.div
              key={name}
              variants={cardReveal}
              whileHover={{ y: -8, rotate: -1 }}
              className="glass tech-card p-7 rounded-3xl flex flex-col gap-4 items-center justify-center"
            >
              <Icon className="tech-icon" size={50} />
              <span className="text-sm text-gray-400">{name}</span>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
