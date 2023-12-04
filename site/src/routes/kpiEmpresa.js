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

router.get("/tarefasPendentesMes/:idEmpresa", function (req, res) {
    kpiEmpresaController.tarefasPendentesMes(req, res);
});

router.get("/limiteMaquinas/:idEmpresa", function (req, res) {
    kpiEmpresaController.limiteMaquinas(req, res);
});
router.get("/limiteMaquinasQtd/:idEmpresa", function (req, res) {
    kpiEmpresaController.limiteMaquinasQtd(req, res);
});

router.get("/qtdMaquinas/:idEmpresa", function (req, res) {
    kpiEmpresaController.qtdMaquinas(req, res);
});

module.exports = router;