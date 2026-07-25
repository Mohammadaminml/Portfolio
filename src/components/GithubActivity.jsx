import { GitHubCalendar } from "react-github-calendar";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { fadeUp, viewport } from "../animations/motion";

export default function GithubActivity() {
  const { content } = useLanguage();
  return (
    <section className="py-32" id="github">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold mb-16">
          {content.github.title}
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          whileHover={{ y: -4 }}
          className="glass github-card p-8 rounded-[40px] overflow-auto"
        >
          <GitHubCalendar username="Mohammadaminml" />
        </motion.div>
      </div>
    </section>
  );
}
