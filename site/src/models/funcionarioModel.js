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

module.exports = {
    entrar,
    editarInformacoes,
};