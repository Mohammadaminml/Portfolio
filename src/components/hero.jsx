import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-blue-500 font-semibold text-lg mb-4">
            Full Stack Developer
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-[650px]">
            Mohammadamin
            <br />
            Mollakazemiha
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            I write code that creates meaningful digital experiences.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["React", "Django", "Node.js", "MongoDB", "AI", "Python"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/20 text-white"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-semibold text-white inline-block"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-white/40 transition px-8 py-3 rounded-full font-semibold text-white inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="Mohammadamin Mollakazemiha"
            className="relative rounded-[40px] w-full max-w-md mx-auto shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}