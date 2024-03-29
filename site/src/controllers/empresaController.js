const { info } = require("console");
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
    }else {
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
    var idEmpresa = req.body.idEmpresaServer;

    var limiteCpu = req.body.limiteCpuServer;
    var limiteRam = req.body.limiteRamServer;
    var limiteDisco = req.body.limiteDiscoServer;


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
    }else if(idEmpresa == undefined){
        res.status(400).send("Id da empresa está undefined!");
    } else if (limiteCpu == undefined) {
        res.status(400).send("Limite de CPU está undefined!");
    } else if (limiteRam == undefined) {
        res.status(400).send("Limite de RAM está undefined!");
    } else if (limiteDisco == undefined) {
        res.status(400).send("Limite de Disco está undefined!");
    } else {
        empresaModel.cadastrarFuncionario(nome, cargo, cpf, email, telefone, senha, idEmpresa, limiteCpu, limiteRam, limiteDisco)
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

function gerenFunc(req, res) {

    var idEmpresa = req.params.idEmpresa;

    empresaModel.gerenFunc(idEmpresa).then(function (funcionarios) {
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

function adicionarTarefaFuncionario(req, res){
    var idFuncionario = req.params.idFuncionario;
    var taskInput = req.body.taskInputServer;
    var taskDate = req.body.taskDateServer;
    var diaDaSemana = req.body.diaDaSemanaServer;

    console.log("Entrei no adicionarTarefaFuncionario");
    console.log(idFuncionario);
    console.log(taskInput);
    console.log(taskDate);

    if(idFuncionario == undefined){
        res.status(400).send("idFuncionario está undefined!");
    }else if(taskInput == undefined){
        res.status(400).send("taskInput está undefined!");
    }else if(taskDate == undefined){
        res.status(400).send("taskDate está undefined!");
    }else if(diaDaSemana == undefined){
        res.status(400).send("diaDaSemana está undefined!");
    }
    else {
        empresaModel.adicionarTarefaFuncionario(taskInput, taskDate, idFuncionario, diaDaSemana)
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

    function procurarFuncionario(req, res) {
        var idEmpresa = req.params.idEmpresa;
        var nomeBuscado = req.body.nomeFuncionarioServer;

        if(nomeBuscado == undefined) {
            res.status(400).send("nomeFuncionario está undefined!");
            console.log("Entrei no controler");

        } else if(idEmpresa == undefined) {

            res.status(400).send("idEmpresa está undefined!");
        } else {
            empresaModel.procurarFuncionario(idEmpresa, nomeBuscado)
            .then(
                function (funcionarios) {
                    res.json(funcionarios);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            )
        }
    }

    function editarInformacoes(req, res) {
        var idEmpresa = req.params.idEmpresa;
        var nomeEmpresa = req.body.nomeEmpresaServer;
        var emailEmpresa = req.body.emailEmpresaServer;
        var cnpjEmpresa = req.body.cnpjEmpresaServer;

        if(idEmpresa == undefined) {
            res.status(400).send("idEmpresa está undefined!");
        } else if(nomeEmpresa == undefined) {
            res.status(400).send("nomeEmpresa está undefined!");
        } else if(emailEmpresa == undefined) {
            res.status(400).send("emailEmpresa está undefined!");
        } else if(cnpjEmpresa == undefined) {
            res.status(400).send("cnpjEmpresa está undefined!");
        } else {
            empresaModel.editarInformacoes(nomeEmpresa, emailEmpresa, cnpjEmpresa, idEmpresa)
            .then(
                function (informacoes) {
                    res.json(informacoes);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }

    function editarCargoFuncionario(req, res) {
        var idFuncionario = req.params.idFuncionario;
        var cargoEditado = req.body.cargoEditadoServer;

        if(idFuncionario == undefined) {
            res.status(400).send("idFuncionario está undefined!");
        } else if(cargoEditado == undefined) {
            res.status(400).send("nomeEditado está undefined!");
        } else {
            empresaModel.editarCargoFuncionario(cargoEditado, idFuncionario)
            .then(function (informacoes) {
                res.json(informacoes);
                console.log(informacoes);
            }).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            )
        }
    }

module.exports = {
    entrar,
    cadastrar,
    cadastrarFuncionario,
    gerenFunc,
    adicionarTarefaFuncionario,
    procurarFuncionario,
    editarInformacoes,
    editarCargoFuncionario,
}