const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "static/images")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/consign", (req, res) => {
  res.render("consign");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/process", (req, res) => {
  res.render("process");
});
app.listen(process.env.PORT || 5000, "0.0.0.0");
