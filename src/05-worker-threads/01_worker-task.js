const { parentPort, workerData } = require("node:worker_threads");

function heavyComputation(iterations) {
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    sum += Math.sqrt(i);
  }
  return Math.floor(sum);
}

const result = heavyComputation(workerData.iterations);
parentPort.postMessage(result);
