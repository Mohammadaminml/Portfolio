import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { getDictionary, getDirection, isValidLocale } from "@/lib/i18n";
import { buildMetadata, getPersonAndWebsiteJsonLd } from "@/lib/seo";
import { SUPPORTED_LOCALES } from "@/types/site";
import { AiAssistant } from "@/components/AiAssistant";

const vazirmatn = localFont({
  src: "../../../public/fonts/vazirmatn-arabic.woff2",
  variable: "--font-vazirmatn",
  display: "swap",
  preload: true,
});

const estedad = localFont({
  src: "../../../public/fonts/estedad-arabic.woff2",
  variable: "--font-estedad",
  display: "swap",
  preload: true,
});

const THEME_INIT_SCRIPT = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = saved || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return buildMetadata({ locale: lang });
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dir = getDirection(lang);
  const dict = getDictionary(lang);
  const jsonLd = getPersonAndWebsiteJsonLd(lang);

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      className={`${vazirmatn.variable} ${estedad.variable}`}
    >
      <head>
        <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <JsonLd data={jsonLd} />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-50 focus:rounded-md focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.accessibility.skipToContent}
        </a>
        <Navbar locale={lang} dict={dict} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={lang} />
        <AiAssistant locale={lang} />
      </body>
    </html>
  );
}