import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};

  return buildMetadata({
    locale: lang,
    path: "/contact",
    title:
      lang === "fa"
        ? "تماس با من | محمدامین ملاکاظمی‌ها"
        : "Contact | Mohammadamin Mollakazemiha",
    description:
      lang === "fa"
        ? "شروع همکاری برای توسعه محصول، طراحی وب و مشاوره فنی."
        : "Start a collaboration for product development, web engineering, or consulting.",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const isFa = lang === "fa";

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs font-extrabold text-(--accent)">
          {isFa ? "شروع یک همکاری" : "START A COLLABORATION"}
        </p>
        <h1 className="text-3xl font-black leading-tight sm:text-5xl">
          {isFa ? (
            <>
              از مسئله‌ات بگو؛
              <br />
              <em className="not-italic text-(--accent)">راه ساختنش را پیدا می‌کنیم.</em>
            </>
          ) : (
            <>
              Tell me about the problem;
              <br />
              <em className="not-italic text-(--accent)">we&apos;ll build the solution.</em>
            </>
          )}
        </h1>
        <p className="text-sm leading-relaxed text-(--text-muted) sm:text-base">
          {isFa
            ? "چند سؤال کوتاه کمک می‌کند پیش از اولین گفتگو، تصویر روشن‌تری از پروژه داشته باشم."
            : "A few quick questions help me understand your project before our first conversation."}
        </p>
      </header>

      <ContactForm locale={lang} />
    </section>
  );
}