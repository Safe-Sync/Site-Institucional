var database = require("../database/config")

function entrar(email, senha) {
    var instrucao = `
        SELECT * FROM empresas WHERE email = '${email}' AND senhaEmpresa = '${senha}';
    `;
    return database.executar(instrucao);
}

function cadastrar(nomeFantasia, razaoSocial, cnpj, cep, numero, complemento, email, telefone, senha) {
    var instrucao = `
        INSERT INTO empresas (nomeFantasia, razaoSocial, cnpj, cep, numero, complemento, email, telefone, senhaEmpresa) VALUES ('${nomeFantasia}', '${razaoSocial}', '${cnpj}', '${cep}', '${numero}', '${complemento}', '${email}', '${telefone}', '${senha}');
    `;
    return database.executar(instrucao);
}

function cadastrarFuncionario(nome, cargo, cpf, email, telefone, senha) {
    var instrucao = `
        INSERT INTO funcionarios (nomeFuncionario, cargo, cpf, email, telefone, senha, fkEmpresa) VALUES ('${nome}', '${cargo}', '${cpf}', '${email}', '${telefone}', '${senha}', 1);
    `;
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    cadastrarFuncionario,
};