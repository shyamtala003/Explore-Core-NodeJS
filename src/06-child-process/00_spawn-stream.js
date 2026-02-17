const { spawn } = require("node:child_process");

// spawn is best when you want stdout/stderr as streams.
const child = spawn("htop");

child.stdout.on("data", (chunk) => {
  process.stdout.write(chunk);
});

child.stderr.on("data", (chunk) => {
  process.stdout.write(`stderr: ${chunk}`);
});

child.on("close", (code) => {
  console.log(`child closed with code ${code}`);
});
