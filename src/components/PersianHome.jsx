import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaBookOpen, FaCheck, FaCode, FaGithub, FaLayerGroup, FaBrain, FaLinkedinIn } from "react-icons/fa6";
import products, { localizeProduct } from "../data/products";
import ProductVisual from "./ProductVisual";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

const capabilities = [
  [FaLayerGroup, "طراحی تجربه محصول", "از ساختار صفحات تا جزئی‌ترین تعامل‌ها؛ تجربه‌ای که کاربر با آن ارتباط می‌گیرد."],
  [FaCode, "مهندسی فول‌استک", "رابط سریع، بک‌اند مطمئن و معماری‌ای که همراه کسب‌وکار شما رشد می‌کند."],
  [FaBrain, "هوش مصنوعی کاربردی", "هوشمندسازی فرایندها با راهکارهایی که در دنیای واقعی قابل استفاده‌اند."],
];

const trustSignals = [
  { Icon: FaLayerGroup, label: "پروژه‌ها", title: "فرایند، تصمیم و خروجی", text: "Case Studyهایی که فقط ابزارها را نام نمی‌برند و مسیر حل مسئله را هم نشان می‌دهند.", href: "/projects", action: "مشاهده پروژه‌ها" },
  { Icon: FaBookOpen, label: "پژوهش", title: "۳ مقاله منتشرشده", text: "فعالیت پژوهشی در هوش مصنوعی، شبکه‌های آینده، بلاکچین و سامانه‌های هوشمند.", href: "/publications", action: "بررسی مقالات" },
  { Icon: FaGithub, label: "کد و فعالیت فنی", title: "پروفایل عمومی GitHub", text: "مخازن، تجربه‌های فنی و بخشی از مسیر ساخت محصولات در یک پروفایل قابل بررسی.", href: "https://github.com/Mohammadaminml", external: true, action: "رفتن به GitHub" },
  { Icon: FaLinkedinIn, label: "سابقه حرفه‌ای", title: "پروفایل LinkedIn", text: "نمایی عمومی از مسیر حرفه‌ای، تخصص‌ها و ارتباطات کاری برای ارزیابی دقیق‌تر همکاری.", href: "https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201", external: true, action: "رفتن به LinkedIn" },
];

