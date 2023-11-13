var kpiEmpresaModel = require("../models/kpiEmpresaModel");

var sessoes = [];

function listarFuncionarios(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiEmpresaModel.listarFuncionarios(idEmpresa).then(function (funcionarios) {
        if (funcionarios.length > 0) {
            res.status(200).json(funcionarios);
        } else {
            res.status(204).send("Nenhum funcionario encontrado")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}


function funcionariosAtivos(req, res) {
    
    var idEmpresa = req.params.idEmpresa;

    kpiEmpresaModel.funcionariosAtivos(idEmpresa).then(function (funcionarios) {
        if (funcionarios.length > 0) {
            res.status(200).json(funcionarios);
        } else {
            res.status(204).send("Nenhum funcionario encontrado")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function tarefasEntreguesMes(req, res) {
    
    var idEmpresa = req.params.idEmpresa;

    kpiEmpresaModel.tarefasEntreguesMes(idEmpresa).then(function (tarefas) {
        if (tarefas.length > 0) {
            res.status(200).json(tarefas);
        } else {
            res.status(204).send("Nenhum funcionario encontrado")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    listarFuncionarios,
    funcionariosAtivos,
    tarefasEntreguesMes,
};