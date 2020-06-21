const express = require("express");
const router = express.Router();

const bancoDeDados = require("./bancoDeDados");

// RETORNA TODAS O USER
router.get("/", (request, response) => {
  bancoDeDados.conexao.query(`SELECT * FROM bar`, (erro, resultado) => {
    if (!erro) {
      response.status(200).json(resultado);
    } else {
      response.status(400).json({ erro: erro });
    }
  });
});

module.exports = (api) => api.use("/api/bar", router);
