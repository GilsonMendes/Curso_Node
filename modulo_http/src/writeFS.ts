import { ServerResponse } from "http";

const http = require("http");
const fs = require("fs");

const port = 3000;
const server = http.createServer((req: Response, res: ServerResponse) => {
    const urlInfo = require("url").parse(req.url, true);
    const name = urlInfo.query.name;
    if (!name) {

        fs.readFile("writeFs.html", function (err: any, data: any) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        });
    } else {
        fs.writeFile('writeFs.html', name, function (err: any, data: any) {
            res.writeHead(302, {
                Location: '/',
            })
            return res.end();
        })
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});