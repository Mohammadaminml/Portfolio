"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Locale } from "@/types/site";

export function ScrollTop({ locale }: { locale: Locale }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={locale === "fa" ? "بازگشت به بالا" : "Back to top"}
      className="fixed bottom-24 end-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
    >
      <FaArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}