import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center apple-gradient"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-blue-400 text-xl">
            Full Stack Developer
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
            Mohammadamin
            <br />
            Mollakazemiha
          </h1>

          <p className="text-gray-400 mt-8 text-xl max-w-xl">
            I write code that creates meaningful digital experiences.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["React", "Django", "Node.js", "MongoDB", "AI", "Python"].map(
              (item) => (
                <span key={item} className="glass px-4 py-2 rounded-full">
                  {item}
                </span>
              )
            )}
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 transition-all px-8 py-4 rounded-full"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="glass px-8 py-4 rounded-full"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full" />

          <img
            src="/profile.png"
            alt="Mohammadamin Mollakazemiha"
            className="relative rounded-[40px] w-full max-w-md mx-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}