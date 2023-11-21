var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidasController");



router.get("/ultimas/:idFuncionario/:idHardware", function (req, res) {
    console.log("Entrei no ultimas");
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idHardware", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;