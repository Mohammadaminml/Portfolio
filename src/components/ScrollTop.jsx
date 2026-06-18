import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

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
      className="
        fixed
        bottom-24
        right-8
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
    >
      <FaArrowUp />
    </button>
  );
}