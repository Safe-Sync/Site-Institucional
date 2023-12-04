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

function tarefasPendentesMes(idEmpresa) {
    var instrucao = `
    SELECT COUNT(t.idTarefa) AS totalTarefasPendentes FROM empresas e
	JOIN funcionarios f ON e.idEmpresa = f.fkEmpresa
		JOIN tarefa t ON f.idFuncionario = t.fkFuncionario
			WHERE e.idEmpresa = ${idEmpresa} AND t.progresso != 'Concluído'
				AND MONTH(t.data_upload) = MONTH(CURRENT_DATE())
					AND YEAR(t.data_upload) = YEAR(CURRENT_DATE());
    `;
    return database.executar(instrucao);
}

function limiteMaquinas(idEmpresa) {

    var instrucao = `
    select COUNT(alertaCpu) as alertasCpu, COUNT(alertaRam) as alertasRam, COUNT(alertaDisco) as alertasDisco from alertas where fkEmpresa = ${idEmpresa};
    `
    return database.executar(instrucao);
}


function limiteMaquinasQtd(idEmpresa) {
    var instrucao = `
    SELECT COUNT(DISTINCT alertas.fkFuncionario) as quantidadeMaquinas
    FROM alertas
    LEFT JOIN limitador ON alertas.fkEmpresa = limitador.fkEmpresa
    WHERE alertas.fkEmpresa = ${idEmpresa};
    
    `;
    return database.executar(instrucao);
}

function qtdMaquinas(idEmpresa) {

    var instrucao = `
    SELECT COUNT(idHardware) AS quantidade_hardwares
FROM hardwares where fkEmpresa = ${idEmpresa};
    `
    return database.executar(instrucao);
}


module.exports = {
    listarFuncionarios,
    funcionariosAtivos,
    tarefasEntreguesMes,
    tarefasPendentesMes,
    limiteMaquinas,
    qtdMaquinas,
    limiteMaquinasQtd,
};