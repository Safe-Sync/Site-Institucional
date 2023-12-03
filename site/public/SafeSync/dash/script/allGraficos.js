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
        label: 'Uso da Ram',
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

    var chartDisco;
    function dashDisco(discoLivre, discoUsado){

        if(chartDisco){
            chartDisco.destroy();
        }
        
    const ctxDisco = document.getElementById('myChartLineDisco');

    chartDisco =  new Chart(ctxDisco, {
        type: 'doughnut',
        data: {
            labels: ['Livre', 'Usados'],
            datasets: [{
                label: 'Memória',
                data: [discoUsado, discoLivre],
                fill: true,
                backgroundColor: [
                    '#fed0df',
                    '#adbcff'
                ],
                pointRadius: 2,
                tension: 0.4,
            }],
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            var labelIndex = context.dataIndex;
                            if (labelIndex === 0) {
                                return 'Memória Livre: ' + context.parsed + 'GB';
                            } else if (labelIndex === 1) {
                                return 'Memória Usada: ' + context.parsed + 'GB';
                            }
                        }
                    }
                }
            },
        }
    });
    }


    const ctxTarefas = document.getElementById('myChartLineTarefas');

    var labelTarefa = [];
    var dadosTarefa = {
        labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        datasets: [{
            label: 'Tarefas Atribuidas',
            data: [],
            backgroundColor: '#fed0df',
            tension: 0.4,
        }, {
            label: 'Tarefas Entregues',
            data: [],
            backgroundColor: '#adbcff',
            tension: 0.4,
        }],
    }

    var chartTarefa = new Chart(ctxTarefas, {
        type: 'bar',
        data: dadosTarefa,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 9
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
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    beginAtZero: true
                }
            }
        }
    });