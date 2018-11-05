const http = require('http');
const port = process.argv[2];
const map = require('through2-map');

const uppercase = map(chunk => {
    return chunk.toString().toUpperCase();
});

const httpServer = http.createServer((request, response) => {
    if(request.method === 'POST'){
        request.pipe(uppercase).pipe(response);
    }
});

httpServer.listen(port);