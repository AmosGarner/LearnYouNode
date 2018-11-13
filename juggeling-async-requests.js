const http = require("http");
const urls = [process.argv[2], process.argv[3], process.argv[4]];

const Promises = [];
const Responses = ["", "", ""];

for (let i = 0; i < urls.length; i++) {
  let url = urls[i];
  Promises.push(
    new Promise((resolve, reject) => {
      http.get(url, response => {
        response.setEncoding("utf8");
        response.on("data", data => {
          Responses[i] += data;
        });
        response.on("end", resolve);
      });
    })
  );
}

Promise.all(Promises).then(() => {
  for (response in Responses) {
    console.log(Responses[response]);
  }
});
