import { reactRenderer } from "@hono/react-renderer";
import { Hono } from "hono";

const app = new Hono();

app.get(
  "*",
  reactRenderer(({ children }) => {
    return (
      <html>
        <body>
          <h1>React + Hono</h1>
          <div>{children}</div>
        </body>
      </html>
    );
  })
);

app.get("/", (c) => {
  return c.render(<h1>Hello!</h1>);
});

export default app;
