const getResponses = require('../modules/GetResponses');
const urls = [process.argv[2], process.argv[3], process.argv[4]];
let responses = [];

urls.map(url => {
    getResponses(url, (urlIndex, response) => {
        responses[urlIndex] = response;
        console.log(responses[url]);
        if(responses.length == urls.length-1){
            urls.map(url => {
                console.log(responses[url]);
            })
        }
    })
});