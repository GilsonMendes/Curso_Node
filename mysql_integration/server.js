const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql2");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/books/inserbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const query = `INSERT INTO CLIENTES(name, email) VALUES ('${nome}', '${email}')`; //revisar
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydatabase",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Conectou ao MySql");
  app.listen(3000, () => {
    console.log("Servidor rodando.");
  });
});
