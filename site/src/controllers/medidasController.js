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

function graficoCPU(req, res) {
    const limiteLinhas = 1;
    var idHardware = req.params.idHardware;
    console.log("Entrei no controller do medidasTempoReal");
    console.log(idHardware);

    medidasModel.graficoCPU(idHardware, limiteLinhas)
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

function graficoRAM(req, res) {
    const limiteLinhas = 1;
    var idHardware = req.params.idHardware;
    console.log("Entrei no controller do medidasTempoReal");
    console.log(idHardware);

    medidasModel.graficoRAM(idHardware, limiteLinhas)
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
function graficoDISCO(req, res) {
    var idHardware = req.params.idHardware;
    console.log("Entrei no controller do medidasTempoReal");
    console.log(idHardware);

    medidasModel.graficoDISCO(idHardware)
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

function alertas(req, res) {
    var idEmpresa = req.params.idEmpresa;

    medidasModel.alertas(idEmpresa)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar medidas:", erro.message);
            res.status(500).json({ error: erro.message });
        });
}
module.exports = {
    buscarUltimasMedidas,
    graficoCPU,
    graficoRAM,
    graficoDISCO,
    alertas,
};
