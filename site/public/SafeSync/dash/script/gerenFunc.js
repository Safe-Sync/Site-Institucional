
// function gerenFunc() {
//   var idEmpresa = sessionStorage.ID_EMPRESA
//   console.log(idEmpresa);
//   fetch(`/empresa/gerenFunc/${idEmpresa}`).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (funcionarios) {

//         const infoFunc = document.getElementById('infoFunc')

//         for (i = 0; i < funcionarios.length; i++) {
//           var nomeFuncionario = funcionarios[i].nomeFuncionario;
//           var cargoFuncionario = funcionarios[i].cargo;
//           var idFuncionario = funcionarios[i].idFuncionario;
//           var tarefasAtribuidas = funcionarios[i].tarefasNaoIniciado;
//           var tarefasConcluidas = funcionarios[i].tarefasConcluido;
//           var tarefasPendentes = funcionarios[i].tarefasAFazerEmAndamento;

//           var novoFunc = document.createElement('div');

//           novoFunc.className = 'infosFuncionario';
//           novoFunc.id = idFuncionario;

//           novoFunc.innerHTML = `

//             <div class="task-input" style="display: none; id="taskInput-${idFuncionario}">
//                     <input type="text" id="taskInput-${idFuncionario}" placeholder="Digite uma nova tarefa">
//                         <label for="taskDate-${idFuncionario}">Data de Entrega:</label>
//                         <input type="date" id="taskDate-${idFuncionario}">
//                     <button onclick="addTaskFuncionario(${idFuncionario})">Adicionar Tarefa</button>
//                       </div>
//                       <p class="labelFuncionario nomeFuncionario">${nomeFuncionario}</p>
//                       <p class="labelFuncionario cargo">
//                           Cargo: ${cargoFuncionario}
//                           <svg style="display: none" class="iconeEditar" xmlns="http://www.w3.org/2000/svg" width="16"
//                               height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//                               <path
//                                   d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//                               <path fill-rule="evenodd"
//                                   d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
//                           </svg>
//                       </p>
//                       <p class="labelFuncionario tarefasAtribuidas">
//                           Tarefas atribuidas: <span id="tarefasAtribuidas"> ${tarefasAtribuidas} </span>

//                       </p>
//                       <p class="labelFuncionario tarefasCompletas">
//                           <span class="bordaVerde"> Tarefas Completas: <span id="tarefasCompletas"> ${tarefasConcluidas} </span></span>

//                       </p>
//                       <p class="labelFuncionario tarefasAtrasadas">
//                           <span class="bordaVermelha"> Tarefas Pendentes: <span id="tarefasAtrasadas"> ${tarefasPendentes} </span>
//                           </span>

//                       </p>
//                       <p class="labelFuncionario usoMaquina">
//                           Uso: <span class="usoMaquinaText usoMaquina">On</span>
//                       </p>
//                       <p class="btnAbrirModalFuncionario" onclick="toggleModal(this)">-</p>

//             `
//           infoFunc.appendChild(novoFunc);
//         }



//       });
//     } else {
//       console.error('Nenhuma tarefa encontrada ou erro na API');
//     }
//   })
//     .catch(function (error) {
//       console.error(`Erro na obtenção dos dados: ${error.message}`);
//     });
// }
// gerenFunc()

function addTaskFuncionario(idFuncionario) {

  var dataAtual = new Date();

  var diaDaSemanaNumero = dataAtual.getDay();

  var diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  var diaDaSemanaNome = diasDaSemana[diaDaSemanaNumero];


  var taskInput = document.getElementById(`taskInput-${idFuncionario}`);
  var taskDate = document.getElementById(`taskDate-${idFuncionario}`);


  if (taskInput.value != "" && taskDate.value != "") {

    enviarTarefaParaServidor(idFuncionario, taskInput.value, taskDate.value, diaDaSemanaNome);
  } else {
    alert("Preencha os dois campos")
  }

}





function enviarTarefaParaServidor(idFuncionario, taskInput, taskDate, diaDaSemana) {
  console.log(idFuncionario);
  console.log(taskInput);
  console.log(taskDate);
  console.log(diaDaSemana);
  Swal.fire({
    position: 'center',
    icon: 'sucess',
    title: 'Tarefa criada com sucesso!',
    text: '',
    showConfirmButton: true,
    timer: 2000

  });
  fetch(`/empresa/adicionarTarefaFuncionario/${idFuncionario}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      taskInputServer: taskInput,
      taskDateServer: taskDate,
      diaDaSemanaServer: diaDaSemana

    }),
  })
    .then(response => {
      if (response.ok) {


        // swal({
        //   title: "Good job!",
        //   text: "Tarefa criada!",
        //   icon: "success",
        //   button: "Concluir",
        // });setTimeout(function() {
                  setTimeout(function() {
                    location.reload();
                  }, 2000);
        console.log('Tarefa adicionada com sucesso!');
      } else {
        console.error('Erro ao adicionar tarefa');
      }
    })
    .catch(error => {
      console.error(`Erro na requisição: ${error.message}`);
    });
}



// setInterval(gerenFunc, 1000);
