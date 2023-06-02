const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql2");

const app = express();

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());


app.get("/", (req, res) => {
  res.render("home");
});

app.post("/cliente/cad", (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;

  const query = `INSERT INTO CLIENTES(name, email) VALUES ('${nome}', '${email}')`;
  conn.query(query, function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
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
