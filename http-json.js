const http = require('http');
const url = require('url');

const httpServer = http.createServer((request, response) => {
    if(request.method == 'GET'){
        const urlObj = url.parse(request.url, true);
        const apiPath = urlObj.path.split('?')[0];
        const queryString = urlObj.query;
        const date = new Date(queryString['iso']);

        switch(apiPath){
            case '/api/parsetime':
                response.writeHead(200, {'Content-Type': 'application\json'});
                let parseTimeResponse = {
                    "hour" : date.getHours(),
                    "minute" : date.getMinutes(),
                    "second" : date.getSeconds()
                };
                response.end(JSON.stringify(parseTimeResponse));
                break;
            case '/api/unixtime':
                response.writeHead(200, {'Content-Type': 'application\json'});
                let unixTimeResponse = {
                    "unixtime" : date.getTime()
                };
                response.end(JSON.stringify(unixTimeResponse));
                break;
            default:
                response.writeHead(404, {'Content-Type': 'application\json'});
                console.log('Error');
                break;
        }
    }
});

httpServer.listen(process.argv[2]);