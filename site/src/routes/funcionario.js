var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.post("/entrar", function (req, res) {
    funcionarioController.entrar(req, res);
})

router.put("/editarInformacoes/:idFuncionario", function (req, res) {
    funcionarioController.editarInformacoes(req, res);
})

router.post("/inserirAlertas", function (req, res) {
    funcionarioController.inserirAlertas(req, res);
})

router.get("/mostrarAlertas/:idFuncionario", function (req, res) {
    funcionarioController.mostrarAlertas(req, res);
});

module.exports = router;