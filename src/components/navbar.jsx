import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white text-xl font-bold">
          Portfolio
        </h1>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex gap-4 text-white text-xl">
          <a href="https://github.com/Mohammadaminml" target="_blank">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/mohammadamin_tech"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a
            href="https://t.me/MohammadAminTech"
            target="_blank"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </nav>
  );
}