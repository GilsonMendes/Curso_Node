import { URL } from "url";

const url = require("url");
const address = "https://www.meusite.com.br/catalog?produtos=cadeira";
const pasedUrl:URL = new url.URL(address);

console.log(pasedUrl.host);
console.log(pasedUrl.pathname);
console.log(pasedUrl.search);
console.log(pasedUrl.searchParams);
console.log(pasedUrl.searchParams.get('produtos'));
