const fs = require("node:fs");
const path = require("node:path");

const dataPath = path.resolve(__dirname, "../data/dummy.json");
const stream = fs.createReadStream(dataPath, {
  encoding: "utf-8",
  highWaterMark: 16,
});

let chunkCount = 0;

stream.on("data", (chunk) => {
  chunkCount += 1;
  console.log(`chunk ${chunkCount}:`, chunk);
});

stream.on("end", () => {
  console.log("stream finished");
});

stream.on("error", (error) => {
  console.error("stream error:", error.message);
});
