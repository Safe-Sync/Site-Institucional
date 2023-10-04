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
}

function mostrarTarefas() {
    areaGraficos.style.display = 'none';
    areaTarefas.style.display = 'block';
}

// Chama as funções para inicializar o estado
mostrarGraficos();

// Adiciona event listeners
dashboardLink.addEventListener('click', mostrarGraficos);
tarefasLink.addEventListener('click', mostrarTarefas);
