const http = require("node:http");

function blockCpu(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // intentional busy-wait to demonstrate blocking behavior
  }
}

const server = http.createServer((req, res) => {
  if (req.url === "/slow") {
    blockCpu(4000);
    res.end("slow route done\n");
    return;
  }

  if (req.url === "/fast") {
    res.end("fast route\n");
    return;
  }

  res.end("Try /slow and /fast\n");
});

server.listen(5004, () => {
  console.log("blocking demo: http://localhost:5004");
});
