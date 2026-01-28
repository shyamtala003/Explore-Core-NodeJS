const { parentPort } = require("worker_threads");

function heavyCalculation() {
  let sum = 0;
  for (let i = 0; i <= 100000; i++) {
    sum = sum + i;
  }

  return sum;
}

const sum = heavyCalculation();

throw new Error("Something went wrong!");

parentPort.postMessage(sum);
