const express = require("express");
const exphbs = require("express-handlebars");
const { Sequelize } = require("sequelize");
const mysql = require("mysql2");
const { error } = require("console");

/**
 * Drives
 *  "mysql": "^2.18.1",
    "mysql2": "^3.3.3",
 */

const app = express();
const sequelize = new Sequelize("mydatabase", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectado com sucesso!");
} catch (err) {
  console.log("Não foi possível conectar!", error);
}

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

app.post("/list/del/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM  clientes WHERE id = ${id}`;
  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/list");
  });
});

app.get("/list", (req, res) => {
  const query = "SELECT * FROM CLIENTES";
  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const list = data;
    console.log(list);
    res.render("list", { list });
  });
});

  app.listen(3000, () => {
    console.log("Servidor rodando.");
  });

