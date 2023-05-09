"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Contenty-type", "text/html");
    res.end("<h1>Teste server HTML</h1>");
});
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
