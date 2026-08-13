import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/motion-dom") || id.includes("node_modules/motion-utils")) return "motion";
          if (id.includes("node_modules/react-icons")) return "icons";
          if (id.includes("node_modules/react") || id.includes("node_modules/scheduler")) return "react-vendor";
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
});
