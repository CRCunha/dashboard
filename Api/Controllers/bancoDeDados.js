const mysql = require("mysql");

let conexao = mysql.createConnection({
  host: "localhost",
  database: "tcc",
  user: "root",
  password: "281998",
  charset: "utf8",
});

// eslint-disable-next-line eqeqeq
if (conexao.state != "authenticated") conexao.connect();

module.exports = {
  conexao: conexao,
};
