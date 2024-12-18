import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["swiper"], // Ensure swiper is included in optimized dependencies
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Resolves @ to the src directory
    },
  },

});
