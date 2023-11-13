var database = require("../database/config")

function tarefasEntregues(idFuncionario) {
    var instrucao = `
    SELECT COUNT(*) AS total_tarefas_entregues
    FROM tarefa
    WHERE progresso = 'Concluído' AND MONTH(data_upload) = MONTH(NOW()) AND fkFuncionario = ${idFuncionario};
    `;
    return database.executar(instrucao);
}
function tarefasPendentes(idFuncionario) {
    var instrucao = `
    SELECT COUNT(*) AS total_tarefas_entregues
    FROM tarefa
    WHERE progresso != 'Concluído' AND MONTH(data_upload) = MONTH(NOW()) AND fkFuncionario = ${idFuncionario};
    `;
    return database.executar(instrucao);
}
module.exports = {
    tarefasEntregues,
    tarefasPendentes,
};