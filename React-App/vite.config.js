import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/songlab/", // or "/songlab/app/" if you chose that
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
