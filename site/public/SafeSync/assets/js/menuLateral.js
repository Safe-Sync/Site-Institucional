var btnExpandir = document.querySelector('.botao_expandir')
// var menuSide = document.querySelector('.abrirFecharMenu')
var menuExpandir = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    // menuSide.classList.toggle('expandir')
    menuExpandir.classList.toggle('expandir')
})

const dashboardLink = document.querySelector('#dashboard-link')
const tarefasLink = document.querySelector('#tarefas-link');
const areaGraficos = document.querySelector('#areaGraficos');
const areaTarefas = document.querySelector('#areaTarefas');