export default function PersianHome() {
  const localizedProducts = products.map((product) => localizeProduct(product, "fa"));
  return (
    <div className="fa-home">
      <section id="home" className="fa-hero">
        <div className="fa-hero-pattern" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 fa-hero-grid">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="fa-hero-copy">
            <motion.div variants={fadeUp} className="fa-hero-topline"><span className="status-dot" /> ظرفیت محدود برای همکاری جدید</motion.div>
            <motion.p variants={fadeUp} className="fa-overline">محمدامین ملاکاظمی‌ها  /  مهندس نرم‌افزار  /  بنیان‌گذار برند MohammadAminTech</motion.p>
            <motion.h1 variants={fadeUp}>ایده‌های جسورانه را<br /><span>واقعی می‌کنم.</span></motion.h1>
            <motion.p variants={fadeUp} className="fa-hero-lead">محصول دیجیتال فقط مجموعه‌ای از کدها نیست؛ باید زیبا باشد، سریع کار کند و یک مسئله واقعی را حل کند. من دقیقاً همین‌جا وارد می‌شوم.</motion.p>
            <motion.div variants={fadeUp} className="fa-hero-actions">
              <Link to="/contact" className="fa-main-cta">پروژه‌ات را شروع کن <FaArrowLeft /></Link>
              <Link to="/projects" className="fa-ghost-cta">نمونه‌کارها را ببین</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity:0, scale:.92, rotate:2 }} animate={{ opacity:1, scale:1, rotate:0 }} transition={{ duration:.9 }} className="fa-hero-stage">
            <div className="fa-portrait-frame"><img src={`${import.meta.env.BASE_URL}profile.webp`} alt="محمدامین ملاکاظمی‌ها" width="600" height="600" fetchPriority="high" decoding="async" /></div>
            <div className="fa-floating-card fa-float-code"><span>پروژه‌های تحویل‌شده</span><strong>+۶۰</strong></div>
            <div className="fa-floating-card fa-float-exp"><span>تجربه حرفه‌ای</span><strong>+۶ سال</strong></div>
            <div className="fa-stage-label">طراحی <i /> توسعه <i /> محصول</div>
          </motion.div>
        </div>
        <div className="fa-tech-marquee"><div>REACT <b>✦</b> PYTHON <b>✦</b> DJANGO <b>✦</b> NODE.JS <b>✦</b> ARTIFICIAL INTELLIGENCE <b>✦</b> POSTGRESQL</div></div>
      </section>

      <section className="fa-products py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="fa-section-head">
            <div><span>۰۱ / فروشگاه</span><h2>ابزارهایی برای<br /><em>سریع‌تر ساختن.</em></h2></div>
            <div><p>محصولاتی که از دل تجربه واقعی پروژه‌ها بیرون آمده‌اند؛ آماده استفاده، قابل توسعه و همراه با پشتیبانی.</p><Link to="/shop">همه محصولات <FaArrowLeft /></Link></div>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="fa-product-bento">
            {localizedProducts.map((product,index) => (
              <motion.article variants={cardReveal} key={product.slug} className={`fa-product-item fa-product-${index+1}`}>
                <Link to={`/shop/${product.slug}`}><ProductVisual product={product} compact={index !== 0} /></Link>
                <div className="fa-product-meta"><span>{product.tag}</span><strong>{product.title}</strong><p>{product.description}</p><div><b>{product.price}</b><Link to={`/shop/${product.slug}`}>جزئیات <FaArrowLeft /></Link></div></div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="fa-capabilities py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fa-section-number">۰۲</div>
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="fa-cap-intro">
              <span>توانمندی‌ها</span><h2>از فکر اولیه<br />تا محصول نهایی.</h2><p>با ترکیب نگاه مهندسی و درک محصول، راهکاری می‌سازم که هم برای کاربر جذاب باشد و هم از نظر فنی قابل اتکا.</p>
              <Link to="/experience">مسیر حرفه‌ای من <FaArrowLeft /></Link>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="fa-cap-list">
              {capabilities.map(([Icon,title,text],index) => <motion.article variants={cardReveal} key={title}><b>۰{index+1}</b><span><Icon /></span><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="fa-trust py-28" aria-labelledby="trust-title">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="fa-trust-head">
            <div><span>اعتماد در عمل</span><h2 id="trust-title">قبل از همکاری،<br /><em>خودت بررسی کن.</em></h2></div>
            <p>اعتماد با چند جمله تبلیغاتی ساخته نمی‌شود. اینجا مسیرهایی را می‌بینی که تجربه فنی، خروجی‌ها و فعالیت حرفه‌ای من را قابل بررسی می‌کنند.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="fa-trust-grid">
            {trustSignals.map(({ Icon, label, title, text, href, external, action }, index) => {
              const content = <><div className="fa-trust-icon"><Icon /></div><span>۰{index + 1} / {label}</span><h3>{title}</h3><p>{text}</p><b>{action} <FaArrowLeft /></b></>;
              return external ? <motion.a variants={cardReveal} key={title} href={href} target="_blank" rel="noreferrer" aria-label={`${action}؛ در پنجره جدید`}>{content}</motion.a> : <motion.div variants={cardReveal} key={title}><Link to={href}>{content}</Link></motion.div>;
            })}
          </motion.div>
          <div className="fa-trust-note"><FaCheck /><p><strong>شفافیت مهم‌تر از نمایش است.</strong> نظر مشتری تنها با متن واقعی و اجازه انتشار نام یا شرکت در سایت قرار می‌گیرد.</p></div>
        </div>
      </section>

      <section className="fa-proof py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fa-proof-grid">
            {[["۶+","سال تجربه"],["۶۰+","پروژه واقعی"],["۱۵۰+","دانشجو"],["۳","مقاله علمی"]].map(([num,label]) => <div key={label}><strong>{num}</strong><span>{label}</span></div>)}
          </div>
          <div className="fa-final-cta">
            <div><span>یک ایده خوب داری؟</span><h2>بیایید تبدیلش کنیم<br />به چیزی که دیده شود.</h2></div>
            <div><p>برای توسعه محصول، مشاوره فنی یا یک همکاری جدی آماده‌ام.</p><Link to="/contact">شروع یک گفتگو <FaArrowLeft /></Link><small><FaCheck /> معمولاً کمتر از ۲۴ ساعت پاسخ می‌دهم</small></div>
          </div>
        </div>
      </section>
    </div>
  );
}
