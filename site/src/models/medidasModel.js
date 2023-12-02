const database = require("../database/config");
// const moment = require('moment-timezone');

function buscarUltimasMedidas(idFuncionario, idHardware, limiteLinhas) {
    const instrucaoSql = `
        SELECT v.*, h.*
        FROM hardwares h
        LEFT JOIN volateis v ON h.idHardware = v.fkHardware
        WHERE h.fkFuncionario = ${idFuncionario} AND (
            v.idVolateis IS NULL OR
            (v.fkHardware, v.dataHora) = (
                SELECT v1.fkHardware, MAX(v1.dataHora) AS ultima_data
                FROM volateis v1
                WHERE v1.fkHardware = ${idHardware}
                GROUP BY v1.fkHardware
            )
        )
        LIMIT ${limiteLinhas};
    `;

    console.log("Executando a instrução SQL:\n", instrucaoSql);

    return database.executar(instrucaoSql);

}

// mudar nome para medidasCPU
function graficoCPU(idHardware, limiteLinhas) {
    console.log("id do hardware dentro do models tempo-real: " + idHardware);
    const instrucao = `
    select 
        consumoCpu,
        DATE_FORMAT(dataHora,'%H:%i:%s') as ultima_data
        from volateis where fkHardware = ${idHardware} order by dataHora desc LIMIT ${limiteLinhas};
    `;
    return database.executar(instrucao);
}

function graficoRAM(idHardware, limiteLinhas) {
    console.log("id do hardware dentro do models tempo-real: " + idHardware);
    const instrucao = `
    SELECT 
        consumoRam,
        DATE_FORMAT(dataHora, '%H:%i:%s') AS ultima_data,
        totalRam AS totalRam
    FROM 
        volateis 
        INNER JOIN hardwares  ON fkHardware = ${idHardware}
    WHERE 
        fkHardware = ${idHardware}
    ORDER BY 
        dataHora DESC
    LIMIT ${limiteLinhas};
    `;
    return database.executar(instrucao);
}

function graficoDISCO(idHardware) {
    const instrucao = `
    SELECT 
    totalDisco AS totalDisco,
    consumoDisco AS consumoDisco,
    fkEmpresa
    FROM 
    hardwares 
    INNER JOIN volateis v ON idHardware = ${idHardware};
    `;
    return database.executar(instrucao);
}

function graficoTAREFA(idFuncionario) {
    const instrucao = `
    SELECT
    diaDaSemana,
    SUM(CASE WHEN progresso = 'Concluído' THEN 1 ELSE 0 END) as tarefas_concluidas,
    SUM(CASE WHEN progresso <> 'Concluído' THEN 1 ELSE 0 END) as tarefas_nao_concluidas
    FROM tarefa
    WHERE fkFuncionario = ${idFuncionario}
    GROUP BY diaDaSemana;
    `;
    return database.executar(instrucao);
}


function alertas(idEmpresa, idFuncionario) {
    const instrucao = `
    SELECT
        idLimitador,
        maxCpu,
        maxDisco,
        maxRam,
        fkEmpresa
    FROM
        limitador where fkEmpresa = ${idEmpresa} and idLimitador = ${idFuncionario};
    `;
    return database.executar(instrucao);
}

function dadosEmpresa(idFuncionario) {
    const instrucao = `
    SELECT empresas.idEmpresa, empresas.nomeFantasia
        FROM empresas
        JOIN funcionarios ON empresas.idEmpresa = funcionarios.fkEmpresa
        WHERE funcionarios.idFuncionario = ${idFuncionario};
    `;
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidas,
    graficoCPU,
    graficoRAM,
    graficoDISCO,
    graficoTAREFA,
    alertas,
    dadosEmpresa,
};
