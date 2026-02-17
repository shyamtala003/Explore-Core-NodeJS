const EventEmitter = require("node:events");

class Downloader extends EventEmitter {
  start() {
    this.emit("start");

    let progress = 0;
    const timer = setInterval(() => {
      progress += 25;
      this.emit("progress", progress);

      if (progress >= 100) {
        clearInterval(timer);
        this.emit("done", { file: "sample.zip", sizeMB: 4 });
      }
    }, 300);
  }
}

const downloader = new Downloader();

downloader.on("start", () => {
  console.log("download started");
});

downloader.on("progress", (percent) => {
  console.log(`progress: ${percent}%`);
});

downloader.once("done", (info) => {
  console.log("download complete:", info);
});

downloader.on("error", (error) => {
  console.error("download failed:", error.message);
});

downloader.start();
