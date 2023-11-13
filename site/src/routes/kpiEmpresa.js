var express = require("express");
var router = express.Router();


var kpiEmpresaController = require("../controllers/kpiEmpresaController");

router.get("/listarFuncionarios/:idEmpresa", function (req, res) {
    kpiEmpresaController.listarFuncionarios(req, res);
});

router.get("/funcionariosAtivos/:idEmpresa", function (req, res) {
    kpiEmpresaController.funcionariosAtivos(req, res);
});

router.get("/tarefasEntreguesMes/:idEmpresa", function (req, res) {
    kpiEmpresaController.tarefasEntreguesMes(req, res);
});

module.exports = router;