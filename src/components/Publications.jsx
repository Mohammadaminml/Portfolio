import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import publications from "../data/publications";

export default function Publications() {
  return (
    <section id="publications" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16">Publications</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {publications.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-7 rounded-[30px] block"
            >
              <p className="text-blue-400 text-sm mb-4">{item.date}</p>

              <h3 className="text-xl font-bold leading-relaxed">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-5">{item.publisher}</p>

              <div className="flex items-center gap-2 mt-8 text-blue-400">
                <span>View Publication</span>
                <FiExternalLink />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}