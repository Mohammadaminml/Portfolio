import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBolt, FaCode, FaShieldHalved } from "react-icons/fa6";
import products, { localizeProduct } from "../data/products";
import { useLanguage } from "../i18n/LanguageContext";
import ProductVisual from "./ProductVisual";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

export default function Shop() {
  const { language } = useLanguage();
  const t = language === "fa" ? {
    kicker:"فروشگاه محصولات و خدمات دیجیتال", title:<>چیزهایی که کمک می‌کنند<br />یک قدم جلوتر باشید.</>, description:"از قالب و کد آماده تا طراحی کامل وب‌سایت؛ راهکارهایی کاربردی که بر اساس تجربه پروژه‌های واقعی ارائه می‌شوند.", view:"دیدن جزئیات",
    benefits:[["اجرای حرفه‌ای","محصولات تمیز، مستند و خدماتی متناسب با نیاز واقعی شما."],["فرایند شفاف","پس از ثبت سفارش، جزئیات تحویل یا مراحل اجرای پروژه هماهنگ می‌شود."],["پشتیبانی واقعی","در مسیر راه‌اندازی و استفاده از محصول تنها نمی‌مانید."]]
  } : { kicker:"Digital products & services", title:<>Tools and services made<br />for people who build.</>, description:"From production-ready resources to complete custom websites, all shaped by real project experience.", view:"View details", benefits:[["Professional delivery","Clean products and tailored services designed around real needs."],["Clear process","Delivery details or project milestones are confirmed after your order."],["Real support","Practical help throughout setup, delivery, and launch."]] };
  const localizedProducts = products.map(product => localizeProduct(product, language));
  return (
    <section className="shop-page py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="shop-header">
          <p className="section-kicker">{t.kicker}</p><h1>{t.title}</h1><p>{t.description}</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="product-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {localizedProducts.map((product) => (
            <motion.article key={product.slug} variants={cardReveal} className="product-card">
              <Link to={`/shop/${product.slug}`} aria-label={`${t.view}: ${product.title}`}>
                <ProductVisual product={product} compact />
              </Link>
              <div className="product-card-body">
                <div className="flex items-center justify-between gap-4">
                  <span className="product-tag">{product.tag}</span>
                </div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className="product-card-footer">
                  <strong className="product-price">{product.price}</strong>
                  <Link to={`/shop/${product.slug}`} className="product-link">{t.view} <FaArrowRight /></Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="shop-benefits grid md:grid-cols-3 gap-6 mt-20">
          {[[FaCode,...t.benefits[0]],[FaBolt,...t.benefits[1]],[FaShieldHalved,...t.benefits[2]]].map(([Icon,title,text]) => (
            <motion.div variants={cardReveal} key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
