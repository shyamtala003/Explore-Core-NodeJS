const http = require("node:http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET") {
    const userMatch = url.pathname.match(/^\/users\/([^/]+)$/);

    if (userMatch) {
      const userId = userMatch[1];

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          route: "/users/:id",
          params: { id: userId },
        }),
      );
      return;
    }
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Try: /users/42\n");
});

server.listen(5007, () => {
  console.log("params server running: http://localhost:5007");
});
