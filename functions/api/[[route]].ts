import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";

import { dateTimeFormatter } from "../../src/lib/formatter";

const app = new Hono().basePath("/api");

const route = app.get("/ping", (c) => {
  return c.json({
    message: `pong at ${dateTimeFormatter.format(new Date())}!`,
  });
});

export type AppType = typeof route;

export const onRequest = handle(app);
