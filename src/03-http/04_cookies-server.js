const http = require("node:http");

function parseCookies(cookieHeader = "") {
  return Object.fromEntries(
    String(cookieHeader)
      ?.split("; ")
      .map((current) => {
        const key = String(current).split("=")[0];
        const value = String(current).split("=")[1];
        return [key, value];
      }),
  );
}

const server = http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);

  if (req.method === "GET" && req.url === "/set-cookie") {
    res.setHeader("Set-Cookie", [
      "theme=dark; HttpOnly; Path=/; Max-Age=3600",
      "token=abc123; HttpOnly; Path=/; Max-Age=3600",
    ]);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Cookies set" }));
    return;
  }

  if (req.method === "GET" && req.url === "/read-cookie") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ cookies }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Try: /set-cookie then /read-cookie\n");
});

server.listen(5008, () => {
  console.log("cookie server running: http://localhost:5008");
});
