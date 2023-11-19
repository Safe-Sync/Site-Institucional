var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.post("/cadastrarFuncionario", function (req, res) {
    empresaController.cadastrarFuncionario(req, res);
})

router.post("/autenticar", function (req, res) {
    empresaController.entrar(req, res);
});

router.get("/gerenFunc/:idEmpresa", function (req, res) {
    empresaController.gerenFunc(req, res);
});

router.post("/adicionarTarefaFuncionario/:idFuncionario", function (req, res) {
    empresaController.adicionarTarefaFuncionario(req, res);
});
module.exports = router;