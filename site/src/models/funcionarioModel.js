var database = require("../database/config")

function entrar(email, senha) {
    var instrucao = `
        SELECT * FROM funcionarios WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucao);
}

module.exports = {
    entrar,
};