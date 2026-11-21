import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { Locale } from "@/types/site";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-[var(--text-muted)]">
          © {year}{" "}
          {locale === "fa"
            ? "محمدامین ملاکاظمی‌ها — ساخته شده با Next.js و TypeScript"
            : "Mohammadamin Mollakazemiha — Built with Next.js & TypeScript"}
        </p>
        <div className="flex items-center gap-4 text-[var(--text-muted)]">
          <a
            href="https://github.com/Mohammadaminml"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[var(--text)]"
          >
            <FiGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[var(--text)]"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/MohammadAminTech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="transition-colors hover:text-[var(--text)]"
          >
            <FiSend className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}