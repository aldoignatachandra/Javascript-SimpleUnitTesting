const express = require("express");
var app = express();

//End Point '/'
app.get("/", (req, res) => {
  res.status(200).send("Testing Server");
});

//End Point '/user'
app.get("/user", (req, res) => {
  res.status(200).send({ name: "Aldo", age: "22" });
});

//End Point '/users'
app.get("/users", (req, res) => {
  res.status(200).send([
    { name: "Aldo", age: "22" },
    { name: "Ignata", age: "22" },
    { name: "Chandra", age: "22" }
  ]);
});

app.listen(3000);

module.exports.app = app;
