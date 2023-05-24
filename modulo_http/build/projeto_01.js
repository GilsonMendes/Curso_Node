const inquirer = require("inquirer");
const chalk = require("chalk");

const fs = require("fs");
console.log("Iniciamos o Accounts");

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que voce deseja fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      if (action === "Criar Conta") {
        createAccout();
      }
    })
    .catch((err) => console.log(err));
}

function createAccout() {
  console.log(chalk.bgGreen.black("Parabens por escolher o nosso banco"));
  console.log(chalk.green("Defina as opcoes da sua conta a seguir"));
  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para a sua conta: ",
      },
    ])
    .then((answer) => {
      console.log(answer);
    })
    .catch((err) => console.log(err));
}
