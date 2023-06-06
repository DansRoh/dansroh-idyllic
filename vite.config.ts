import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteMockServe({ mockPath: "/src/mock" })],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "user/": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true, // 开启跨域
      },
    },
  },
});
