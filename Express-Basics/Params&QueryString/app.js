// Params and Query String
// Params: "/url/:param_name"
// const {param_name} = req.params;
// Query String: "/url?query_name=value"
// const {query_name} = req.query;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;
  res.send(`Product ID: ${productId}`);
});

app.get("/v1/query", (req, res) => {
  console.log(req.query);
  if (!req.query) {
    res.send("No query string found");
  }
  res.send(req.query);
});

app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(`User ID: ${userId}`);
});

app.listen(5000, () => console.log("Server is listening on port 5000"));
