const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/process", (req, res) => {
  res.render("process");
});
