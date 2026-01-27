const fs = require("fs");

setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));

fs.readFile(__filename, () => {
  console.log("file");
});

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("sync");
