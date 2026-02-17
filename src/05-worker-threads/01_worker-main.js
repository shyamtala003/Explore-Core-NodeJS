const http = require("node:http");
const path = require("node:path");
const { Worker } = require("node:worker_threads");

const workerPath = path.resolve(__dirname, "01_worker-task.js");

const server = http.createServer((req, res) => {
  if (req.url === "/slow") {
    const worker = new Worker(workerPath, {
      workerData: { iterations: 7e9 },
    });

    worker.once("message", (result) => {
      res.end(`worker done. sum=${result}\n`);
    });

    worker.once("error", (error) => {
      res.statusCode = 500;
      res.end(error.message);
    });

    return;
  }

  if (req.url === "/fast") {
    res.end("fast route stays responsive\n");
    return;
  }

  res.end("Try /slow and /fast\n");
});

server.listen(5005, () => {
  console.log("worker demo: http://localhost:5005");
});
