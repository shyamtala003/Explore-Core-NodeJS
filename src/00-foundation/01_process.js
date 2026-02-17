console.log("cwd:", process.cwd());
console.log("pid:", process.pid);
console.log("platform:", process.platform);
console.log("node version:", process.version);

console.log("sample env (HOME):", process.env || "not set");

process.on("beforeExit", (code) => {
  console.log("beforeExit code:", code);
});

process.on("exit", (code) => {
  console.log("exit code:", code);
});
