const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");

app.use([logger, authorize]);
// app.use([authorize, logger]); // first authorize will be executed then logger
// order matters

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.listen(5000, () => console.log("Server is running"));
