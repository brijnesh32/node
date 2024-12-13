const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("content-Type", "text/html");
    res.write(`<html>
    <head><title>home</title></head>
   <body><h1>Welcome to calculate</h1>
   <a href="http://localhost:3000/calculate">Visit  to calculate!</a>
</body></html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculate") {
    res.setHeader("content-Type", "text/html");
    res.write(`<html>
    <head><title>home</title></head>
   <body><h1>here is the calculate</h1>
   <form action="/calculate-result" method="POST">
   <input type="number" placeholder="first num" name="first"/>
   <input type="number" placeholder="second num" name="second"/>
   <button> sumit</button>
   </form>
   </body></html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  } else {
    res.setHeader("content-Type", "text/html");
    res.write(`<html>
    <head><title>home</title></head>
   <body><h1>page is out found</h1>
   <a href="/">Visit  to home page !</a>
   </body></html>`);
    return res.end();
  }
};
exports.requestHandler = requestHandler;
