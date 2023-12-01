var funcionarioModel = require("../models/funcionarioModel");

var sessoes = [];

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        funcionarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editarInformacoes(req, res) {
    var idFuncionario = req.params.idFuncionario;
    var nomeFuncionario = req.body.nomeFuncionarioServer;
    var emailFuncionario = req.body.emailFuncionarioServer;
    var cargoFuncionario = req.body.cargoFuncionarioServer;

    if(idFuncionario == undefined) {
        res.status(400).send("idFuncionario está undefined!");
    } else if(nomeFuncionario == undefined) {
        res.status(400).send("nomeFuncionario está undefined!");
    } else if(emailFuncionario == undefined) {
        res.status(400).send("emailFuncionario está undefined!");
    } else if(cargoFuncionario == undefined) {
        res.status(400).send("cargoFuncionario está undefined!");
    } else {
        funcionarioModel.editarInformacoes(nomeFuncionario, emailFuncionario, cargoFuncionario, idFuncionario)
        .then(
            function (informacoes) {
                res.json(informacoes);
                console.log(informacoes)
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
    entrar,
    editarInformacoes,
}