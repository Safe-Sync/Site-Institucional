var database = require("../database/config")

function listarFuncionarios(idEmpresa) {
    var instrucao = `
    SELECT f.nomeFuncionario, COUNT(t.idTarefa) AS totalTarefasConcluidas
	FROM funcionarios f LEFT JOIN tarefa t 
		ON f.idFuncionario = t.fkFuncionario AND t.progresso = 'Concluído' WHERE f.fkEmpresa = ${idEmpresa} 
			GROUP BY f.nomeFuncionario
				ORDER BY totalTarefasConcluidas DESC LIMIT 5;
    `;
    return database.executar(instrucao);
}

function funcionariosAtivos(idEmpresa) {
    var instrucao = `
    SELECT COUNT(idFuncionario) AS quantidade_funcionarios FROM funcionarios WHERE fkEmpresa = ${idEmpresa};
    `;
    return database.executar(instrucao);
}

function tarefasEntreguesMes(idEmpresa) {
    var instrucao = `
    SELECT COUNT(t.idTarefa) AS totalTarefasEntregues FROM empresas e
	JOIN funcionarios f ON e.idEmpresa = f.fkEmpresa
		JOIN tarefa t ON f.idFuncionario = t.fkFuncionario
			WHERE e.idEmpresa = ${idEmpresa} AND t.progresso = 'Concluído'
				AND MONTH(t.data_upload) = MONTH(CURRENT_DATE())
					AND YEAR(t.data_upload) = YEAR(CURRENT_DATE());
    `;
    return database.executar(instrucao);
}

module.exports = {
    listarFuncionarios,
    funcionariosAtivos,
    tarefasEntreguesMes,
};