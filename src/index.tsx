import { Hono } from "hono";

const app = new Hono();

const port = parseInt(process.env.PORT!) || 5173;
console.log(`Running at http://localhost:${port}`);

app.get("/", (c) => {
  return c.html(
    <html>
      <head>
        {import.meta.env.PROD ? (
          <>
            <script type="module" src="/static/client.js"></script>
          </>
        ) : (
          <>
            <script type="module" src="/src/client.ts"></script>
          </>
        )}
      </head>
      <body>
        <h1>Hello</h1>
      </body>
    </html>
  );
});

export default {
  port,
  fetch: app.fetch,
};
