import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <motion.div
        className="ambient-orb ambient-orb-one"
        animate={{ x: [0, 70, 0], y: [0, 45, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb ambient-orb-two"
        animate={{ x: [0, -55, 0], y: [0, -70, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="background-grid" />
    </div>
  );
}
