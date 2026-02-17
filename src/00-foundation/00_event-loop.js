setTimeout(() => {
  console.log("setTimeout (macrotask)");
}, 0);

setImmediate(() => {
  console.log("setImmediate (check phase)");
});

process.nextTick(() => {
  console.log("process.nextTick (runs before promise microtasks)");
});

Promise.resolve().then(() => {
  console.log("Promise.then (microtask)");
});

console.log("sync code");
