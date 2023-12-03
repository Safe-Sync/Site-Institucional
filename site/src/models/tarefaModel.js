var database = require("../database/config")

function adicionarTarefa(nomeTarefa, dataTarefa, diaDaSemana, fkFuncionario) {
    var instrucao = `
        INSERT INTO tarefa (nome_tarefa, data_upload, progresso, diaDaSemana, fkFuncionario) VALUES ('${nomeTarefa}', '${dataTarefa}', 'Não iniciado', '${diaDaSemana}', '${fkFuncionario}');
    `;
    return database.executar(instrucao);
}

function pegarTarefa(idFuncionario) {
    var instrucao = `
    SELECT idTarefa, nome_tarefa, data_upload, progresso FROM tarefa WHERE fkFuncionario = ${idFuncionario};
    `;
    return database.executar(instrucao);
}

function atualizarTarefaAFazer(id) {
    var instrucao = `
    UPDATE tarefa SET progresso = 'A Fazer' WHERE idTarefa = ('${id}')
    `;
    return database.executar(instrucao);
}

function atualizarTarefaEmAndamento(id) {
    var instrucao = `
    UPDATE tarefa SET progresso = 'Em Andamento' WHERE idTarefa = ('${id}')
    `;
    return database.executar(instrucao);
}
function atualizarTarefaConcluido(id) {
    var instrucao = `
    UPDATE tarefa SET progresso = 'Concluído' WHERE idTarefa = ('${id}')
    `;
    return database.executar(instrucao);
}

function atualizarNaoIniciado(id) {
    var instrucao = `
    UPDATE tarefa SET progresso = 'Não iniciado' WHERE idTarefa = ('${id}')
    `;
    return database.executar(instrucao);
}

function deletarTarefa(id) {
    console.log("id"+id);
    var instrucao = `
    DELETE FROM tarefa WHERE idTarefa = ('${id}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    adicionarTarefa,
    pegarTarefa,
    atualizarTarefaAFazer,
    atualizarTarefaEmAndamento,
    atualizarTarefaConcluido,
    atualizarNaoIniciado,
    deletarTarefa,
};