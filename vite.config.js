import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/TruVerifyAI/",   // repo name
  build: {
    outDir: "docs",        // output folder GitHub Pages uses
  },
});
