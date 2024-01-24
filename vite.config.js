import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "infobip-sender",
      fileName: "infobip-sender",
    },
  },
  plugins: [dts(), nodePolyfills()],
  rollupOptions: { external: ["axios"] },
});
