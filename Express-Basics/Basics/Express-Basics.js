const express = require("express");
const app = express();
// const app = require(express)()

// Express is module which is used to create server and handle requests and responses in nodejs and it is a framework of nodejs.

// Express Methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use

// Static Files and Middleware
// app.use(express.static("./public"));
// public folder will be static and can be acccessed by anyone and contains all the files which didn't need to change
// used for css, js, images, etc

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
  // res.sendFile('path')
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not Found");
});
app.listen(5000, () => {
  console.log("Server starts");
});
