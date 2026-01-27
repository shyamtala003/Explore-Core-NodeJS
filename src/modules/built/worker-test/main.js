// main.js
const { Worker } = require("worker_threads");

console.log("Main thread started");
const worker = new Worker("./worker.js");

worker.on("message", (result) => {
  console.log("Worker finished computation:", result);
});

worker.on("error", (err) => {
  console.error("Worker error:", err);
});

setInterval(() => {
  console.log("Main still alive");
}, 500);

// while (true) {}
