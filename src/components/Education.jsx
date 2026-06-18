import education from "../data/education";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-32">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Education
        </h2>

        <div className="space-y-8">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
              className="glass p-8 rounded-[30px]"
            >

              <h3 className="text-2xl font-bold">
                {item.degree}
              </h3>

              <p className="text-blue-400 mt-2">
                {item.field}
              </p>

              <p className="text-gray-300 mt-2">
                {item.university}
              </p>

              <p className="text-gray-500 mt-3">
                {item.period}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}