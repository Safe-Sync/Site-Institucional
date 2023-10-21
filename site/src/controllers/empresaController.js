var empresaModel = require("../models/empresaModel");

var sessoes = [];

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        empresaModel.entrar(email, senha)
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

function cadastrar(req, res) {
    var nomeFantasia = req.body.Nome_fantasiaServer;
    var razaoSocial = req.body.RazaoSocialServer;
    var cnpj = req.body.CnpjServer;
    var cep = req.body.CepServer;
    var numero = req.body.NumeroServer;
    var complemento = req.body.ComplementoServer;
    var email = req.body.EmailServer;
    var telefone = req.body.TelefoneServer;
    var senha = req.body.SenhaServer;

    if (razaoSocial == undefined) {
        res.status(400).send("Razão social está undefined!");
    } else if (nomeFantasia == undefined) {
        res.status(400).send("Nome fantasia está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Cnpj está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Cep está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Complemento está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Numero está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Telefone está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        empresaModel.cadastrar(nomeFantasia, razaoSocial, cnpj, cep, numero, complemento, email, telefone, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarFuncionario(req, res) {

    var nome = req.body.nomeServer;
    var cargo = req.body.cargoServer;
    var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var telefone = req.body.telefoneServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Nome está undefined!");
    } else if (cargo == undefined) {
        res.status(400).send("Cargo está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Cpf está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Email está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Telefone está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Senha está undefined!");
    } else {
        empresaModel.cadastrarFuncionario(nome, cargo, cpf, email, telefone, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    cadastrarFuncionario,
}