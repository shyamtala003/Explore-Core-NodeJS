const { exec } = require("node:child_process");

// exec buffers full output and gives it in callback.
exec(`node -v`, (error, stdout, stderr) => {
  if (error) {
    console.error("exec error:", error.message);
    return;
  }

  if (stderr) {
    console.error("exec stderr:", stderr.trim());
  }

  console.log("node version from exec:", stdout.trim());
});
