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
  // server: {
  //   proxy: {
  //     "/": {
  //       target: "http://104.168.134.201:8080",
  //       changeOrigin: true, // 开启跨域
  //     },
  //   },
  // },
});
