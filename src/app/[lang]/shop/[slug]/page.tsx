import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa6";
import { ProductVisual } from "@/components/ProductVisual";
import { localizeProduct, products } from "@/data/products";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return (["fa", "en"] as const).flatMap((lang) =>
    products.map((item) => ({ lang, slug: item.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) return {};

  const sourceProduct = products.find((item) => item.slug === slug);
  if (!sourceProduct) return {};

  const product = localizeProduct(sourceProduct, lang);

  return buildMetadata({
    locale: lang,
    path: `/shop/${product.slug}`,
    title: `${product.title} | ${
      lang === "fa" ? "فروشگاه محمدامین ملاکاظمی‌ها" : "Shop | Mohammadamin Mollakazemiha"
    }`,
    description: product.description,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const sourceProduct = products.find((item) => item.slug === slug);
  if (!sourceProduct) notFound();

  const product = localizeProduct(sourceProduct, lang);
  const isFa = lang === "fa";
  const BackArrow = isFa ? FaArrowRight : FaArrowLeft;

  const t = isFa
    ? {
        back: "بازگشت به فروشگاه",
        buy: "ثبت سفارش",
        note: "برای ثبت سفارش و دریافت راهنمای پرداخت، روی دکمه بالا بزنید.",
      }
    : {
        back: "Back to shop",
        buy: "Place order",
        note: "Contact me to confirm the order, delivery details, and next steps.",
      };

  const subject = encodeURIComponent(`Order: ${product.title}`);
  const orderLink = isFa
    ? "https://t.me/mohammadamintechsupport"
    : `mailto:mohammadaminmollakazemiha@gmail.com?subject=${subject}`;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Link
        href={`/${lang}/shop`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
      >
        <BackArrow className="h-3.5 w-3.5" />
        <span>{t.back}</span>
      </Link>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductVisual product={product} />

        <div>
          <span className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[var(--accent)]">
            {product.tag}
          </span>

          <p className="mt-6 text-xs font-extrabold text-[var(--accent)]">
            {product.category}
          </p>

          <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
            {product.title}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
            {product.description}
          </p>

          <ul className="my-7 grid gap-3 border-y border-[var(--border)] py-6 text-sm text-[var(--text)]">
            {product.includes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <FaCheck
                  className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
            <strong className="text-2xl font-black tabular-nums sm:text-3xl">
              {product.price}
            </strong>

            <a
              href={orderLink}
              target={isFa ? "_blank" : undefined}
              rel={isFa ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-8 py-3.5 text-sm font-extrabold text-white shadow-lg transition-transform hover:-translate-y-0.5 dark:bg-[var(--accent)]"
            >
              {t.buy}
            </a>
          </div>

          <small className="mt-4 block text-xs leading-relaxed text-[var(--text-muted)]">
            {t.note}
          </small>
        </div>
      </div>
    </section>
  );
}