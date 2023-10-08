var btnExpandir = document.querySelector('.botao_expandir')
// var menuSide = document.querySelector('.abrirFecharMenu')
var menuExpandir = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    // menuSide.classList.toggle('expandir')
    menuExpandir.classList.toggle('expandir')
    
})

// script dos botoes do menu lateral
// Obtém os elementos pelos IDs
const dashboardLink = document.querySelector('#dashboard-link')
const tarefasLink = document.querySelector('#tarefas-link');
const areaGraficos = document.querySelector('#areaGraficos');
const areaTarefas = document.querySelector('#areaTarefas');

function mostrarGraficos() {
    areaGraficos.style.display = 'block';
    areaTarefas.style.display = 'none';
    tarefasLink.classList.remove('ativo');
    dashboardLink.classList.toggle('ativo');
}

function mostrarTarefas() {
    areaGraficos.style.display = 'none';
    areaTarefas.style.display = 'block';
    tarefasLink.classList.toggle('ativo');
    dashboardLink.classList.remove('ativo');
}

// Chama as funções para inicializar o estado
mostrarGraficos();

// Adiciona event listeners
dashboardLink.addEventListener('click', mostrarGraficos);
tarefasLink.addEventListener('click', mostrarTarefas);
document.addEventListener('DOMContentLoaded', mostrarGraficos);


// area modal notificacao

// Referência ao modal e à div de notificação
    document.addEventListener("DOMContentLoaded", function() {
    var modal = document.querySelector(".notificacaoModal");
    var notificacao = document.querySelector("#notificacao");
    var closeBtn = document.querySelector(".closeNotificacao");

    notificacao.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


// area modal usuario

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.querySelector(".usuarioModal");
    var usuario = document.querySelector("#usuario");
    var closeBtn = document.querySelector(".closeUsuario");

    usuario.addEventListener("click", function() {
        modal.style.display = "block";
    });

 

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

