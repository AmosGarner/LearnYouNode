const fs = require('fs');
const path = process.argv[2];
let lines = undefined;

const getFileContents = (callback) => {
    fs.readFile(path, 'utf8', (err, fileContents) => {
        if(!err){
            lines = fileContents.split('\n');
            callback();
        }else{
            console.log(err);
        }
    })
};

const logOutput = () => {
    console.log(lines.length - 1);
}

getFileContents(logOutput);