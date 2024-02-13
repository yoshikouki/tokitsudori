import { reactRenderer } from "@hono/react-renderer";

export const renderer = reactRenderer(
  ({ children, title }) => {
    return (
      <html>
        <head>
          <link href="/static/style.css" rel="stylesheet" />
          <title>{title}</title>
        </head>
        <body>{children}</body>
      </html>
    );
  },
  {
    docType: true,
  }
);
