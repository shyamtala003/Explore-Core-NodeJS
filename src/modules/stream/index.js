const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  try {
    if (req.url === "/slow-read") {
      const jsonData = fs.readFileSync("../../public/dummy.json");
      res.end(jsonData);
    }

    if (req.url === "/fast-read") {
      res.setHeader("Content-Type", "application/octet-stream");
      res.setHeader("Content-Disposition", "attachment; filename=dummy.json");
      const stream = fs.createReadStream("../../public/dummy.json", {
        highWaterMark: 1024, // 1KB chunks
      });
      stream.pipe(res);
    }
  } catch (error) {
    console.error(error);
  }
});

server.listen(5000, () => console.log("Server is running on port 5000"));
