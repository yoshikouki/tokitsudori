import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./dist/static" }));

app.get("/", (c) => {
  // return c.text("Hello, World!");
  return c.html(
    <html>
      <head>
        {import.meta.env.PROD ? (
          <>
            <script type="module" src="/static/client.js"></script>
          </>
        ) : (
          <>
            <script type="module" src="/src/client.tsx"></script>
          </>
        )}
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  );
});

const port = parseInt(process.env.PORT!) || 5173;
console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
