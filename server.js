let http = require("http");

//http server created
http
  .createServer((req, res) => {
    res.end("Hello three");
  })
  .listen(3002, () => {
    console.log("server started");
  });
