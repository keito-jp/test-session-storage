var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
  switch (req.url) {
    case "/":
      if (req.url === "/" || req.url === "") {
        req.url = "/index.html"
      }
      file(res, req, "text/html", false);
      break;
    case "/app.js":
      file(res, req, "text/plain", false);
      break;
    case "/filesize.min.js":
      file(res, req, "text/plain", false);
      break;
    default:
      notFound(res, req);
      break;
  }
}).listen(8080);

function file(res, req, contentType, isBinary) {
  fs.readFile("." + req.url, "UTF-8", function(err, data) {
    res.writeHead(200, {
      "Content-Type": contentType
    });
    if (isBinary) {
      res.write(data, "binary");
    } else {
      res.write(data);
    }
    res.end();
  });
}

function notFound(res, req) {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write(req.url + "is not found.");
  res.end();
}
