// main.js
const { Worker } = require("worker_threads");
const os = require("os");

const CPU_COUNT = os.cpus().length;
console.log("1. CPU cores:", CPU_COUNT);
setTimeout(() => {
  console.log("4. Time Out");
}, 0);
process.nextTick(() => console.log("2. Process Next Tick"));

Promise.resolve().then(() => {
  console.log("3. Promise");
});

const WORKERS = CPU_COUNT; // try CPU_COUNT * 2 later
const ITERATIONS = 5e7;

let completed = 0;

for (let i = 0; i < WORKERS; i++) {
  const worker = new Worker("./worker.js", {
    workerData: {
      id: i,
      iteration: ITERATIONS,
    },
  });

  worker.on("message", (msg) => {
    console.log(`Worker ${msg.workerId} done. Result : ${msg?.result}`);
    completed++;

    if (completed === WORKERS) {
      console.log("✅ All workers completed");
    }
  });

  worker.on("error", console.error);
}
