const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "src", "views", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) {
            throw err;
          }

          res.end(content);
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "src", "views", "about.html"),
        "utf-8",
        (err, content) => {
          if (err) {
            throw err;
          }

          res.end(content);
        }
      );
    } else if (req.url === "/api/users") {
      res.writeHead(200, {
        "Content-Type": "text/json",
      });

      const users = [
        { name: "Ivan", age: 30 },
        { name: "Poly", age: 32 },
        { name: "Doly", age: 40 },
        { name: "Klarck", age: 20 },
      ];

      res.end(JSON.stringify(users));
    }
  } else if (req.method === "POST") {
    const body = [];
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    req.on("data", (data) => {
      body.push(Buffer.from(data).toString().split("=")[1]);
    });

    req.on("end", () => {
      console.log(body.join());

      res.end(`
        <h1>Your message is ${body.join(", ")} !</h1>
      `);
    });
  }
});
const PORT = 3000;

server.listen(PORT, () =>
  console.log(`server is running on port ${PORT} ! ...`)
);
