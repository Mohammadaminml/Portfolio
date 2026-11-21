import { getTranslations } from "@/data/translations";
import { Locale } from "@/types/site";

export function Footer({ locale }: { locale: Locale }) {
  const { footer } = getTranslations(locale);

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/70 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="text-xl font-black text-[var(--text)] sm:text-2xl">
          {footer.name}
        </h3>

        <p className="mt-2.5 text-sm font-medium text-[var(--text-muted)]">
          {footer.role}
        </p>

        <p className="mt-6 text-xs text-[var(--text-muted)]/80">
          {footer.rights}
        </p>
      </div>
    </footer>
  );
}