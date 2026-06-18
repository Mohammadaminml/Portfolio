import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Contact Me
        </h2>

        <div className="glass rounded-[40px] p-10">

          <h3 className="text-3xl font-bold">
            Let's Build Something Great
          </h3>

          <p className="text-gray-400 mt-4">
            You can contact me through social media for collaborations, projects, or consulting opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <a
              href="mailto:mohammadaminmollakazemiha@gmail.com"
              className="glass p-6 rounded-3xl"
            >
              📧   Email
            </a>

            <a
              href="https://github.com/Mohammadaminml"
              target="_blank"
              className="glass p-6 rounded-3xl flex items-center gap-3"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201"
              target="_blank"
              className="glass p-6 rounded-3xl flex items-center gap-3"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/mohammadamin_tech"
              target="_blank"
              className="glass p-6 rounded-3xl flex items-center gap-3"
            >
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://t.me/MohammadAminTech"
              target="_blank"
              className="glass p-6 rounded-3xl flex items-center gap-3"
            >
              <FaTelegram />
              Telegram
            </a>

            <a
              href="https://x.com/mamiopv"
              target="_blank"
              className="glass p-6 rounded-3xl flex items-center gap-3"
            >
              <FaXTwitter />
              X (Twitter)
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}