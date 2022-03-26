const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(req.url);

  res.write("<h1>Hellow !!!!<h1>");
  res.write("<h2>Hellow !!!!<h2>");
  res.write("<h3>Hellow !!!!<h3>");
  res.end();
});
const PORT = 3000;

server.listen(PORT, () =>
  console.log(`server is running on port ${PORT} ! ...`)
);
