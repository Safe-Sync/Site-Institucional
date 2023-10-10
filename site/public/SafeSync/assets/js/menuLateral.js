var btnExpandir = document.querySelector('.botao_expandir')
// var menuSide = document.querySelector('.abrirFecharMenu')
var menuExpandir = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    // menuSide.classList.toggle('expandir')
    menuExpandir.classList.toggle('expandir')
})

const funcionario = document.querySelector('#funcionario')
const cadFunc = document.querySelector('#cadFunc');
const areaFuncionarios = document.querySelector('#areaFuncionarios');
const areaCadFunc = document.querySelector('#areaCadFunc');


function mostrarFunc() {
    areaFuncionarios.style.display = 'block';
    areaCadFunc.style.display = 'none';
    cadFunc.classList.remove('ativo');
    funcionario.classList.toggle('ativo');
}

function mostrarCadFunc() {
    areaFuncionarios.style.display = 'none';
    areaCadFunc.style.display = 'block';
    cadFunc.classList.toggle('ativo');
    funcionario.classList.remove('ativo');
}

// Chama as funções para inicializar o estado
mostrarFunc();

funcionario.addEventListener('click', mostrarFunc);
cadFunc.addEventListener('click', mostrarCadFunc);
document.addEventListener('DOMContentLoaded', mostrarFunc);