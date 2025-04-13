import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const _API_URL = `${env.VITE_WEB_SERVICE ?? ""}`;
  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      proxy: {
        "/api": {
          target: _API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
