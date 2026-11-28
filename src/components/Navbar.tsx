"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { getTranslations } from "@/data/translations";
import { Locale } from "@/types/site";

type NavKey = "projects" | "shop" | "blog" | "experience";

interface NavItem {
  href: string;
  labelKey: NavKey;
}

export function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const t = getTranslations(locale);
  const isFa = locale === "fa";
  const otherLocale: Locale = isFa ? "en" : "fa";
  const switchedPath = pathname
    ? pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${otherLocale}`)
    : `/${otherLocale}`;

  const navigation: NavItem[] = [
    { href: `/${locale}/projects`, labelKey: "projects" },
    { href: `/${locale}/shop`, labelKey: "shop" },
    { href: `/${locale}/blog`, labelKey: "blog" },
    { href: `/${locale}#experience`, labelKey: "experience" },
  ];

  const contactHref = `/${locale}/contact`;
  const isContactActive = pathname?.startsWith(contactHref) ?? false;

  const isActive = (item: NavItem) => {
    if (item.href.includes("#")) return false;
    return pathname?.startsWith(item.href) ?? false;
  };

  const closeMenu = () => setIsOpen(false);

  // همگام‌سازی تم با localStorage و تگ html
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial: "light" | "dark" =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next: "light" | "dark" = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.dataset.theme = next;
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const menu = menuRef.current;
    const previousOverflow = document.body.style.overflow;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => focusable?.[0]?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav
      aria-label={isFa ? "ناوبری اصلی" : "Main navigation"}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-(--border) bg-(--surface)/85 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-(--bg)/75 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Brand (Home Link) */}
        <Link
          href={`/${locale}`}
          onClick={closeMenu}
          className="text-base font-black tracking-tight text-(--text) transition-colors hover:text-(--accent) sm:text-lg"
        >
          {t.nav.portfolio}
        </Link>

        {/* Desktop Links (4 Core Items) */}
        <div className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {navigation.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  active
                    ? "text-(--accent)"
                    : "text-(--text-muted) hover:text-(--text)"
                }`}
              >
                {t.nav[item.labelKey]}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-(--accent)" />
                )}
              </Link>
            );
          })}
        </div>

        {/* End Actions: Language + Theme + Contact CTA + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <Link
            href={switchedPath}
            aria-label={isFa ? "Switch to English" : "تغییر به فارسی"}
            className="rounded-full border border-(--border) bg-(--surface) px-3 py-1.5 text-xs font-extrabold text-(--text) transition-colors hover:border-(--accent) hover:text-(--accent)"
          >
            {isFa ? "EN" : "فا"}
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? isFa
                  ? "تغییر به حالت روشن"
                  : "Switch to light mode"
                : isFa
                  ? "تغییر به حالت تیره"
                  : "Switch to dark mode"
            }
            className="grid h-9 w-9 place-items-center rounded-full border border-(--border) bg-(--surface) text-(--text-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
          >
            {theme === "dark" ? (
              <FaSun className="h-4 w-4" />
            ) : (
              <FaMoon className="h-4 w-4" />
            )}
          </button>

          {/* Desktop CTA Button */}
          <Link
            href={contactHref}
            className={`hidden rounded-full px-4 py-2 text-xs font-bold transition-all lg:inline-flex ${
              isContactActive
                ? "bg-(--accent) text-white ring-2 ring-(--accent)/30"
                : "bg-(--text) text-(--bg) hover:bg-(--accent) hover:text-white"
            }`}
          >
            {t.nav.contact}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="grid h-10 w-10 place-items-center rounded-xl border border-(--border) text-xl text-(--text) lg:hidden"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          aria-label={isFa ? "منوی موبایل" : "Mobile menu"}
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-(--border) bg-(--surface) px-6 py-4 shadow-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1.5">
            {navigation.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-(--accent-soft) text-(--accent)"
                      : "text-(--text-muted) hover:bg-(--surface-muted) hover:text-(--text)"
                  }`}
                >
                  {t.nav[item.labelKey]}
                </Link>
              );
            })}

            <Link
              href={contactHref}
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-(--accent) px-4 py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}