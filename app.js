const http = require("http");

const Server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>my page</title></head>");
  res.write("<body><h1>welcome </h1></body>");

  res.write("</html>");
  res.end();
});

Server.listen(3000, () => {
  console.log("server running on address http://localhost3000");
});
