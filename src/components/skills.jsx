import skills from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-32">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Skills
        </h2>

        <div className="space-y-10">

          {skills.map((group) => (
            <div
              key={group.category}
              className="glass p-8 rounded-[30px]"
            >

              <h3 className="text-2xl font-bold mb-8">
                {group.category}
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

                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1.5,
                      }}
                      className="h-full bg-blue-500"
                    />

                  </div>

                </div>
              ))}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}