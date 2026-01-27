console.log(process.cwd());
console.log(process.pid);
console.log(process.platform);
console.log(process.env.API_KEY);

process.on("exit", () => {
  console.log("Process exiting");
});
