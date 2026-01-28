const http = require("http");

const server = http.createServer((req, res) => {
  res.end("<H1>Hello!</h1>");
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server is listening on port : ${PORT}`));
