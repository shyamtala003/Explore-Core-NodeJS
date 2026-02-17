const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const dataPath = path.resolve(__dirname, "../data/dummy.json");

const server = http.createServer((req, res) => {
  if (req.url !== "/download") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Try /download\n");
    return;
  }

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Content-Disposition": 'attachment; filename="dummy.json"',
  });

  const stream = fs.createReadStream(dataPath);
  stream.pipe(res);

  stream.on("error", (error) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(`stream error: ${error.message}`);
  });
});

server.listen(5001, () => {
  console.log("pipe server running: http://localhost:5001/download");
});
