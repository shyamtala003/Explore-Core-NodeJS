const http = require("http");
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/slow") {
    // // Case 1 ❌ BAD: CPU blocking code execution time : 5.02ms
    // const start = Date.now();
    // while (Date.now() - start < 5000) {} // block for 5 sec
    // res.end("Slow response finished\n");

    // // Case 2 ✅ Write way to done this
    // setTimeout(() => {
    //   res.end("Slow response finished\n");
    // }, 5000);

    // Case 3 : use worker thread and off load heavy task from callstack
    const heavyTaskWorker = new Worker("./2_worker.js");
    heavyTaskWorker.on("message", () => {
      res.end("Over");
    });

    return;
  }

  //   Concurrently Call both endpoints
  //  case 1:  execution time : 5.04s
  //  case 2:  execution time : 3ms
  //  case 2:  execution time : 1ms
  if (req.url === "/fast") {
    res.end("Fast response\n");
    return;
  }

  res.end("OK\n");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
