const filter = require("../modules/FilterByExtension.js");

filter(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    return console.log("There was an error:", err);
  }
  data.map(file => {
    console.log(file);
  });
});
