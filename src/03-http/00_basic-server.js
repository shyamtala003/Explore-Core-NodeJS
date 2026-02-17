const http = require("node:http");

const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "application/json" });
  // const data = JSON.stringify({ msg: "Hello from Node HTTP server\n" });
  // res.write(data);
  // res.end();

  res.statusCode = 201;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ msg: "Success" }));
});

server.listen(5000, () => {
  console.log("server running: http://localhost:5000");
});
