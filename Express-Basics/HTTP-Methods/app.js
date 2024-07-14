const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/postman", (req, res) => {
  res.status(200).send("Welcome to Postman");
  console.log(req.body);
});

app.post("/api/postman", (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (!name) {
    res.status(400).send("Name is required");
  }
  res.status(201).json(`Welcome ${name}`);
});

app.put("/api/postman/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(req.body);
  if (!name) {
    res.status(400).send("Name is required");
  }
  res.status(200).json({ id, name });
});

app.delete("/api/postman/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(req.body);
  res.status(200).send(`Post with id ${id} is deleted  ${name}`);
});

app.listen(5000, () => console.log("Server is running on port 5000"));
