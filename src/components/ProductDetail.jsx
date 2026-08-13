import { Navigate, Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import products, { localizeProduct } from "../data/products";
import ProductVisual from "./ProductVisual";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const sourceProduct = products.find((item) => item.slug === slug);
  if (!sourceProduct) return <Navigate to="/shop" replace />;
  const product = localizeProduct(sourceProduct, language);
  const t = language === "fa" ? { back:"بازگشت به فروشگاه", buy:"ثبت سفارش", note:"برای ثبت سفارش و دریافت راهنمای پرداخت، روی دکمه بالا بزنید." } : { back:"Back to shop", buy:"Place order", note:"Contact me to confirm the order, delivery details, and next steps." };

  const subject = encodeURIComponent(`Order: ${product.title}`);
  const orderLink = language === "fa"
    ? "https://t.me/mohammadamintechsupport"
    : `mailto:mohammadaminmollakazemiha@gmail.com?subject=${subject}`;
  return (
    <section className="product-detail py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/shop" className="back-link"><FaArrowLeft /> {t.back}</Link>
        <div className="grid lg:grid-cols-2 gap-14 items-center mt-10">
          <ProductVisual product={product} />
          <div className="product-copy">
            <span className="product-tag">{product.tag}</span>
            <p className="section-kicker mt-7">{product.category}</p>
            <h1>{product.title}</h1>
            <p className="product-lead">{product.description}</p>
            <ul>{product.includes.map((item) => <li key={item}><FaCheck />{item}</li>)}</ul>
            <div className="product-purchase">
              <strong>{product.price}</strong>
              <a
                className="primary-button"
                href={orderLink}
                target={language === "fa" ? "_blank" : undefined}
                rel={language === "fa" ? "noreferrer" : undefined}
              >
                {t.buy}
              </a>
            </div>
            <small>{t.note}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
