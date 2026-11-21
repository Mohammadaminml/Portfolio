import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { AiAssistant } from "@/components/AiAssistant";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollTop } from "@/components/ScrollTop";
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
    path: "",
    title:
      lang === "fa"
        ? "محمدامین ملاکاظمی‌ها | مهندس نرم‌افزار و توسعه‌دهنده فول‌استک"
        : "Mohammadamin Mollakazemiha | Full Stack Developer",
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const isFa = lang === "fa";

  return (
    <html
      lang={lang}
      dir={isFa ? "rtl" : "ltr"}
      data-theme="light"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)] antialiased">
        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:rounded-xl focus:bg-[var(--accent)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg"
        >
          {isFa ? "رفتن مستقیم به محتوای اصلی" : "Skip to main content"}
        </a>

        <Navbar locale={lang} />

        <main
          id="main-content"
          tabIndex={-1}
          className="relative z-10 flex-1 outline-none"
        >
          {children}
        </main>

        <Footer locale={lang} />
        <ScrollTop locale={lang} />
        <AiAssistant locale={lang} />
      </body>
    </html>
  );
}