import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaLayerGroup, FaBrain, FaCheck } from "react-icons/fa6";
import Hero from "./Hero";
import ProductVisual from "./ProductVisual";
import products, { localizeProduct } from "../data/products";
import { useLanguage } from "../i18n/LanguageContext";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";
import PersianHome from "./PersianHome";

const serviceIcons = [FaLayerGroup, FaCode, FaBrain];

export default function Home() {
  const { content, language } = useLanguage();
  const { home } = content;
  const isFa = language === "fa";
  const localizedProducts = products.map(product => localizeProduct(product, language));
  const t = isFa ? {
    built:"فناوری‌هایی که با آن‌ها محصول می‌سازم", products:"فروشگاه محصولات دیجیتال", productTitle:<>ابزارهای آماده برای اینکه<br />حرفه‌ای‌تر و سریع‌تر بسازید.</>, productText:"قالب‌ها، زیرساخت‌های آماده و آموزش‌های کاربردی؛ حاصل تجربه واقعی توسعه محصول، نه مثال‌های تئوری.", shop:"مشاهده همه محصولات", explore:"جزئیات محصول",
    expertise:"تجربه و توانمندی‌ها", resumeTitle:"فقط کد نمی‌زنم؛ به ساختن یک محصول موفق فکر می‌کنم.", resumeText:"بیش از شش سال تجربه دارم در تبدیل مسئله‌های پیچیده به نرم‌افزارهایی که سریع، کاربردی و قابل توسعه‌اند؛ از طراحی رابط تا معماری بک‌اند.", resume:"مشاهده سوابق حرفه‌ای",
    available:"ظرفیت محدود برای همکاری جدید", custom:"برای کسب‌وکارتان یک محصول اختصاصی می‌خواهید؟", customText:"از طراحی مسیر محصول تا پیاده‌سازی نهایی کنارتان هستم؛ برای ساخت پلتفرم‌های وب، API و راهکارهای هوش مصنوعی.", checks:["طراحی و توسعه محصول","مشاوره فنی و معماری","همکاری بلندمدت با تیم شما"], talk:"درباره پروژه صحبت کنیم"
  } : { built:"Building digital products with", products:"Digital products", productTitle:<>Build faster with tools<br />I use myself.</>, productText:"Templates, starter kits, and practical resources for developers and product teams.", shop:"Visit the shop", explore:"Explore", expertise:"Experience & expertise", resumeTitle:"A developer who thinks like a product builder.", resumeText:"Six years of turning complex requirements into useful, maintainable software—from interface to infrastructure.", resume:"View full résumé", available:"Available for selected work", custom:"Need something custom?", customText:"I design and develop web platforms, APIs, and AI-powered products for ambitious teams.", checks:["Product development","Technical consulting","Team collaboration"], talk:"Start a conversation" };
  if (isFa) return <PersianHome />;
  return (
    <>
      <Hero />

      <section className="home-section trust-strip">
        <div className="max-w-7xl mx-auto px-6">
          <p>{t.built}</p>
          <div>{["React", "Python", "Django", "Node.js", "AI", "PostgreSQL"].map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="home-section home-shop py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="split-heading">
            <div className="home-section-heading">
              <p className="section-kicker">{t.products}</p><h2>{t.productTitle}</h2><p>{t.productText}</p>
            </div>
            <Link to="/shop" className="home-text-link">{t.shop} <FaArrowRight /></Link>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="featured-products grid md:grid-cols-3 gap-6 mt-14">
            {localizedProducts.map(product => (
              <motion.article variants={cardReveal} key={product.slug} className="featured-product">
                <Link to={`/shop/${product.slug}`}><ProductVisual product={product} compact /></Link>
                <div><span>{product.category}</span><strong>{product.price}</strong></div>
                <h3>{product.title}</h3>
                <Link to={`/shop/${product.slug}`} className="product-link">{t.explore} <FaArrowRight /></Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="home-section resume-block py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[.85fr_1.15fr] gap-14 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="resume-intro">
            <p className="section-kicker">{t.expertise}</p><h2>{t.resumeTitle}</h2><p>{t.resumeText}</p>
            <Link to="/experience" className="primary-button">{t.resume} <FaArrowRight /></Link>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="resume-list">
            {home.services.items.map(([title, description], index) => { const Icon = serviceIcons[index]; return (
              <motion.article variants={cardReveal} key={title}>
                <span><Icon /></span><div><small>0{index + 1}</small><h3>{title}</h3><p>{description}</p></div>
              </motion.article>
            );})}
          </motion.div>
        </div>
      </section>

      <section className="home-section proof-section py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6">
          <div className="home-stats-panel glass rounded-[32px] grid grid-cols-2">
            {home.stats.map(([value,label]) => <div className="home-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <div className="availability-card">
            <span className="status-dot" /><p className="section-kicker">{t.available}</p><h2>{t.custom}</h2><p>{t.customText}</p>
            <ul>{t.checks.map(item => <li key={item}><FaCheck/>{item}</li>)}</ul>
            <Link to="/contact">{t.talk} <FaArrowRight/></Link>
          </div>
        </div>
      </section>
    </>
  );
}
