"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
    res.write("Olá http!");
    res.end();
});
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
