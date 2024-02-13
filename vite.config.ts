import build from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    build(),
    devServer({
      entry: "src/index.tsx",
    }),
    tsconfigPaths(),
  ],
});
