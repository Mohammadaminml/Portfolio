import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-5xl font-bold mb-12">
            About Me
          </h2>

          <div className="glass p-10 rounded-[40px]">

            <p className="text-gray-300 text-xl leading-relaxed">
              I am a Full Stack Developer focused on designing and
              building modern web applications. I enjoy creating
              scalable, high-performance solutions and delivering
              exceptional user experiences through clean and efficient
              code.
            </p>

            <p className="text-gray-400 mt-8 leading-loose">
              Since 2020, I have been working professionally in software
              development, specializing in both frontend and backend
              technologies. My expertise includes React, Node.js,
              Django, Python, JavaScript, TypeScript, MongoDB,
              PostgreSQL, MySQL, and modern web architectures.
            </p>

            <p className="text-gray-400 mt-6 leading-loose">
              In addition to web development, I have experience in
              Artificial Intelligence, Machine Learning, Computer
              Vision, and software engineering with C and C++.
              I am passionate about building innovative digital
              products that combine functionality, performance,
              and great design.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}