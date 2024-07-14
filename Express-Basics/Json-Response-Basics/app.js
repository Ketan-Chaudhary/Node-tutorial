const express = require("express");

const app = express();

const { products, data } = require("./data.js");

app.get("/", (req, res) => {
  res.json(products);
});

app.get("/user", (req, res) => {
  res.json(data);
});

app.listen(5000, () => console.log("Server starts"));
