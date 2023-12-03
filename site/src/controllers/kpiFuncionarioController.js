var tarefaModel = require("../models/kpiFuncionarioModel");

var sessoes = [];

function tarefasEntregues(req, res) {

    var idFuncionario = req.params.idFuncionario;

    tarefaModel.tarefasEntregues(idFuncionario).then(function (tarefa) {
        if (tarefa.length > 0) {
            res.status(200).json(tarefa);
        } else {
            res.status(204).send("Nenhuma tarefa encontrada no mês")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}
function tarefasPendentes(req, res) {

    var idFuncionario = req.params.idFuncionario;

    tarefaModel.tarefasPendentes(idFuncionario).then(function (tarefa) {
        if (tarefa.length > 0) {
            res.status(200).json(tarefa);
        } else {
            res.status(204).send("Nenhuma tarefa encontrada no mês")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function janelasAbertas(req, res) {

    var idFuncionario = req.params.idFuncionario;

    tarefaModel.janelasAbertas(idFuncionario).then(function (tarefa) {
        if (tarefa.length > 0) {
            res.status(200).json(tarefa);
        } else {
            res.status(204).send("Nenhuma janela encontrada no mês")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    tarefasEntregues,
    tarefasPendentes,
    janelasAbertas,
}