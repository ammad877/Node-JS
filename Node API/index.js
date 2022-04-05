const http = require("http");

const PORT = 10000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "application/json");
    return res.end("Welocome...");
  } else if (req.url === "/login") {
    res.setHeader("Content-Type", "application/json");
    return res.end("Successfully Login...");
  } else if (req.url === "/signup") {
    res.setHeader("Content-Type", "application/json");
    return res.end("Please Signup...");
  } else if (req.url === "/profile") {
    res.setHeader("Content-Type", "application/json");
    return res.end("Welcome to your Profile...");
  } else if (req.url === "/post") {
    res.setHeader("Content-Type", "application/json");
    return res.end("Make Your Post...");
  } else if (req.url === "/editpost") {
    res.setHeader("Content-Type", "application/json");
    return res.end("Edit Your Post...");
  }
  res.end("Invalid Request");
  res.statusCode = 404;
  console.log("RUNNING SERVER", PORT);
});

server.listen(PORT);
