const fs = require("node:fs");
const path = require("node:path");

const dataPath = path.resolve("src", "data", "dummy.json");

console.log("1) sync read start");
const syncData = fs.readFileSync(dataPath, "utf8");
console.log("2) sync read done. records:", JSON.parse(syncData).length);

console.log("3) async read start");
fs.readFile(dataPath, "utf8", (error, asyncData) => {
  if (error) {
    console.error("async read failed:", error.message);
    return;
  }

  console.log("5) async read done. records:", JSON.parse(asyncData).length);
});

console.log("4) main thread continues without waiting async read");
