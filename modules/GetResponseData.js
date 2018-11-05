const http = require('http');
let dataObjects = [];

module.exports = (url, callback) => {
   http.get(url, (response) => {
        response.setEncoding('utf8');
        response.on('data', (data) => {
            dataObjects.push(data);
        });
        response.on('error', (error) => {
            console.error(error)
        });
        response.on('end', () => {
            let dataString = dataObjects.join("");
            callback(dataString.length, dataString);
        });
   }).on('error', (error) => {
       console.error('Error:', error);
   });
};