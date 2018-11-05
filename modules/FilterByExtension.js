const fs = require("fs");
const path = require("path");

module.exports = (dirPath, filter, callback) => {
  fs.readdir(dirPath, "utf8", (err, list) => {
    if (err) {
      return callback(err);
    }
    
    let fileList = list.filter(file => {
      return path.extname(file) === "." + filter;
    });
    return callback(null, fileList);
  });
};
