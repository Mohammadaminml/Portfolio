"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Dictionary, Locale } from "@/types/site";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export function Navbar({ locale, dict }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nextLocale: Locale = locale === "fa" ? "en" : "fa";
  const switchedPath = pathname.replace(`/${locale}`, `/${nextLocale}`) || `/${nextLocale}`;

  const links = [
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}#experience`, label: dict.nav.experience },
    { href: `/${locale}#skills`, label: locale === "fa" ? "مهارت‌ها" : "Skills" },
    { href: `/${locale}#articles`, label: dict.nav.blog },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <Link
          href={`/${locale}`}
          className="text-base font-bold tracking-tight text-[var(--text)]"
        >
          {dict.meta.siteName}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={switchedPath}
            aria-label={dict.accessibility.switchLanguage}
            className="grid h-9 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-xs font-semibold text-[var(--text)] transition-colors hover:bg-[var(--surface-muted)]"
          >
            {nextLocale.toUpperCase()}
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] md:hidden"
          >
            {open ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm font-medium text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}