import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["./src/client.tsx"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
        emptyOutDir: false,
        copyPublicDir: false,
      },
    };
  } else {
    return {
      build: {
        minify: true,
        rollupOptions: {
          output: {
            entryFileNames: "_worker.js",
          },
        },
      },
      plugins: [
        devServer({
          entry: "./src/server.tsx",
        }),
      ],
    };
  }
});
