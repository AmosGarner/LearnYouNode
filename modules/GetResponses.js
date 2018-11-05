const http = require('http');

module.exports = (url, callback) => {
    let dataString = "";
    http.get(url, (response) => {
        response.setEncoding('utf8');
        response.on('data', (data) => { dataString += data; });
        response.on('end', () => { callback(url, dataString); });
    });
}