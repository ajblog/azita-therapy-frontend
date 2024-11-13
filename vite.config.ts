import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["swiper"], // Ensure swiper is included in optimized dependencies
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
});
