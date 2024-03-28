import { resolve } from "path";
import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      formats: ["es"],
      fileName: "index",
    },
  },
  plugins: [dts({ exclude: "src/example/" })],
  test: {
    globals: true,
    setupFiles: ["./setup.ts"],
  },
});
