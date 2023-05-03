const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

const chefs = require("./chefs.json");

app.get("/", (req, res) => {
  res.send("This is the server of La Sultans");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const specifiedChef = chefs.find((chef) => chef.id === parseInt(id));
  res.send(specifiedChef);
});

app.listen(5000, () => {
  console.log("hi");
});
