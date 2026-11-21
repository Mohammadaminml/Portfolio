import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { IconType } from "react-icons";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaBrain,
  FaCheck,
  FaCode,
  FaGithub,
  FaLayerGroup,
  FaLinkedinIn,
} from "react-icons/fa6";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProductVisual } from "@/components/ProductVisual";
import { PublicationsSection } from "@/components/PublicationsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { localizeProduct, products } from "@/data/products";
import { isValidLocale } from "@/lib/i18n";
import { AboutSection } from "@/components/AboutSection";

interface CapabilityItem {
  Icon: IconType;
  title: string;
  text: string;
}

interface TrustSignalItem {
  Icon: IconType;
  label: string;
  title: string;
  text: string;
  href: string;
  external?: boolean;
  action: string;
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const isFa = lang === "fa";
  const ArrowIcon = isFa ? FaArrowLeft : FaArrowRight;
  const localizedProducts = products.map((product) =>
    localizeProduct(product, lang)
  );

  const capabilities: CapabilityItem[] = isFa
    ? [
        {
          Icon: FaLayerGroup,
          title: "طراحی تجربه محصول",
          text: "از ساختار صفحات تا جزئی‌ترین تعامل‌ها؛ تجربه‌ای که کاربر با آن ارتباط می‌گیرد.",
        },
        {
          Icon: FaCode,
          title: "مهندسی فول‌استک",
          text: "رابط سریع، بک‌اند مطمئن و معماری‌ای که همراه کسب‌وکار شما رشد می‌کند.",
        },
        {
          Icon: FaBrain,
          title: "هوش مصنوعی کاربردی",
          text: "هوشمندسازی فرایندها با راهکارهایی که در دنیای واقعی قابل استفاده‌اند.",
        },
      ]
    : [
        {
          Icon: FaLayerGroup,
          title: "Product Experience Design",
          text: "From page architecture to micro-interactions—interfaces users genuinely enjoy.",
        },
        {
          Icon: FaCode,
          title: "Full-Stack Engineering",
          text: "Fast frontends, reliable backends, and scalable architectures built to grow.",
        },
        {
          Icon: FaBrain,
          title: "Applied AI Solutions",
          text: "Practical machine learning and automation tailored to real-world workflows.",
        },
      ];

  const trustSignals: TrustSignalItem[] = isFa
    ? [
        {
          Icon: FaLayerGroup,
          label: "پروژه‌ها",
          title: "فرایند، تصمیم و خروجی",
          text: "Case Studyهایی که فقط ابزارها را نام نمی‌برند و مسیر حل مسئله را هم نشان می‌دهند.",
          href: `/${lang}/projects`,
          action: "مشاهده پروژه‌ها",
        },
        {
          Icon: FaBookOpen,
          label: "پژوهش",
          title: "۳ مقاله منتشرشده",
          text: "فعالیت پژوهشی در هوش مصنوعی، شبکه‌های آینده، بلاکچین و سامانه‌های هوشمند.",
          href: "#publications",
          action: "بررسی مقالات",
        },
        {
          Icon: FaGithub,
          label: "کد و فعالیت فنی",
          title: "پروفایل عمومی GitHub",
          text: "مخازن، تجربه‌های فنی و بخشی از مسیر ساخت محصولات در یک پروفایل قابل بررسی.",
          href: "https://github.com/Mohammadaminml",
          external: true,
          action: "رفتن به GitHub",
        },
        {
          Icon: FaLinkedinIn,
          label: "سابقه حرفه‌ای",
          title: "پروفایل LinkedIn",
          text: "نمایی عمومی از مسیر حرفه‌ای، تخصص‌ها و ارتباطات کاری برای ارزیابی دقیق‌تر همکاری.",
          href: "https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201",
          external: true,
          action: "رفتن به LinkedIn",
        },
      ]
    : [
        {
          Icon: FaLayerGroup,
          label: "Projects",
          title: "Process, Decisions & Outcomes",
          text: "Case studies that walk through real architectural trade-offs, not just tool lists.",
          href: `/${lang}/projects`,
          action: "View Projects",
        },
        {
          Icon: FaBookOpen,
          label: "Research",
          title: "3 Published Papers",
          text: "Peer-reviewed research across Edge AI, Generative AI, and Blockchain healthcare.",
          href: "#publications",
          action: "Read Publications",
        },
        {
          Icon: FaGithub,
          label: "Open Source",
          title: "Public GitHub Profile",
          text: "Repositories, boilerplates, and production experiments available for inspection.",
          href: "https://github.com/Mohammadaminml",
          external: true,
          action: "Visit GitHub",
        },
        {
          Icon: FaLinkedinIn,
          label: "Career",
          title: "LinkedIn Profile",
          text: "Public overview of my professional timeline, roles, and engineering network.",
          href: "https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201",
          external: true,
          action: "Visit LinkedIn",
        },
      ];

