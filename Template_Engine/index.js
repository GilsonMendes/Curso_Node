const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebas", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", { layout: false });
});
