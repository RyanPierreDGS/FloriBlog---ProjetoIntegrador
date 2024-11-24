const express = require("express");
const server = express();

server.get("/hello", (req, res) => {
  return res.send("<h1>Hello World</h1>");
});

server.listen(3000);
