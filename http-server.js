let http = require('http');
let fs = require('fs');

let httpServer = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(process.argv[3]).pipe(response);
});

httpServer.listen(process.argv[2]);