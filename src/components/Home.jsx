import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaLayerGroup, FaBrain } from "react-icons/fa6";
import Hero from "./Hero";
import { useLanguage } from "../i18n/LanguageContext";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

const serviceIcons = [FaLayerGroup, FaCode, FaBrain];

export default function Home() {
  const { content } = useLanguage();
  const { home } = content;

  return (
    <>
      <Hero />

      <section className="home-section home-services py-28">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="home-section-heading">
            <p className="section-kicker">{home.services.kicker}</p>
            <h2>{home.services.title}</h2>
            <p>{home.services.description}</p>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6 mt-14">
            {home.services.items.map(([title, description], index) => {
              const Icon = serviceIcons[index];
              return (
                <motion.article
                  key={title}
                  variants={cardReveal}
                  whileHover={{ y: -9 }}
                  className="glass home-service-card rounded-[30px] p-8"
                >
                  <div className="home-service-icon">
                    <Icon />
                  </div>
                  <span className="service-index">0{index + 1}</span>
                  <h3 className="text-2xl font-bold mt-8">{title}</h3>
                  <p className="text-gray-400 mt-4 leading-7">{description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      <section className="home-section py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="home-stats-panel glass rounded-[36px] grid grid-cols-2 lg:grid-cols-4"
          >
            {home.stats.map(([value, label]) => (
              <motion.div variants={cardReveal} key={label} className="home-stat">
                <strong>{value}</strong>
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="home-section py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="home-section-heading">
              <p className="section-kicker">{home.projects.kicker}</p>
              <h2>{home.projects.title}</h2>
              <p>{home.projects.description}</p>
            </div>
            <Link to="/projects" className="home-text-link">
              {home.projects.viewAll}
              <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-2 gap-6 mt-14"
          >
            {home.projects.items.map(([title, description, stack], index) => (
              <motion.article
                key={title}
                variants={cardReveal}
                whileHover={{ y: -8 }}
                className="home-project-card glass rounded-[32px] p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="project-number">0{index + 1}</span>
                  <span className="home-project-arrow" aria-hidden="true">↗</span>
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-400 mt-4 leading-7">{description}</p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {stack.map((item) => (
                    <span key={item} className="project-tech px-3 py-1.5 rounded-full text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="home-section pb-32 pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="home-cta glass rounded-[40px] px-8 py-14 md:p-16"
          >
            <div>
              <p className="section-kicker">{home.cta.kicker}</p>
              <h2>{home.cta.title}</h2>
              <p>{home.cta.description}</p>
            </div>
            <Link to="/contact" className="primary-button rounded-full px-8 py-4 font-semibold">
              {home.cta.button}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
