while (true) {
  console.log("We are in loop. Callstack is bombard with sync task");
}

Promise.resolve().then(() => console.log("Promise resolved"));

// Puzzle
// async function f() {
//   console.log("A");
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hii");
//       console.log("D");
//     }, 5000);
//   });
//   console.log("B");
// }

// console.log("C");
// f();
