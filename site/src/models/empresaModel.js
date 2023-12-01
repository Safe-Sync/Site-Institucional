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

// function cadastrarFuncionario(nome, cargo, cpf, email, telefone, senha, idEmpresa) {
//     var instrucao = `
//         INSERT INTO funcionarios (nomeFuncionario, cargo, cpf, email, telefone, senha, fkEmpresa) VALUES ('${nome}', '${cargo}', '${cpf}', '${email}', '${telefone}', '${senha}', '${idEmpresa}');
//     `;
//     return database.executar(instrucao);
// }
function cadastrarFuncionario(nome, cargo, cpf, email, telefone, senha, idEmpresa, limiteCpu, limiteRam, limiteDisco) {


        // Inserir dados na tabela de funcionários
        var instrucaoFuncionario = `
        INSERT INTO funcionarios (nomeFuncionario, cargo, cpf, email, telefone, senha, fkEmpresa)
        VALUES ('${nome}', '${cargo}', '${cpf}', '${email}', '${telefone}', '${senha}', '${idEmpresa}');
    `;
    
    var instrucaoLimitador = `
        INSERT INTO limitador (maxCpu, maxDisco, maxRam, fkEmpresa)
        SELECT '${limiteCpu}', '${limiteDisco}', '${limiteRam}', '${idEmpresa}';
    `;
    
    database.executar(instrucaoFuncionario)
        .then(() => {
            return database.executar(instrucaoLimitador);
        })
        .then(() => {
            console.log('Inserção concluída.');
        })
        .catch((err) => {
            console.error('Erro durante a inserção:', err);
        });
    
    
}



function gerenFunc(idEmpresa) {
    var instrucao = `
    SELECT f.idFuncionario, f.nomeFuncionario, f.cargo,
    SUM(CASE WHEN t.progresso = 'Não Iniciado' THEN 1 ELSE 0 END) AS tarefasNaoIniciado,
    SUM(CASE WHEN t.progresso = 'Concluído' THEN 1 ELSE 0 END) AS tarefasConcluido,
    SUM(CASE WHEN t.progresso IN ('A Fazer', 'Em Andamento') THEN 1 ELSE 0 END) AS tarefasAFazerEmAndamento
		FROM funcionarios f LEFT JOIN tarefa t ON f.idFuncionario = t.fkFuncionario WHERE fkEmpresa = ${idEmpresa}
			GROUP BY f.idFuncionario, f.nomeFuncionario, f.cargo;
    `;
    return database.executar(instrucao);
}

    function adicionarTarefaFuncionario(taskInput, taskDate, idFuncionario){
        var instrucao = `
        INSERT INTO tarefa (nome_tarefa, data_upload, progresso, fkFuncionario) VALUES ('${taskInput}', '${taskDate}', 'Não iniciado', '${idFuncionario}');
    `;
    return database.executar(instrucao);
    }

    function procurarFuncionario(idEmpresa, nomeBuscado) {
        var instrucao = `
        SELECT f.idFuncionario, f.nomeFuncionario, f.cargo,
    SUM(CASE WHEN t.progresso = 'Não Iniciado' THEN 1 ELSE 0 END) AS tarefasNaoIniciado,
    SUM(CASE WHEN t.progresso = 'Concluído' THEN 1 ELSE 0 END) AS tarefasConcluido,
    SUM(CASE WHEN t.progresso IN ('A Fazer', 'Em Andamento') THEN 1 ELSE 0 END) AS tarefasAFazerEmAndamento
		FROM funcionarios f LEFT JOIN tarefa t ON f.idFuncionario = t.fkFuncionario WHERE fkEmpresa = ${idEmpresa} AND nomeFuncionario like '%${nomeBuscado}%'
			GROUP BY f.idFuncionario, f.nomeFuncionario, f.cargo;`;
        return database.executar(instrucao);
    }

    function editarInformacoes(nomeEmpresa, emailEmpresa, cnpjEmpresa, idEmpresa) {
        var instrucao = `
        UPDATE empresas SET nomeFantasia = '${nomeEmpresa}', email = '${emailEmpresa}', cnpj = '${cnpjEmpresa}' WHERE idEmpresa = ${idEmpresa}
        `;
        return database.executar(instrucao);
    }

    function editarCargoFuncionario(cargoEditado, idFuncionario) {
        var instrucao = `
        UPDATE funcionarios SET cargo = '${cargoEditado}' WHERE idFuncionario = ${idFuncionario}
        `;
        return database.executar(instrucao);
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
};