import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      experimentalCodeSplitting: true,
      minify: "terser",
      terserOptions: {
        compress: {
          passes: 2,
        },
      },
    },
    plugins: [react(), sassDts(), visualizer({ gzipSize: true, open: true })],
  };
});
