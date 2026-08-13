import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  const { content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label={content.accessibility.scrollTop}
      className="
        fixed
        bottom-24
        z-[9999]
        w-14
        h-14
        rounded-full
        bg-blue-500
        text-white
        shadow-2xl
        shadow-blue-500/40
        flex
        items-center
        justify-center
        hover:bg-blue-600
        hover:scale-110
        transition-all
        duration-300
      "
      style={{ insetInlineEnd: "2rem" }}
    >
      <FaArrowUp />
    </button>
  );
}
