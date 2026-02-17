const fs = require("node:fs/promises");
const path = require("node:path");

const dataPath = path.resolve(__dirname, "../data/dummy.json");

async function run() {
  try {
    console.log("start async/await file read");
    const file = await fs.readFile(dataPath, "utf8");
    const users = JSON.parse(file);

    console.log("loaded users:", users.length);
    console.log("first user:", users[0]);
  } catch (error) {
    console.error("failed:", error.message);
  }
}

run();
