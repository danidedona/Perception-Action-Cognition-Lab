import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isPages = process.env.DEPLOY_TARGET === "pages";

export default defineConfig({
  plugins: [react()],
  base: isPages ? "/Perception-Action-Cognition-Lab/" : "/songlab/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/app.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/app.css";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
  server: {
    proxy: {
      "/songlab/wp-json": {
        target: "https://sites.brown.edu",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
