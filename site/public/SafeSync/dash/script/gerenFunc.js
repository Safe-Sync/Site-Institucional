

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
