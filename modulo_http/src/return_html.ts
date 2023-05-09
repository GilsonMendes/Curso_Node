import { ServerResponse } from "http";

const http = require("http");

const port = 3000;
const server = http.createServer((req: Response, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Contenty-type", "text/html");
  res.end("<h1>Teste server HTML</h1>");
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
