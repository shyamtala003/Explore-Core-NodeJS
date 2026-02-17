const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Try /users\n");
    return;
  }

  if (req.url === "/users" && req.method === "GET") {
    const users = [
      { id: 1, name: "Ada" },
      { id: 2, name: "Linus" },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(5000, () => {
  console.log("routing server running: http://localhost:5000");
});
