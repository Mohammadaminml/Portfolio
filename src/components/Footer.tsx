import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
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
  const { footer } = getTranslations(locale);
  const isFa = locale === "fa";

  return (
    <footer className="border-t border-(--border) bg-(--surface)/70 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="text-xl font-black text-(--text) sm:text-2xl">
          {footer.name}
        </h3>

        <p className="mt-2.5 text-sm font-medium text-(--text-muted)">
          {footer.role}
        </p>

        <div
          className="mt-6 flex items-center justify-center gap-3"
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
        </div>

        <p className="mt-6 text-xs text-(--text-muted)/80">
          {footer.rights}
        </p>
      </div>
    </footer>
  );
}