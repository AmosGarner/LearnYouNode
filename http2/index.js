const getServerData = require('../modules/GetResponseData');
let data = undefined;

getServerData(process.argv[2], (length, string) => {
    console.log(length);
    console.log(string)
});