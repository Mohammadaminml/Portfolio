import { useState } from "react";
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
  { to: "/about", labelKey: "about" },
  { to: "/skills", labelKey: "skills" },
  { to: "/experience", labelKey: "experience" },
  { to: "/projects", labelKey: "projects" },
  { to: "/statistics", labelKey: "statistics" },
  { to: "/education", labelKey: "education" },
  { to: "/publications", labelKey: "publications" },
  { to: "/tech-stack", labelKey: "techStack" },
  { to: "/github", labelKey: "github" },
  { to: "/contact", labelKey: "contact" },
];

const primaryNavigation = navigation.slice(0, 5);
const moreNavigation = navigation.slice(5);

const linkClass = ({ isActive }) =>
  `nav-link ${isActive ? "nav-link-active" : ""}`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { content, language, toggleLanguage } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-18 flex justify-between items-center">
        <NavLink to="/" className="text-white text-xl font-bold" onClick={closeMenu}>
          {content.nav.portfolio}
        </NavLink>

        <div className="hidden lg:flex items-center gap-6 text-sm text-gray-300">
          {primaryNavigation.map((item) => (
            <NavLink key={item.to} {...item} className={linkClass}>
              {content.nav[item.labelKey]}
            </NavLink>
          ))}

          <div className="nav-more relative">
            <button className="nav-link flex items-center gap-1 py-6" type="button">
              {content.nav.more} <span aria-hidden="true">⌄</span>
            </button>
            <div className="nav-dropdown absolute right-0 top-[64px] w-56 p-2 rounded-2xl glass">
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

        <div className="hidden sm:flex gap-4 text-white text-xl">
          <a href="https://github.com/Mohammadaminml" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/mohammadamin_tech" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://t.me/MohammadAminTech" target="_blank" rel="noreferrer" aria-label="Telegram">
            <FaTelegram />
          </a>
        </div>

        <button
          type="button"
          className="language-switch rounded-full border border-white/20 px-3 py-1.5 text-sm font-bold text-white hover:border-blue-400"
          onClick={toggleLanguage}
          aria-label={language === "en" ? "تغییر زبان به فارسی" : "Switch language to English"}
        >
          {language === "en" ? "FA" : "EN"}
        </button>

        <button
          className="lg:hidden text-white text-2xl"
          type="button"
          aria-label={isOpen ? content.nav.closeMenu : content.nav.openMenu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-black/95 px-6 py-4">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                {...item}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl ${
                    isActive ? "bg-blue-500/20 text-blue-300" : "text-gray-300"
                  }`
                }
                onClick={closeMenu}
              >
                {content.nav[item.labelKey]}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
