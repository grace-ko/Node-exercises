const http = require('http');
const port = 3000;
const fs = require('fs');

const requestHandler = (req, res) => {
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;
    console.log('file created');
  });
  res.end();
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is listening on port ${port}`);
});
