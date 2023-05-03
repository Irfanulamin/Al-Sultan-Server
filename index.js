const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

const chefs = require("./chefs.json");

app.get("/", (request, response) => {
  response.send("This is the server of La Sultans");
});

app.get("/chefs", (request, response) => {
  response.send(chefs);
});

app.get("/chefs/:id", (request, response) => {
  const id = request.params.id;
  const specifiedChef = chefs.find((chef) => chef.id === parseInt(id));
  response.send(specifiedChef);
});

app.listen(5000, () => {
  console.log("hi");
});
