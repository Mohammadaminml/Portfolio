import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import BackgroundEffects from "./BackgroundEffects";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
import { useLanguage } from "../i18n/LanguageContext";
import RouteSeo from "./RouteSeo";

export default function Layout() {
  const { pathname } = useLocation();
  const { isRtl } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className={`min-h-screen apple-gradient ${isRtl ? "persian-edition" : ""}`}>
      <RouteSeo />
      <a className="skip-link" href="#main-content">رفتن مستقیم به محتوای اصلی</a>
      <div className="site-noise" aria-hidden="true" />
      <BackgroundEffects />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          tabIndex="-1"
          key={pathname}
          className="relative z-10"
          initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollTop />
    </div>
  );
}
