const express = require("express");
/* const exphbs = require("express-handlebars"); */
const Handlebars = require("handlebars");

const app = express();

/* app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars"); */
/* const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Gilson Mendes" })); */

app.get("/", function (req, res) {
  res.render("home", { layout: false });
});

app.listen(3000);
