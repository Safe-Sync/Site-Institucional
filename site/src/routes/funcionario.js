var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.post("/entrar", function (req, res) {
    funcionarioController.entrar(req, res);
})

module.exports = router;