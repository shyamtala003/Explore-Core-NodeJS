// worker.js
const { parentPort } = require(" ");
const fs = require("fs");

function heavyComputation() {
  let sum = 0;
  for (let i = 0; i < 1e7; i++) {
    sum += i;
    console.log("Worker sum:", sum);
  }
  return sum;
}

// CPU work
const result = heavyComputation();

// Async I/O work
fs.writeFile("worker-output.txt", `Result: ${result}`, () => {
  parentPort.postMessage({
    status: "done",
    result,
  });
});
