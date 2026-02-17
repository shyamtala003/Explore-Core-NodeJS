const http = require("node:http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && url.pathname === "/users") {
    const page = url.searchParams.get("page") || "1";
    const limit = url.searchParams.get("limit") || "10";
    const sort = url.searchParams.get("sort") || "name";

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        route: "/users",
        query: { page, limit, sort },
      }),
    );
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Try: /users?page=2&limit=5&sort=desc\n");
});

server.listen(5006, () => {
  console.log("query server running: http://localhost:5006");
});
