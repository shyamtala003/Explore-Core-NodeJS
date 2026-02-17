const { fork } = require("node:child_process");
const path = require("node:path");

const childPath = path.resolve(__dirname, "02_fork-worker.js");
const child = fork(childPath);

child.on("message", (message) => {
  console.log("message from child:", message);
});

child.on("exit", (code) => {
  console.log(`fork child exited with code ${code}`);
});

child.send({ iterations: 5e6 });
