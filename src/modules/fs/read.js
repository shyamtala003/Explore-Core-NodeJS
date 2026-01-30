const fs = require("fs");
const { readFile } = require("fs/promises");

// 1. code run at callStack
const callStackHall = fs.readFileSync("../../public/dummy.json", "utf-8");

// 2. Promise is sync so sync code execute at callStack but then/catch is async so that code runs at libuv
new Promise((resolve, reject) => {
  console.log("1. Start");
  fs.readFile("../../public/dummy.json", (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
  console.log("2. End");
})
  .then((data) => {
    console.log("3 File Data");
    console.log(JSON.parse(data));
  })
  .catch((error) => console.error(error));

// 3. This function's sync code execute at call stack then wait for response and get file data and then sync code execute
// (async function readFileExample() {
//   try {
//     console.log("Start");

//     const data = JSON.parse(await readFile("../../public/dummy.json", "utf-8"));
//     console.log(data);

//     console.log("End");
//   } catch (error) {
//     console.error(error);
//   }
// })();

// 4. Stream large file for memory(Ram) optimization
(function readFileExample() {
  try {
    console.log("Start");

    const data = JSON.parse(
      fs.createReadStream("../../public/dummy.json", "utf-8"),
    );
    console.log(data);

    console.log("End");
  } catch (error) {
    console.error(error);
  }
})();
