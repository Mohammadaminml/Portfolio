import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center apple-gradient"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{opacity:0,y:80}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
        >

          <span className="text-blue-400 text-xl">
            Full Stack Developer
          </span>

          <h1 className="text-6xl md:text-8xl font-bold mt-5 leading-tight">
            محمدامین
            <br />
            ملاکاظمی‌ها
          </h1>

          <p className="text-gray-400 mt-8 text-xl max-w-xl">
            کدهایی می‌نویسم که تجربه می‌سازن
          </p>

          <div className="flex gap-4 mt-10">

            <button
              className="bg-blue-500 hover:bg-blue-600 transition-all px-8 py-4 rounded-full"
            >
              مشاهده پروژه‌ها
            </button>

            <button
              className="glass px-8 py-4 rounded-full"
            >
              تماس با من
            </button>

          </div>

        </motion.div>

        <motion.div
          initial={{opacity:0,scale:.7}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1.2}}
          className="relative"
        >

          <div
            className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full"
          />

          <img
            src="/profile.png"
            alt="Mohammadamin"
            className="relative rounded-[40px] w-full max-w-md mx-auto"
          />

        </motion.div>

      </div>
    </section>
  );
}