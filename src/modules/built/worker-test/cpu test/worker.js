const { workerData, parentPort } = require("worker_threads");

function heavyComputation(iteration) {
  let sum = 0;
  for (let i = 0; i <= iteration; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
}

const result = heavyComputation(workerData.iteration);
console.log(result);

parentPort.postMessage({ workerId: workerData?.id, result });
