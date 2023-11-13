var express = require("express");
var router = express.Router();

var tarefaController = require("../controllers/tarefaController");

router.post("/adicionarTarefa", function (req, res) {
    tarefaController.adicionarTarefa(req, res);
});

router.get("/pegarTarefa/:idFuncionario", function (req, res) {
    tarefaController.pegarTarefa(req, res);
});

router.put("/atualizarTarefaAFazer", function (req, res) {
    tarefaController.atualizarTarefaAFazer(req,res);
})

router.put("/atualizarTarefaEmAndamento", function (req, res) {
    tarefaController.atualizarTarefaEmAndamento(req,res);
})

router.put("/atualizarTarefaConcluido", function (req, res){
    tarefaController.atualizarTarefaConcluido(req,res);
})

router.put("/atualizarNaoIniciado", function (req, res){
    tarefaController.atualizarNaoIniciado(req,res);
})

module.exports = router;