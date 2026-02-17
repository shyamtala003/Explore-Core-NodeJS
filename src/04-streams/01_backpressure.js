const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const dataPath = path.resolve(__dirname, "../data/5MB.json");

const server = http.createServer((req, res) => {
  if (req.url !== "/stream" && req.url !== "/download") {
    res.end("Try /stream or /download");
    return;
  }

  if (req.url === "/download") {
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Disposition", 'attachment; filename="5MB.json"');
  } else {
    res.setHeader("Content-Type", "application/json");
  }

  const source = fs.createReadStream(dataPath, {
    highWaterMark: 10000,
  });

  source.on("data", (chunk) => {
    const canContinue = res.write(chunk);

    if (!canContinue) {
      source.pause();
      res.once("drain", () => source.resume());
    }
  });

  source.on("end", () => res.end());
  source.on("error", (error) => {
    res.statusCode = 500;
    res.end(error.message);
  });
});

server.listen(5002, () => {
  console.log(
    "backpressure server running: http://localhost:5002/stream and /download",
  );
});
