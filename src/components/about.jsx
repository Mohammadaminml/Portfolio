import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
        >

          <h2 className="text-5xl font-bold mb-12">
            About Me
          </h2>

          <div className="glass p-10 rounded-[40px]">

            <p className="text-gray-300 text-xl leading-relaxed">
              من یک Full Stack Developer هستم که روی طراحی و توسعه
              وب‌اپلیکیشن‌های مدرن تمرکز دارم. علاقه‌مند به React،
              Node.js و ساخت محصولات با تجربه کاربری عالی هستم.
            </p>

            <p className="text-gray-400 mt-8 leading-loose">
              از سال ۱۳۹۹ به صورت حرفه‌ای برنامه‌نویسی می‌کنم و
              در حوزه توسعه وب، بک‌اند، فرانت‌اند و هوش مصنوعی
              فعالیت دارم.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}