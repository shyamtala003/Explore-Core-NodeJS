const path = require("path");
console.log(path.join("abc"));
console.log(path.join("users", "john", "file.txt"));
console.log(path.resolve("data", "file.txt"));
console.log(process.cwd());
console.log(path.resolve(__dirname, "public"));
console.log(__dirname);
