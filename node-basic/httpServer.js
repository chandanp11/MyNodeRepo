const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello world from http server');
});

exports.startHttpServer = function (port) {
  server.listen(port);
};
