const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

const dataPath = path.resolve(__dirname, "../data/5MB.json");

const server = http.createServer((req, res) => {
  if (req.url !== "/gzip") {
    res.end("Try /gzip");
    return;
  }

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Content-Encoding": "gzip",
  });

  const fileStream = fs.createReadStream(dataPath);
  const gzip = zlib.createGzip();

  fileStream.pipe(gzip).pipe(res);

  fileStream.on("error", (error) => {
    res.statusCode = 500;
    res.end(error.message);
  });
});

server.listen(5003, () => {
  console.log("gzip server running: http://localhost:5003/gzip");
});
