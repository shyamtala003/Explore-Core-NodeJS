const { Worker } = require("worker_threads");

console.log("Start main thread execution");

const workerThread = new Worker("./workers.js");

workerThread.on("message", (result) => {
  console.log(result);
});

workerThread.on("error", (error) => console.error("error occur" + error));

workerThread.on("exit", (code) => {
  console.log("Worker exited with code:", code);
});

setTimeout(() => console.log("Main thread works is our here"), 3000);
