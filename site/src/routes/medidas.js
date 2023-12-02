var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidasController");



router.get("/ultimas/:idFuncionario/:idHardware", function (req, res) {
    console.log("Entrei no ultimas");
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/graficoCPU/:idHardware", function (req, res) {
    medidaController.graficoCPU(req, res);
})

router.get("/graficoRAM/:idHardware", function (req, res) {
    medidaController.graficoRAM(req, res);
})

router.get("/graficoDISCO/:idHardware", function (req, res) {
    medidaController.graficoDISCO(req, res);
})

router.get("/graficoTAREFA/:idFuncionario", function (req, res) {
    medidaController.graficoTAREFA(req, res);
})

router.get("/alertas/:idEmpresa/:idFuncionario", function (req, res) {
    medidaController.alertas(req, res);
})

router.get("/dadosEmpresa/:idFuncionario", function (req, res) {
    medidaController.dadosEmpresa(req, res);
})

module.exports = router;