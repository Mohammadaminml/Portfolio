import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { getTranslations } from "@/data/translations";
import { Locale } from "@/types/site";

const SOCIALS = [
  { href: "https://t.me/MohammadAminTech", label: "Telegram", Icon: FaTelegram },
  {
    href: "https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  { href: "https://github.com/Mohammadaminml", label: "GitHub", Icon: FaGithub },
];

export function Footer({ locale }: { locale: Locale }) {
  const { footer, nav } = getTranslations(locale);
  const isFa = locale === "fa";

  const mainLinks = [
    { href: `/${locale}/projects`, label: nav.projects },
    { href: `/${locale}/shop`, label: nav.shop },
    { href: `/${locale}/blog`, label: nav.blog },
    { href: `/${locale}/contact`, label: nav.contact },
  ];

  const secondaryLinks = [
    { href: `/${locale}#skills`, label: nav.skills },
    { href: `/${locale}#experience`, label: nav.experience },
    { href: `/${locale}#education`, label: nav.education },
    { href: `/${locale}#publications`, label: nav.publications },
    { href: `/${locale}#tech`, label: nav.techStack },
  ];

  return (
    <footer className="mt-20 border-t border-(--border) bg-(--surface)/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Column 1: Brand, Role & Socials */}
          <div className="space-y-4 md:col-span-5">
            <Link
              href={`/${locale}`}
              className="inline-block text-xl font-black tracking-tight text-(--text) transition-colors hover:text-(--accent) sm:text-2xl"
            >
              {footer.name}
            </Link>

            <p className="max-w-sm text-sm leading-7 font-medium text-(--text-muted)">
              {footer.role}
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--bg) px-3 py-1.5 text-xs font-medium text-(--text-muted)">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>
                {isFa
                  ? "ظرفیت محدود برای همکاری جدید"
                  : "Available for select projects"}
              </span>
            </div>

            <div
              className="flex items-center gap-2.5 pt-2"
              aria-label={isFa ? "شبکه‌های اجتماعی" : "Social links"}
            >
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-(--border) bg-(--bg) text-(--text-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}

              <Link
                href={`/${locale}/contact`}
                aria-label={nav.contact}
                className="grid h-10 w-10 place-items-center rounded-full border border-(--border) bg-(--bg) text-(--text-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
              >
                <FaEnvelope className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Main Pages */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="mb-4 text-sm font-bold text-(--text)">
              {isFa ? "دسترسی سریع" : "Quick Links"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {mainLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-(--text-muted) transition-colors hover:text-(--accent)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Secondary / Resume Links */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-sm font-bold text-(--text)">
              {isFa ? "رزومه و تخصص" : "Resume & Info"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {secondaryLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-(--text-muted) transition-colors hover:text-(--accent)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 border-t border-(--border) pt-6 text-center text-xs text-(--text-muted)/80">
          <p>{footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}