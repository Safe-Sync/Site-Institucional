const medidasModel = require("../models/medidasModel");

function buscarUltimasMedidas(req, res) {
    const limiteLinhas = 7;
    var { idFuncionario, idHardware } = req.params;

    console.log("Recuperando as últimas %d medidas", limiteLinhas);
    console.log("ID do funcionário:", idFuncionario);
    console.log("ID do hardware:", idHardware);

    medidasModel.buscarUltimasMedidas(idFuncionario, idHardware, limiteLinhas)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar as últimas medidas:", erro.message);
            res.status(500).json({ error: erro.message });
        });
}

function buscarMedidasEmTempoReal(req, res) {
    var idHardware = req.params.idHardware;
    console.log("Entrei no controller do medidasTempoReal");

    medidasModel.buscarMedidasEmTempoReal(idHardware)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar medidas em tempo real:", erro.message);
            res.status(500).json({ error: erro.message });
        });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
};
