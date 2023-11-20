const database = require("../database/config");
const moment = require('moment-timezone');

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

    return database.executar(instrucaoSql)
        .then(results => {
            const dataProcessada = results.map(row => {
                row.dataHoraBrasilia = moment(row.dataHora).tz('America/Sao_Paulo').format();
                return row;
            });
            return dataProcessada;
        })
        .catch(error => {
            throw error;
        });
}

function buscarMedidasEmTempoReal(idHardware) {
    const instrucao = `
        -- Sua instrução SQL para buscar medidas em tempo real aqui
        -- Certifique-se de retornar os dados necessários
    `;
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
};
