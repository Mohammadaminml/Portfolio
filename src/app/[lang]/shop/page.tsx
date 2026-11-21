import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaBolt, FaCode, FaShieldHalved } from "react-icons/fa6";
import { ProductVisual } from "@/components/ProductVisual";
import { localizeProduct, products } from "@/data/products";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return buildMetadata({
    locale: lang,
    path: "/shop",
    title:
      lang === "fa"
        ? "فروشگاه محصولات و خدمات دیجیتال | محمدامین ملاکاظمی‌ها"
        : "Digital Products & Services | Mohammadamin Mollakazemiha",
  });
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const isFa = lang === "fa";
  const ArrowIcon = isFa ? FaArrowLeft : FaArrowRight;

  const t = isFa
    ? {
        kicker: "فروشگاه محصولات و خدمات دیجیتال",
        titleLine1: "چیزهایی که کمک می‌کنند",
        titleLine2: "یک قدم جلوتر باشید.",
        description:
          "از قالب و کد آماده تا طراحی کامل وب‌سایت؛ راهکارهایی کاربردی که بر اساس تجربه پروژه‌های واقعی ارائه می‌شوند.",
        view: "دیدن جزئیات",
        benefits: [
          {
            Icon: FaCode,
            title: "اجرای حرفه‌ای",
            text: "محصولات تمیز، مستند و خدماتی متناسب با نیاز واقعی شما.",
          },
          {
            Icon: FaBolt,
            title: "فرایند شفاف",
            text: "پس از ثبت سفارش، جزئیات تحویل یا مراحل اجرای پروژه هماهنگ می‌شود.",
          },
          {
            Icon: FaShieldHalved,
            title: "پشتیبانی واقعی",
            text: "در مسیر راه‌اندازی و استفاده از محصول تنها نمی‌مانید.",
          },
        ],
      }
    : {
        kicker: "Digital products & services",
        titleLine1: "Tools and services made",
        titleLine2: "for people who build.",
        description:
          "From production-ready resources to complete custom websites, all shaped by real project experience.",
        view: "View details",
        benefits: [
          {
            Icon: FaCode,
            title: "Professional delivery",
            text: "Clean products and tailored services designed around real needs.",
          },
          {
            Icon: FaBolt,
            title: "Clear process",
            text: "Delivery details or project milestones are confirmed after your order.",
          },
          {
            Icon: FaShieldHalved,
            title: "Real support",
            text: "Practical help throughout setup, delivery, and launch.",
          },
        ],
      };

  const localizedProducts = products.map((product) =>
    localizeProduct(product, lang)
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-extrabold text-[var(--accent)]">
          {t.kicker}
        </p>
        <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          {t.titleLine1}
          <br />
          {t.titleLine2}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {t.description}
        </p>
      </header>

      {/* Product Grid */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {localizedProducts.map((product) => (
          <article
            key={product.slug}
            className="sig-card group flex flex-col overflow-hidden"
          >
            <Link
              href={`/${lang}/shop/${product.slug}`}
              aria-label={`${t.view}: ${product.title}`}
              className="block"
            >
              <ProductVisual product={product} compact />
            </Link>

            <div className="flex flex-1 flex-col p-5">
              <div>
                <span className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-bold text-[var(--accent)]">
                  {product.tag}
                </span>
              </div>

              <h2 className="mt-3 text-lg font-extrabold">{product.title}</h2>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                <strong className="text-sm font-extrabold tabular-nums">
                  {product.price}
                </strong>
                <Link
                  href={`/${lang}/shop/${product.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-bold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white"
                >
                  {t.view}
                  <ArrowIcon className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Shop Benefits */}
      <div className="mt-20 grid gap-6 border-t border-[var(--border)] pt-10 md:grid-cols-3">
        {t.benefits.map(({ Icon, title, text }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}