import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { content, language } = useLanguage();
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
          <div className="availability inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-7">
            <span className="status-dot" />
            {hero.availability}
          </div>

          <p className="hero-eyebrow font-medium tracking-wide mb-4">{language === "fa" ? "مهندس نرم‌افزار  •  بنیان‌گذار برند MohammadAminTech" : "DEVELOPER · FOUNDER OF MOHAMMADAMINTECH"}</p>

          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] max-w-[700px]">
            {language === "fa" ? <>ایده‌ها را به<br /><em>محصول واقعی</em> تبدیل می‌کنم.</> : <>I build products<br />for the <em>digital world.</em></>}
          </h1>

          <p className="hero-description mt-7 text-lg md:text-xl leading-8 max-w-xl">
            {language === "fa" ? `من ${hero.firstName} هستم؛ توسعه‌دهنده فول‌استک. به کسب‌وکارها کمک می‌کنم ایده‌هایشان را به نرم‌افزارهای سریع، زیبا و قابل توسعه تبدیل کنند.` : `I’m ${hero.firstName}, a full-stack developer creating thoughtful software, practical developer tools, and digital resources.`}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {hero.techs.map(
              (item) => (
                <span
                  key={item}
                  className="tech-pill px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/shop"
              className="primary-button px-8 py-3.5 rounded-full font-semibold text-white inline-flex items-center gap-2"
            >
              {language === "fa" ? "دیدن محصولات" : "Explore products"}
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/experience"
              className="secondary-button px-8 py-3.5 rounded-full font-semibold inline-block"
            >
              {language === "fa" ? "آشنایی با مسیر حرفه‌ای من" : "View my résumé"}
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
          <motion.div
            className="experience-badge absolute -bottom-6 start-0 md:-start-5 rounded-2xl px-5 py-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04 }}
          >
            <p className="badge-label text-sm">{language === "fa" ? "تجربه حرفه‌ای" : "Experience"}</p>
            <p className="font-bold mt-1">{hero.experienceBadge}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
