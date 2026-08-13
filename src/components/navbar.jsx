import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaXmark,
} from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext";

const navigation = [
  { to: "/", labelKey: "home", end: true },
  { to: "/projects", labelKey: "projects" },
  { to: "/shop", labelKey: "shop" },
  { to: "/experience", labelKey: "experience" },
  { to: "/about", labelKey: "about" },
  { to: "/contact", labelKey: "contact" },
  { to: "/blog", labelKey: "blog" },
  { to: "/skills", labelKey: "skills" },
  { to: "/statistics", labelKey: "statistics" },
  { to: "/education", labelKey: "education" },
  { to: "/publications", labelKey: "publications" },
  { to: "/tech-stack", labelKey: "techStack" },
];

const linkClass = ({ isActive }) =>
  `nav-link ${isActive ? "nav-link-active" : ""}`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const { content } = useLanguage();
  const isPersian = true;
  const primaryCount = 5;
  const primaryNavigation = navigation.slice(0, primaryCount);
  const moreNavigation = navigation.slice(primaryCount);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    const handleResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const menu = menuRef.current;
    const previousOverflow = document.body.style.overflow;
    const focusable = menu?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => focusable?.[0]?.focus());

    const handleKeyDown = (event) => {
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
    <nav aria-label="ناوبری اصلی" className={`site-nav fixed top-0 left-0 w-full z-50 ${isPersian ? "site-nav-fa" : ""} ${isScrolled ? "site-nav-scrolled" : ""}`}>
      <div className={`nav-inner max-w-7xl mx-auto px-6 flex items-center transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
        <NavLink to="/" className="brand-mark text-xl font-bold" onClick={closeMenu}>
          {content.nav.portfolio}
        </NavLink>

        <div className="nav-desktop hidden lg:flex items-center gap-6 text-sm text-gray-300">
          {primaryNavigation.map((item) => (
            <NavLink key={item.to} {...item} className={linkClass}>
              {content.nav[item.labelKey]}
            </NavLink>
          ))}

          <div className="nav-more relative">
            <button className="nav-link flex items-center gap-1 py-6" type="button" aria-haspopup="true">
              {content.nav.more} <span aria-hidden="true">⌄</span>
            </button>
            <div className="nav-dropdown absolute top-[64px] w-56 p-2 rounded-2xl glass">
              {moreNavigation.map((item) => (
                <NavLink
                  key={item.to}
                  {...item}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl transition ${
                      isActive ? "bg-blue-500/20 text-blue-300" : "hover:bg-white/5"
                    }`
                  }
                >
                  {content.nav[item.labelKey]}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-socials hidden xl:flex items-center gap-2">
          <a href="https://t.me/MohammadAminTech" target="_blank" rel="noreferrer" aria-label="Telegram">
            <FaTelegram />
          </a>
          <a href="https://www.instagram.com/mohammadamin_tech" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Mohammadaminml" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        <button
          ref={toggleRef}
          className="nav-toggle lg:hidden text-2xl"
          type="button"
          aria-label={isOpen ? content.nav.closeMenu : content.nav.openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="mobile-navigation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mobile-nav lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto px-6 py-4"
          aria-label="منوی موبایل"
        >
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                {...item}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl ${
                    isActive ? "mobile-nav-active" : ""
                  }`
                }
                onClick={closeMenu}
              >
                {content.nav[item.labelKey]}
              </NavLink>
            ))}
          </div>
          <div className="mobile-nav-socials max-w-7xl mx-auto" aria-label="شبکه‌های اجتماعی">
            <a href="https://t.me/MohammadAminTech" target="_blank" rel="noreferrer" aria-label="Telegram">
              <FaTelegram />
            </a>
            <a href="https://www.instagram.com/mohammadamin_tech" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Mohammadaminml" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
