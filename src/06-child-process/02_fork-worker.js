process.on("message", (message) => {
  const iterations = Number(message?.iterations) || 1e6;

  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    sum += i;
  }

  process.send({ status: "done", iterations, sum });
  process.exit(0);
});
