import projects from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="glass p-8 rounded-[35px]"
            >

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}