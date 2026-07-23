import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="min-h-screen apple-gradient">
      <div className="site-noise" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
