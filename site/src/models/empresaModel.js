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

function cadastrarFuncionario(nome, cargo, cpf, email, telefone, senha, idEmpresa) {
    var instrucao = `
        INSERT INTO funcionarios (nomeFuncionario, cargo, cpf, email, telefone, senha, fkEmpresa) VALUES ('${nome}', '${cargo}', '${cpf}', '${email}', '${telefone}', '${senha}', '${idEmpresa}');
    `;
    return database.executar(instrucao);
}

function gerenFunc(idEmpresa) {
    var instrucao = `
    SELECT f.nomeFuncionario, f.cargo,
    SUM(CASE WHEN t.progresso = 'Não Iniciado' THEN 1 ELSE 0 END) AS tarefasNaoIniciado,
    SUM(CASE WHEN t.progresso = 'Concluído' THEN 1 ELSE 0 END) AS tarefasConcluido,
    SUM(CASE WHEN t.progresso IN ('A Fazer', 'Em Andamento') THEN 1 ELSE 0 END) AS tarefasAFazerEmAndamento
		FROM funcionarios f LEFT JOIN tarefa t ON f.idFuncionario = t.fkFuncionario WHERE fkEmpresa = ${idEmpresa}
			GROUP BY f.nomeFuncionario, f.cargo;
    `;
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    cadastrarFuncionario,
    gerenFunc,
};