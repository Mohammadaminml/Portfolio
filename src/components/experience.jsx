import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "NextCode Solutions",
    year: "2023 - Present",
  },
  {
    title: "Backend & Android Developer",
    company: "XenoTech Group",
    year: "2023 - Present",
  },
  {
    title: "Programming & AI Instructor",
    company: "TechEdLab Academy",
    year: "2020 - Present",
  },
];

export default function Experience() {
  return (
    <section className="py-32" id="experience">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Experience
        </h2>

        <div className="relative border-l border-white/10 ml-4">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              className="mb-12 ml-8"
            >

              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-2" />

              <div className="glass p-6 rounded-3xl">
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.company}
                </p>

                <p className="text-gray-400 mt-2">
                  {item.year}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}