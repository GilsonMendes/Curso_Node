import { ServerResponse } from "http";

const http = require("http");
const fs = require("fs");

const port = 3000;
const server = http.createServer((req: Response, res: ServerResponse) => {
  fs.readFile("arquivoFS.html", function (err: any, data: any) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
