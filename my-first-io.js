const fs = require('fs');
const filePath = process.argv[2];
const fileBuffer = fs.readFileSync(filePath);
const fileContents = fileBuffer.toString();
const lines = fileContents.split('\n');
console.log(lines.length-1);