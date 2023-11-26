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
module.exports = router;