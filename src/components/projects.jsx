import projects from "../data/projects";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

export default function Projects() {
  const { content } = useLanguage();
  return (
    <section id="projects" className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold mb-16">
          {content.projects.title}
        </motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => {
            const [title, description] = content.projects.items[index];
            return (

            <motion.div
              key={project.title}
              variants={cardReveal}
              whileHover={{
                y: -9,
              }}
              className="glass project-card p-8 rounded-[35px]"
            >
              <span className="project-number">0{index + 1}</span>

              <h3 className="text-2xl font-bold">
                {title}
              </h3>

              <p className="text-gray-400 mt-4">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="project-tech px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </motion.div>
          )})}

        </motion.div>

      </div>
    </section>
  );
}
