var tarefaModel = require("../models/tarefaModel");

var sessoes = [];

function adicionarTarefa(req, res){
    var nomeTarefa = req.body.nomeTarefaServer;
    var dataTarefa = req.body.dataTarefaServer;
    var fkFuncionario = req.body.dadosFuncionarioServer;
    var diaDaSemana = req.body.diaDaSemanaServer;

    if(nomeTarefa == undefined){
        res.status(400).send("Nome da tarefa está undefined");
    }else if(dataTarefa == undefined){
        req.status(400).send("Data da tarefa está undefined")
    }else if(diaDaSemana == undefined){
        req.status(400).send("Dia da semana está undefined")
    }
    else{
        tarefaModel.adicionarTarefa(nomeTarefa, dataTarefa, diaDaSemana, fkFuncionario)
        .then(
            function (tarefa) {
                res.json(tarefa);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function pegarTarefa(req, res) {

    var idFuncionario = req.params.idFuncionario;

    tarefaModel.pegarTarefa(idFuncionario).then(function (tarefa) {
        if (tarefa.length > 0) {
            res.status(200).json(tarefa);
        } else {
            res.status(204).send("Nenhuma tarefa encontrada")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizarTarefaAFazer(req, res){
    var idTarefa = req.body.idTarefaServer;

    if(idTarefa == undefined){
        res.status(400).send("id da tarefa está undefined");
    }else{
        tarefaModel.atualizarTarefaAFazer(idTarefa)
        .then(
            function (tarefa) {
                res.json(tarefa);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}
function atualizarTarefaEmAndamento(req, res){
    var idTarefa = req.body.idTarefaServer;

    if(idTarefa == undefined){
        res.status(400).send("id da tarefa está undefined");
    }else{
        tarefaModel.atualizarTarefaEmAndamento(idTarefa)
        .then(
            function (tarefa) {
                res.json(tarefa);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function atualizarTarefaConcluido(req, res){
    console.log("QERTYFHCVB");
    var idTarefa = req.body.idTarefaServer;
    if(idTarefa == undefined){
        res.status(400).send("id da tarefa está undefined");
    }else{
        tarefaModel.atualizarTarefaConcluido(idTarefa)
        .then(
            function (tarefa) {
                res.json(tarefa);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function atualizarNaoIniciado(req, res){
    var idTarefa = req.body.idTarefaServer;
    if(idTarefa == undefined){
        res.status(400).send("id da tarefa está undefined");
    }else{
        tarefaModel.atualizarNaoIniciado(idTarefa)
        .then(
            function (tarefa) {
                res.json(tarefa);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}
module.exports = {
    adicionarTarefa,
    pegarTarefa,
    atualizarTarefaAFazer,
    atualizarTarefaEmAndamento,
    atualizarTarefaConcluido,
    atualizarNaoIniciado,
}