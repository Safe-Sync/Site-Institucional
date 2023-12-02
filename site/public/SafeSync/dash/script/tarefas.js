const accordion = document.getElementById('accordion');


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedItem = document.getElementById(data);
    var dropZone = ev.target.closest('.accordion-item');

    if (dropZone) {
        dropZone.querySelector('.accordion-content').appendChild(draggedItem);

        var taskId = draggedItem.id;

        var newProgress = dropZone.id;


        if (newProgress === 'afazer') {
            atualizarAfazer(taskId)

        } else if (newProgress === 'concluido') {
            atualizarConcluido(taskId)

        } else if (newProgress === 'andamento') {


            atualizarEmAndamento(taskId)

        } else if (newProgress == 'tarefas') {

            atualizarNaoIniciado(taskId)
        }
    }
}

accordion.addEventListener('click', function (event) {
    const accordionItem = event.target.closest('.accordion-item');
    if (accordionItem) {
        accordionItem.classList.toggle('active');
    }
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskDate = document.getElementById("taskDate");


    var taskText = taskInput.value.trim(); // trim() retorna o texto sem espaço no inicio e no final do text
    var taskData = taskDate.value.trim();


    if (taskText !== "" && taskData !== "") {
        var dataAtual = new Date();

        var diaDaSemanaNumero = dataAtual.getDay();

        var diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        var diaDaSemanaNome = diasDaSemana[diaDaSemanaNumero];

        console.log('Dia da semana: ' + diaDaSemanaNome);



        var newTask = document.createElement("div");
        newTask.className = "task";
        newTask.id = 1; // 
        idTarefa = newTask.id
        console.log(idTarefa);
        newTask.draggable = true; // deixa o draggable ativado
        newTask.ondragstart = function (ev) { // quando a tarefa é arrastada, executa a função ondragstart
            drag(ev);
        };

        addNewTask(taskText, taskData, diaDaSemanaNome);

        newTask.innerText = taskText + ' / ' + 'Data de Entrega: ' + taskData;

        var tarefasContent = document.getElementById('tarefasContent');
        tarefasContent.appendChild(newTask); // inseri a div(newtask) dentro da tarefaContent
        taskInput.value = "";
        taskData.value = "";
    } else {
        alert("Preencha os dois campos")
    }
}



function pegarTarefa() {
    var idFuncionario = sessionStorage.ID_FUNCIONARIO
    console.log(idFuncionario);
    fetch(`/tarefa/pegarTarefa/${idFuncionario}`).then(function (response) {
        if (response.ok) {
            response.json().then(function (tarefas) {

                mostarTarefas(tarefas)

            });
        } else {
            console.error('Nenhuma tarefa encontrada ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados: ${error.message}`);
        });
}
pegarTarefa()

function mostarTarefas(tarefas) {
    for (i = 0; i < tarefas.length; i++) {
        var nomeDaTarefa = tarefas[i].nome_tarefa;
        var dataDaTarefa = tarefas[i].data_upload;
        var idTask = tarefas[i].idTarefa;
        var progressoAtual = tarefas[i].progresso;
        var newTask = document.createElement("div");
        newTask.className = "task";
        newTask.id = idTask
        newTask.draggable = true;
        newTask.ondragstart = function (ev) {
            drag(ev);
        };
        newTask.innerText = nomeDaTarefa + ' / ' + 'Data de Entrega: ' + dataDaTarefa.substring(0, 10);

        if (progressoAtual == 'A Fazer') {
            var aFazerContent = document.getElementById('afazerContent')
            aFazerContent.appendChild(newTask);
        } else if (progressoAtual == 'Em Andamento') {
            var emAndamentoContent = document.getElementById('andamentoContent')
            emAndamentoContent.appendChild(newTask);
        } else if (progressoAtual == 'Concluído') {
            var concluidoContent = document.getElementById('concluidoContent')
            concluidoContent.appendChild(newTask);
        } else {
            var tarefasContent = document.getElementById('tarefasContent');
            tarefasContent.appendChild(newTask);
        }

    }
}



function addNewTask(nome, data, diaDaSemanaNome) {
    fetch("/tarefa/adicionarTarefa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeTarefaServer: nome,
            dataTarefaServer: data,
            dadosFuncionarioServer: sessionStorage.ID_FUNCIONARIO,
            diaDaSemanaServer: diaDaSemanaNome
        })
    })
}


function atualizarAfazer(id) {
    fetch("/tarefa/atualizarTarefaAFazer", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idTarefaServer: id,
        })
    })
}
function atualizarEmAndamento(id) {
    fetch("/tarefa/atualizarTarefaEmAndamento", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idTarefaServer: id,
        })
    })
}
function atualizarConcluido(id) {
    fetch("/tarefa/atualizarTarefaConcluido", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idTarefaServer: id,
        })
    })
}

function atualizarNaoIniciado(id) {
    fetch("/tarefa/atualizarNaoIniciado", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idTarefaServer: id,
        })
    })
}