  const stats: [string, string][] = isFa
    ? [
        ["۶+", "سال تجربه"],
        ["۶۰+", "پروژه واقعی"],
        ["۱۵۰+", "دانشجو"],
        ["۳", "مقاله علمی"],
      ]
    : [
        ["6+", "Years Experience"],
        ["60+", "Delivered Projects"],
        ["150+", "Students Mentored"],
        ["3", "Published Papers"],
      ];

  return (
    <div className="overflow-hidden">
      {/* 1. Flagship Hero */}
      <section id="home" className="fa-hero">
        <div className="fa-hero-pattern" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-600/20 bg-[var(--surface)]/80 px-4 py-1.5 text-xs font-semibold text-emerald-700 backdrop-blur-sm dark:text-emerald-400">
              <span className="status-dot" />
              <span>
                {isFa
                  ? "ظرفیت محدود برای همکاری جدید"
                  : "Limited availability for new collaborations"}
              </span>
            </div>

            <p className="text-xs font-bold text-[var(--text-muted)]">
              {isFa
                ? "محمدامین ملاکاظمی‌ها / مهندس نرم‌افزار / بنیان‌گذار برند MohammadAminTech"
                : "Mohammadamin Mollakazemiha / Software Engineer / Founder of MohammadAminTech"}
            </p>

            <h1 className="text-4xl font-black leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
              {isFa ? (
                <>
                  ایده‌های جسورانه را
                  <br />
                  <span className="fa-hero-highlight">واقعی می‌کنم.</span>
                </>
              ) : (
                <>
                  Turning bold ideas into
                  <br />
                  <span className="fa-hero-highlight">real products.</span>
                </>
              )}
            </h1>

            <p className="max-w-xl text-sm leading-loose text-[var(--text-muted)] sm:text-base">
              {isFa
                ? "محصول دیجیتال فقط مجموعه‌ای از کدها نیست؛ باید زیبا باشد، سریع کار کند و یک مسئله واقعی را حل کند. من دقیقاً همین‌جا وارد می‌شوم."
                : "A digital product isn't just lines of code—it should look sharp, run fast, and solve a real problem. That's where I come in."}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-transform hover:-translate-y-0.5 dark:bg-[var(--accent)]"
              >
                <span>{isFa ? "پروژه‌ات را شروع کن" : "Start a Project"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <Link
                href={`/${lang}/projects`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/75 px-6 py-3.5 text-sm font-bold text-[var(--text)] backdrop-blur-sm transition-colors hover:bg-[var(--surface)]"
              >
                {isFa ? "نمونه‌کارها را ببین" : "View Projects"}
              </Link>
            </div>
          </div>

          {/* Arched Portrait Stage */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="fa-portrait-frame aspect-[4/5] w-full">
              <Image
                src="/profile.webp"
                alt={isFa ? "محمدامین ملاکاظمی‌ها" : "Mohammadamin Mollakazemiha"}
                fill
                priority
                sizes="(max-width: 1024px) 384px, 448px"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute top-6 start-0 z-20 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 shadow-lg backdrop-blur-md">
              <span className="block text-[11px] text-[var(--text-muted)]">
                {isFa ? "پروژه‌های تحویل‌شده" : "Delivered Projects"}
              </span>
              <strong className="text-xl font-black text-[var(--text)]">
                {isFa ? "+۶۰" : "60+"}
              </strong>
            </div>

            <div className="absolute bottom-6 end-0 z-20 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 shadow-lg backdrop-blur-md">
              <span className="block text-[11px] text-[var(--text-muted)]">
                {isFa ? "تجربه حرفه‌ای" : "Experience"}
              </span>
              <strong className="text-xl font-black text-[var(--accent)]">
                {isFa ? "+۶ سال" : "6+ yrs"}
              </strong>
            </div>
          </div>
        </div>

        {/* Tech Marquee */}
        <div className="fa-tech-marquee">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 text-xs font-semibold tracking-widest">
            <span>REACT</span> <b>✦</b>
            <span>PYTHON</span> <b>✦</b>
            <span>DJANGO</span> <b>✦</b>
            <span>NODE.JS</span> <b>✦</b>
            <span>ARTIFICIAL INTELLIGENCE</span> <b>✦</b>
            <span>POSTGRESQL</span>
          </div>
        </div>
      </section>

      {/* 2. Section 01: Products Bento */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="text-xs font-extrabold text-[var(--accent)]">
              {isFa ? "۰۱ / فروشگاه" : "01 / SHOP"}
            </span>
            <h2 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
              {isFa ? (
                <>
                  ابزارهایی برای
                  <br />
                  <em className="not-italic text-[var(--accent)]">سریع‌تر ساختن.</em>
                </>
              ) : (
                <>
                  Tools built to help you
                  <br />
                  <em className="not-italic text-[var(--accent)]">ship faster.</em>
                </>
              )}
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {isFa
                ? "محصولاتی که از دل تجربه واقعی پروژه‌ها بیرون آمده‌اند؛ آماده استفاده، قابل توسعه و همراه با پشتیبانی."
                : "Resources shaped by real-world production projects—ready to use, extensible, and backed by support."}
            </p>
            <Link
              href={`/${lang}/shop`}
              className="inline-flex items-center gap-2 border-b-2 border-[var(--accent)] pb-1 text-sm font-extrabold"
            >
              <span>{isFa ? "همه محصولات" : "All Products"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localizedProducts.map((product) => (
            <article
              key={product.slug}
              className="sig-card group flex flex-col overflow-hidden"
            >
              <Link href={`/${lang}/shop/${product.slug}`} className="block">
                <ProductVisual product={product} compact />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <span className="w-fit rounded-full border border-[var(--accent)]/20 bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-bold text-[var(--accent)]">
                  {product.tag}
                </span>
                <strong className="mt-3 text-lg font-extrabold">
                  {product.title}
                </strong>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                  <b className="text-sm font-extrabold tabular-nums">
                    {product.price}
                  </b>
                  <Link
                    href={`/${lang}/shop/${product.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-bold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white"
                  >
                    <span>{isFa ? "جزئیات" : "Details"}</span>
                    <ArrowIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Section 02: Capabilities (Navy Block) */}
      <section className="fa-navy-block relative py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-6 end-8 select-none text-[9rem] font-black leading-none text-white/[0.04]"
        >
          {isFa ? "۰۲" : "02"}
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-extrabold text-[#ff8a6d]">
              {isFa ? "توانمندی‌ها" : "CAPABILITIES"}
            </span>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              {isFa ? (
                <>
                  از فکر اولیه
                  <br />
                  تا محصول نهایی.
                </>
              ) : (
                <>
                  From initial idea
                  <br />
                  to final product.
                </>
              )}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              {isFa
                ? "با ترکیب نگاه مهندسی و درک محصول، راهکاری می‌سازم که هم برای کاربر جذاب باشد و هم از نظر فنی قابل اتکا."
                : "Combining engineering rigor with product thinking to build solutions that users love and teams can maintain."}
            </p>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 border-b-2 border-[var(--accent)] pb-1 text-sm font-extrabold text-white"
            >
              <span>{isFa ? "مسیر حرفه‌ای من" : "My Experience"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="divide-y divide-white/15 border-t border-white/15">
            {capabilities.map(({ Icon, title, text }, index) => (
              <article
                key={title}
                className="grid grid-cols-[2.75rem_1fr] items-start gap-4 py-7 sm:grid-cols-[2.5rem_3.25rem_1fr]"
              >
                <b className="hidden pt-1 font-mono text-xs text-slate-400 sm:block">
                  0{index + 1}
                </b>
                <span className="grid h-12 w-12 place-items-center rounded-[16px_8px] bg-[#ff5c35]/15 text-[#ff9b83]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Signals */}
      <section className="mx-auto max-w-6xl px-6 py-24" aria-labelledby="trust-title">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-xs font-extrabold text-[var(--accent)]">
              {isFa ? "اعتماد در عمل" : "VERIFIABLE PROOF"}
            </span>
            <h2
              id="trust-title"
              className="mt-2 text-3xl font-black leading-tight sm:text-5xl"
            >
              {isFa ? (
                <>
                  قبل از همکاری،
                  <br />
                  <em className="not-italic text-[var(--accent)]">خودت بررسی کن.</em>
                </>
              ) : (
                <>
                  Verify the work
                  <br />
                  <em className="not-italic text-[var(--accent)]">before we collaborate.</em>
                </>
              )}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {isFa
              ? "اعتماد با چند جمله تبلیغاتی ساخته نمی‌شود. اینجا مسیرهایی را می‌بینی که تجربه فنی، خروجی‌ها و فعالیت حرفه‌ای من را قابل بررسی می‌کنند."
              : "Trust isn't built with slogans. Explore real case studies, peer-reviewed papers, open-source code, and public career records."}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map(
            ({ Icon, label, title, text, href, external, action }, index) => {
              const cardContent = (
                <>
                  <div className="mb-8 grid h-12 w-12 place-items-center rounded-[16px_8px] bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-[var(--text-muted)]">
                    0{index + 1} / {label}
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    {text}
                  </p>
                  <b className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-extrabold text-[var(--accent)]">
                    <span>{action}</span>
                    <ArrowIcon className="h-3 w-3 transition-transform group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
                  </b>
                </>
              );

              return external ? (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sig-card group flex min-h-80 flex-col p-6"
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={title}
                  href={href}
                  className="sig-card group flex min-h-80 flex-col p-6"
                >
                  {cardContent}
                </Link>
              );
            }
          )}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-600/20 bg-emerald-500/5 p-4 text-xs leading-relaxed text-[var(--text-muted)]">
          <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p>
            <strong className="text-[var(--text)]">
              {isFa ? "شفافیت مهم‌تر از نمایش است. " : "Transparency over hype. "}
            </strong>
            {isFa
              ? "نظر مشتری تنها با متن واقعی و اجازه انتشار نام یا شرکت در سایت قرار می‌گیرد."
              : "Client testimonials are only published with real quotes and explicit permission."}
          </p>
        </div>
      </section>

      {/* 5. Experience, Skills, TechStack, Education & Publications */}
      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-24">
        <ExperienceSection locale={lang} />
        <SkillsSection locale={lang} />
        <TechStackSection locale={lang} />
        <EducationSection locale={lang} />
        <PublicationsSection locale={lang} />
        <AboutSection locale={lang} />
      </div>

      {/* 6. Proof & Final CTA */}
      <section id="contact" className="scroll-mt-24 bg-[var(--surface-muted)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 divide-y divide-[var(--border)] border-y border-[var(--border)] md:grid-cols-4 md:divide-x md:divide-y-0 rtl:md:divide-x-reverse">
            {stats.map(([num, label]) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center px-4 py-8 text-center"
              >
                <strong className="text-4xl font-black tabular-nums sm:text-5xl">
                  {num}
                </strong>
                <span className="mt-2 text-xs font-medium text-[var(--text-muted)]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="text-xs font-extrabold text-[var(--accent)]">
                {isFa ? "یک ایده خوب داری؟" : "HAVE A GREAT IDEA?"}
              </span>
              <h2 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
                {isFa ? (
                  <>
                    بیایید تبدیلش کنیم
                    <br />
                    به چیزی که دیده شود.
                  </>
                ) : (
                  <>
                    Let&apos;s turn it into
                    <br />
                    something remarkable.
                  </>
                )}
              </h2>
            </div>

            <div>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {isFa
                  ? "برای توسعه محصول، مشاوره فنی یا یک همکاری جدی آماده‌ام."
                  : "Available for product development, technical consulting, and full-stack roles."}
              </p>
              <a
                href="mailto:mohammadaminmollakazemiha@gmail.com"
                className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-[var(--accent)] px-6 py-4 text-sm font-extrabold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
              >
                <span>{isFa ? "شروع یک گفتگو" : "Start a Conversation"}</span>
                <ArrowIcon className="h-4 w-4" />
              </a>
              <small className="mt-3 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <FaCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>
                  {isFa
                    ? "معمولاً کمتر از ۲۴ ساعت پاسخ می‌دهم"
                    : "Usually replies within 24 hours"}
                </span>
              </small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}