const path = require("node:path");

console.log("join:", path.join("users", "john", "docs", "file.txt"));
console.log("resolve:", path.resolve("src", "data", "dummy.json"));
console.log("resolve:", path.resolve(__dirname, "json", "dummy.json"));
console.log("basename:", path.basename("/tmp/report.txt"));
console.log("dirname:", path.dirname("/tmp/report.txt"));
console.log("extname:", path.extname("/tmp/report.txt"));
