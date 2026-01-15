const fs = require('fs');
const http = require("http");

// fs.writeFileSync(`test.css`, 'Hello');
// console.log('File created');



const server = http.createServer((req, res) => {
  res.end("Hello from Node server");
});

fs.readFile("file.txt", () => {
  setImmediate(() => console.log("Immediate"));
  console.log("Read file done");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
