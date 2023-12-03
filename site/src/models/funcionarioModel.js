var database = require("../database/config")

function entrar(email, senha) {
    var instrucao = `
        SELECT * FROM funcionarios WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucao);
}

function editarInformacoes(nomeFuncionario, emailFuncionario, cargoFuncionario, idFuncionario) {
    var instrucao = `
    UPDATE funcionarios SET nomeFuncionario = '${nomeFuncionario}', email = '${emailFuncionario}', cargo = '${cargoFuncionario}' WHERE idFuncionario = ${idFuncionario}
    `;
    return database.executar(instrucao);
}

function inserirAlertas(qtdAlertasCpu, qtdAlertasRam, qtdAlertasDisco, qtdAlertas, idFuncionario, idEmpresa) {
    var instrucao = `
    INSERT INTO alertas (alertaCpu, alertaRam, alertaDisco, quantidadeAlertas, fkEmpresa, fkFuncionario) VALUES ('${qtdAlertasCpu}', '${qtdAlertasRam}', '${qtdAlertasDisco}', '${qtdAlertas}', '${idEmpresa}', '${idFuncionario}');
    `;
    return database.executar(instrucao);
}

function mostrarAlertas(idFuncionario) {
    console.log(`${idFuncionario} no models mostrarAlertas`);
    var instrucao = `
    SELECT sum(quantidadeAlertas) AS totalAlertas
    FROM alertas
    WHERE fkFuncionario = ${idFuncionario};
    `;
    return database.executar(instrucao);
}
module.exports = {
    entrar,
    editarInformacoes,
    inserirAlertas,
    mostrarAlertas,
};