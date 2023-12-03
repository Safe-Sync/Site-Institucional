var express = require("express");
var router = express.Router();


var tarefasController = require("../controllers/kpiFuncionarioController");

router.get("/tarefasEntregues/:idFuncionario", function (req, res) {
    tarefasController.tarefasEntregues(req, res);
});

router.get("/tarefasPendentes/:idFuncionario", function (req, res) {
    tarefasController.tarefasPendentes(req, res);
});

router.get("/janelasAbertas/:idFuncionario", function (req, res) {
    tarefasController.janelasAbertas(req, res);
});
module.exports = router;