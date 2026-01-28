const { parentPort } = require("worker_threads");

function holdOnFor10s() {
  const start = Date.now();
  while (start + 10000 >= Date.now()) {}
  return "Heavy Task done";
}

const result = holdOnFor10s();

parentPort.postMessage(result);
