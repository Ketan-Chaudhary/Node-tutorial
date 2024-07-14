// MiddleWare is a function that has access to the request and response object
// It is used to modify the request and response object
// It can end the request-response cycle
// It can call the next middleware function in the stack
// It can be used to handle errors
// It can be used to render a view
// Every time a request is made to the server, the middleware is executed

// Middleware is used to perform the following tasks:
// Execute any code
// Make changes to the request and the response objects
// End the request-response cycle
// Call the next middleware function in the stack
// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function

const express = require("express");
const app = express();

// Middleware function
// req -> middleware -> res

const logger = require("./logger");

// app.get("/", logger, (req, res) => {
//   res.send("Home");
// });

// app.get("/about", logger, (req, res) => {
//   res.send("About");
// });

// app.get("/contact", logger, (req, res) => {
//   res.send("Contact");
// });

// Important Note:
// When there are multiple routes and we have to use the same middleware function for all the routes, we can use app.use() method
app.use(logger);
// we can also pass the path as the first argument to the app.use() method
// app.use("/contact", logger);
// then it will only excute for paths that start with /contact
// like /contact, /contact-us, /contact-me , /contact/anything

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

// The order of middleware is important, if we place the middleware after the route, it will not be executed

app.listen(5000, () => console.log("Server is running"));
