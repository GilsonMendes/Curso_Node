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
      } else if (action === "Depositar") {
        depositar();
      } else if (action === "Consultar Saldo") {
      } else if (action === "Sacar") {
      } else if (action === "Sair") {
        console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!"));
        process.exit();
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
      const accountName = answer["accountName"];
      console.info(accountName);
      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Esta conta já existe, escolha outro nome!")
        );
        buildAccount();
        return;
      }
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err);
        }
      );
      console.log(chalk.green("Parabéns, a sua conta foi criada!"));
      operation();
    })
    .catch((err) => console.log(err));
}

//add an amount to user account

function depositar() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      //Verify if account exists
      if (!checkAccount(accountName)) {
        return depositar();
      }
      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto voce deseja depositar?",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];
          // add an amount
          addAmount(accountName, addAmount)
          operation();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(
      chalk.bgRed.black("Esta conta não existe, escolha outro nome!")
    );
    return false;
  }
  return true;
}

function addAmount(accountName, amount) {
  const account = getAccount(accountName);
  console.log(account);
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/ ${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });
  return JSON.parse(accountJSON);
}
