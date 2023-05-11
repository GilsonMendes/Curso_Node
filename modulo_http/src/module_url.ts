import { URL } from "url";

const url = require("url");
const address = "https://www.meusite.com.br/catalog?produtos=cadeira";
const pasedUrl:URL = new url.URL(address);



