import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              if (id.includes("prettier")) {
                return "prettier";
              }
            }
          },
        },
      },
      experimentalCodeSplitting: true,
      minify: "terser",
    },
    plugins: [
      react(),
      sassDts(),
      mode === "analyze" && visualizer({ gzipSize: true, open: true }),
    ],
  };
});
