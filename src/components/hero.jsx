import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { content } = useLanguage();
  const { hero } = content;
  return (
    <section
      id="home"
      className="hero-section min-h-screen flex items-center justify-center px-6 py-28"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-2 text-sm text-emerald-300 mb-7">
            <span className="status-dot" />
            {hero.availability}
          </div>

          <p className="text-blue-400 font-medium tracking-wide mb-4">
            {hero.eyebrow}
          </p>

          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white max-w-[700px]">
            {hero.firstName}
            <br />
            {hero.lastName}
          </h1>

          <p className="mt-7 text-gray-400 text-lg md:text-xl leading-8 max-w-xl">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {hero.techs.map(
              (item) => (
                <span
                  key={item}
                  className="tech-pill px-4 py-2 rounded-full text-sm text-gray-200"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/projects"
              className="primary-button px-8 py-3.5 rounded-full font-semibold text-white inline-flex items-center gap-2"
            >
              {hero.projects}
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/contact"
              className="secondary-button px-8 py-3.5 rounded-full font-semibold text-white inline-block"
            >
              {hero.contact}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative hero-portrait-wrap"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="portrait-grid absolute -inset-5 rounded-[48px]" />

          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt={hero.imageAlt}
            className="hero-portrait relative rounded-[36px] w-full max-w-md mx-auto"
          />
          <div className="experience-badge glass absolute -bottom-6 start-0 md:-start-5 rounded-2xl px-5 py-4">
            <p className="text-sm text-gray-400">{hero.role}</p>
            <p className="font-bold text-white mt-1">{hero.experienceBadge}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
