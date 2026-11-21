"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { getTranslations } from "@/data/translations";
import { Locale } from "@/types/site";

type NavKey =
  | "home"
  | "skills"
  | "projects"
  | "education"
  | "experience"
  | "publications"
  | "techStack"
  | "shop"
  | "blog"
  | "contact";

interface NavItem {
  href: string;
  labelKey: NavKey;
  exact?: boolean;
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
    // منوی اصلی (۵ مورد اول)
    { href: `/${locale}`, labelKey: "home", exact: true },
    { href: `/${locale}#skills`, labelKey: "skills" },
    { href: `/${locale}/projects`, labelKey: "projects" },
    { href: `/${locale}#education`, labelKey: "education" },
    { href: `/${locale}#experience`, labelKey: "experience" },
    // منوی بیشتر (۵ مورد بعدی)
    { href: `/${locale}#publications`, labelKey: "publications" },
    { href: `/${locale}#tech`, labelKey: "techStack" },
    { href: `/${locale}/shop`, labelKey: "shop" },
    { href: `/${locale}/blog`, labelKey: "blog" },
    { href: `/${locale}/contact`, labelKey: "contact" },
  ];

  const primaryNavigation = navigation.slice(0, 5);
  const moreNavigation = navigation.slice(5);

  const isActive = (item: NavItem) => {
    if (item.href.includes("#")) return false;
    if (item.exact) return pathname === item.href;
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
        {/* Brand */}
        <Link
          href={`/${locale}`}
          onClick={closeMenu}
          className="text-base font-black tracking-tight text-(--text) transition-colors hover:text-(--accent) sm:text-lg"
        >
          {t.nav.portfolio}
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 text-sm font-semibold lg:flex">
          {primaryNavigation.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active
                    ? "text-(--accent)"
                    : "text-(--text-muted) hover:text-(--text)"
                }`}
              >
                {t.nav[item.labelKey]}
              </Link>
            );
          })}

          {/* More Dropdown */}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1 py-4 text-(--text-muted) transition-colors hover:text-(--text)"
            >
              <span>{t.nav.more}</span>
              <span aria-hidden="true" className="text-xs">
                ⌄
              </span>
            </button>

            <div className="invisible absolute top-full end-0 w-52 translate-y-1 rounded-2xl border border-(--border) bg-(--surface) p-2 opacity-0 shadow-xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {moreNavigation.map((item) => {
                const active = isActive(item);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-(--accent-soft) text-(--accent)"
                        : "text-(--text-muted) hover:bg-(--surface-muted) hover:text-(--text)"
                    }`}
                  >
                    {t.nav[item.labelKey]}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* End Actions: Language Switcher + Theme Toggle + Mobile Menu */}
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
          <div className="mx-auto grid max-w-6xl gap-1 sm:grid-cols-2">
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
          </div>
        </div>
      )}
    </nav>
  );
}