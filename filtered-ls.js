const fs = require('fs');
const path = require('path');

const pathArgument = process.argv[2];
const filter = process.argv[3];

const getDirectoryList = (callback) => {
    fs.readdir(pathArgument, "utf8", (err, files) =>{
        (!err) ? callback(filterFilesInDir(files)) : console.log(err);
    })
}

const logfilesInDir = (files) => {
    files.map(file => {
        console.log(file);
    })
}

const filterFilesInDir = (files) => {
    let filteredFiles = [];
    files.map( file => {
        if(path.extname(file) === '.'+filter)
            filteredFiles.push(file);
    });
    return filteredFiles;
}

getDirectoryList(logfilesInDir);