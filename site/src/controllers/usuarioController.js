var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
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
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var razaoSocial = req.body.RazaoSocialServer;
    var nomeFantasia = req.body.Nome_fantasiaServer;
    var cnpj = req.body.CnpjServer;
    var cep = req.body.CepServer;
    var complemento = req.body.ComplementoServer;
    var numero = req.body.NumeroServer;
    var telefone = req.body.TelefoneServer;
    var email = req.body.EmailServer;
    var senha = req.body.SenhaServer;

    // Faça as validações dos valores
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
    }else if(numero == undefined){
        res.status(400).send("Numero está undefined!");
    }else if(telefone == undefined){
        res.status(400).send("Telefone está undefined!");
    }else if(email == undefined){
        res.status(400).send("Email está undefined!");
    }else if(senha == undefined){
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(razaoSocial, nomeFantasia, cnpj, cep, complemento, numero, telefone, email, senha)
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
    listar,
    testar
}