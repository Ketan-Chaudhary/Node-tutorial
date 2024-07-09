// HTTP Module
// HTTP Module is used to create a server that listens to server ports and gives a response back to the client.

const http = require("http");

const server = http.createServer((req, res) => {
  //   res.write("Welcome to our home page");
  //   res.end();

  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back Home</a>
            `);
  }
});

server.listen(3000);
