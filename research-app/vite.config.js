import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("recharts") || id.includes("d3-")) return "vendor-recharts";
            if (id.includes("lucide-react")) return "vendor-icons";
            return "vendor-react"; // react, react-dom, scheduler e afins juntos evita chunk circular
          }
        },
      },
    },
  },
});
