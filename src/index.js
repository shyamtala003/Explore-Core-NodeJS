setTimeout(() => {
  console.log("timeout");
}, 0);

process.nextTick(() => {
  console.log("nextTick1");
});

Promise.resolve().then(() => {
  console.log("promise");
});

process.nextTick(() => {
  console.log("nextTick2");
});

console.log("sync");
