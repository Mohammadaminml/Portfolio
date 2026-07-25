import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

const contactLinks = [
  ["email", "mailto:mohammadaminmollakazemiha@gmail.com", MdEmail],
  ["GitHub", "https://github.com/Mohammadaminml", FaGithub],
  ["LinkedIn", "https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201", FaLinkedin],
  ["Instagram", "https://www.instagram.com/mohammadamin_tech", FaInstagram],
  ["Telegram", "https://t.me/MohammadAminTech", FaTelegram],
  ["X (Twitter)", "https://x.com/mamiopv", FaXTwitter],
];

export default function Contact() {
  const { content } = useLanguage();
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold mb-16">
          {content.contact.title}
        </motion.h2>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="glass contact-panel rounded-[40px] p-8 md:p-12">

          <h3 className="text-3xl font-bold">
            {content.contact.heading}
          </h3>

          <p className="text-gray-400 mt-4">
            {content.contact.description}
          </p>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid md:grid-cols-2 gap-4 mt-10">
            {contactLinks.map(([label, href, Icon]) => (
              <motion.a
                key={label}
                href={href}
                target={label === "email" ? undefined : "_blank"}
                rel={label === "email" ? undefined : "noreferrer"}
                variants={cardReveal}
                whileHover={{ x: 5 }}
                className="contact-link glass p-5 rounded-2xl flex items-center gap-4"
              >
                <span className="contact-icon"><Icon /></span>
                {label === "email" ? content.contact.email : label}
                <span className="ms-auto text-gray-600" aria-hidden="true">↗</span>
              </motion.a>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
