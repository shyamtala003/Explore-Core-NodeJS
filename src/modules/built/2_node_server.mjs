// server.mjs
import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

// starts a simple http server locally on port 5001
server.listen(5001, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:5001");
  setTimeout(() => console.log("timeout"), 0);
  setImmediate(() => console.log("immediate"));
  Promise.resolve().then(() => console.log("promise"));
  console.log("sync");
});

// run with `node server.mjs`
