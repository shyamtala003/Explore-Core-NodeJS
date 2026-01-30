const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

const server = http.createServer((req, res) => {
  if (req.url === "/stream") {
    res.setHeader("Content-Type", "application/json");

    const stream = fs.createReadStream("../../public/dummy.json", {
      highWaterMark: 512, // 1 KB chunks (very small)
    });

    stream.on("data", (chunk) => {
      const canContinue = res.write(chunk);

      if (!canContinue) {
        console.log("⏸ Backpressure: pausing file stream");
        stream.pause();

        res.once("drain", () => {
          console.log("▶️ Drain: resuming file stream");
          stream.resume();
        });
      }
    });

    stream.on("end", () => {
      res.end();
    });

    return;
  }

  if (req.url === "/sync") {
    // ❌ BAD: loads entire file
    const data = fs.readFileSync("../../public/dummy.json");
    res.end(data);
    return;
  }

  if (req.url === "/gzip") {
    // Tell client response is gzipped
    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Disposition", 'attachment; filename="data.json"');

    const fileStream = fs.createReadStream("../../public/dummy.json");
    const gzip = zlib.createGzip();

    // Pipe chain (this is the magic)
    fileStream.pipe(gzip).pipe(res);

    return;
  }

  res.end("OK");
});

server.listen(5000, () =>
  console.log("Server running on http://localhost:5000"),
);
