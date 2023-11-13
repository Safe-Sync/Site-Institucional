var express = require("express");
var router = express.Router();


var tarefasController = require("../controllers/kpiFuncionarioController");

router.get("/tarefasEntregues/:idFuncionario", function (req, res) {
    tarefasController.tarefasEntregues(req, res);
});

router.get("/tarefasPendentes/:idFuncionario", function (req, res) {
    tarefasController.tarefasPendentes(req, res);
});

module.exports = router;