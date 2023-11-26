const ctxCpu = document.getElementById('myChartLineCpu');
var labels = [];
var dados = {
    labels: labels,
    datasets: [{
        label: 'Uso da Cpu',
        data: [],
        fill: true,
        backgroundColor: '#adbcffa1',
        borderColor: '#adbcff',
        pointRadius: 4,
        tension: 0.4,
    }]
}
var chartCpu = new Chart(ctxCpu, {
    type: 'line',
    data: dados,
    options: {
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 9
                    }
                }
            },
            tooltip: {
                callbacks: {
                    title: function (tooltipItems) {
                        return 'Legenda:';
                    },
                    label: function (context) {
                        return 'Uso da Cpu: ' + context.parsed.y + '%';
                    }
                }
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 9
                    }
                },
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 10
                    },
                    stepSize: 20, 
                    max: 100,
                },
                beginAtZero: true
            }
        }
    }
});

const ctxRam = document.getElementById('myChartLineRam');
var labelsRam = [];
var dadosRam = {
    labels: labelsRam,
    datasets: [{
        label: 'Uso da Cpu',
        data: [],
        fill: true,
        backgroundColor: '#adbcffa1',
        borderColor: '#adbcff',
        pointRadius: 4,
        tension: 0.4,
    }]
}
 var chartRam = new Chart(ctxRam, {
        type: 'line',
        data: dadosRam,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labelsRam: {
                        font: {
                            size: 9
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        title: function (tooltipItems) {
                            return 'Legenda:';
                        },
                        label: function (context) {
                            return 'Uso da Ram: ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 9
                        }
                    },
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 10
                        },
                        stepSize: 20, // Incremento desejado
                        max: 100, // Valor máximo do eixo y
                    },
                    beginAtZero: true
                }
            }
        }
    });