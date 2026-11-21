import { Locale } from "@/types/site";

interface AboutContent {
  kicker: string;
  title: string;
  paragraphs: string[];
}

const ABOUT_CONTENT: Record<Locale, AboutContent> = {
  fa: {
    kicker: "درباره من",
    title: "کمی بیشتر درباره مسیر من",
    paragraphs: [
      "من محمدامین ملاکاظمی‌ها هستم؛ مهندس نرم‌افزار و توسعه‌دهنده فول‌استک با تمرکز بر ساخت محصولات دیجیتال سریع، مقیاس‌پذیر و کاربرمحور.",
      "در کنار طراحی و پیاده‌سازی سامانه‌های وب با React، Next.js، TypeScript و Django، در حوزه‌ی هوش مصنوعی کاربردی و معماری نرم‌افزار نیز پژوهش و تجربه عملی دارم.",
      "هدفم در هر پروژه فقط نوشتن کد نیست؛ بلکه درک دقیق مسئله و تحویل راهکاری قابل نگهداری است که همراه کسب‌وکار رشد کند.",
    ],
  },
  en: {
    kicker: "ABOUT ME",
    title: "A little more about my journey",
    paragraphs: [
      "I'm Mohammadamin Mollakazemiha, a full-stack software engineer focused on building fast, scalable, and user-centered digital products.",
      "Alongside developing web platforms with React, Next.js, TypeScript, and Django, I work on applied AI and software architecture.",
      "My goal in every project goes beyond writing code—it's about understanding the core problem and delivering maintainable software that grows with the business.",
    ],
  },
};

export function AboutSection({ locale }: { locale: Locale }) {
  const content = ABOUT_CONTENT[locale];

  return (
    <section id="about" className="scroll-mt-24 space-y-8">
      <div className="space-y-1.5">
        <span className="text-xs font-extrabold text-(--accent)">
          {content.kicker}
        </span>
        <h2 className="text-3xl font-black">{content.title}</h2>
      </div>

      <div className="sig-card space-y-5 p-7 sm:p-10">
        {content.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={
              index === 0
                ? "text-base font-medium leading-relaxed text-(--text) sm:text-lg"
                : "text-sm leading-loose text-(--text-muted) sm:text-base"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}