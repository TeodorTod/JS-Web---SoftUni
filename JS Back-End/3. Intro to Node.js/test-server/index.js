const http = require('http');

http.createServer((req, res) => {

    res.write('<h1>Hi!</h1>');

    res.end();

}).listen(1337);

console.log('Node.js server running on port 1337');