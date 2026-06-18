import certificates from "../data/certificates";
import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <section className="py-32" id="certificates">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {certificates.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="glass p-8 rounded-[30px]"
            >

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-blue-400 mt-3">
                {item.issuer}
              </p>

              <p className="text-gray-500 mt-3">
                {item.year}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}