import { ServerResponse } from "http";

const http = require("http");

const port = 3000;
const server = http.createServer((req:Response, res: ServerResponse) => {
  res.write("Olá http!");
  res.end();
});

server.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}`);

})
