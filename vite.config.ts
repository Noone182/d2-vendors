import { fileURLToPath, URL } from "url";
import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from "vite";
import mkcert from 'vite-plugin-mkcert'
import vue from "@vitejs/plugin-vue";
import svgLoader from 'vite-svg-loader'
export default defineConfig({
  plugins: [
    vue(),
    EnvironmentPlugin(['API_KEY', 'BASE_URL']),
    mkcert(),
    svgLoader()],
  server: { https: true },
  base: '/',
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/global.scss";`,
      },
    },
  },
});