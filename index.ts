const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("homepage");
    if (url.pathname === "/blog") return new Response("blog");
    return new Response("404");
  },
});

console.log(`Listening on port ${server.port}`);
