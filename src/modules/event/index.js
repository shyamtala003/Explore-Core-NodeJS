const EventEmitter = require("events");

class FileDownloader extends EventEmitter {
  startDownload() {
    console.log("1️⃣ Download started");

    // start event (sync)
    this.emit("start");

    let downloaded = 0;

    const interval = setInterval(() => {
      downloaded += 20;

      // progress event
      this.emit("progress", downloaded);

      if (downloaded === 60) {
        // simulate error
        this.emit("error", new Error("Network issue"));
        clearInterval(interval);
        return;
      }

      if (downloaded >= 100) {
        clearInterval(interval);
        this.emit("done");
      }
    }, 500);
  }
}

const downloader = new FileDownloader();

/* ---- listeners ---- */

downloader.on("start", () => {
  console.log("📢 Event: start");
});

function onProgress(percent) {
  console.log(`📦 Downloaded: ${percent}%`);
}

downloader.on("progress", onProgress);

// once → only one time
downloader.once("done", () => {
  console.log("✅ Download completed");
});

// VERY IMPORTANT: error event
downloader.on("error", (err) => {
  console.log("❌ Error handled:", err.message);

  // remove progress listener (cleanup)
  downloader.off("progress", onProgress);
  console.log("🧹 Progress listener removed");
});

downloader.startDownload();
