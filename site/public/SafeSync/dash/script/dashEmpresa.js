var btnExpandir = document.querySelector('.botao_expandir')
// var menuSide = document.querySelector('.abrirFecharMenu')
var menuExpandir = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    // menuSide.classList.toggle('expandir')
    menuExpandir.classList.toggle('expandir')
    
})


// area do header

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    // Calcula a opacidade com base na posição de rolagem
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 50; // Você pode ajustar o valor 300 conforme necessário

    // Define a opacidade do cabeçalho
    header.style.opacity = opacity >= 0 ? opacity : 0;
});


// script dos botoes do menu lateral
// Obtém os elementos pelos IDs
const dashLink = document.querySelector('#dash-link');
const areadash = document.querySelector('#areaDash');

const funcionario = document.querySelector('#funcionario')
const areaFuncionarios = document.querySelector('#areaFuncionarios');

const cadFunc = document.querySelector('#cadFunc');
const areaCadFunc = document.querySelector('#areaCadFunc');


function mostrarDash() {
    areaCadFunc.style.display = 'none';
    areaFuncionarios.style.display = 'none';
    areadash.style.display = 'block';
    dashLink.classList.toggle('ativo');
    funcionario.classList.remove('ativo');
    cadFunc.classList.remove('ativo');
    dashLink.classList.toggle('ativo');

}

function mostrarFunc() {
    areaCadFunc.style.display = 'none';
    areaFuncionarios.style.display = 'block';
    areadash.style.display = 'none';
    dashLink.classList.remove('ativo');
    cadFunc.classList.remove('ativo');
}

function mostrarCadFunc() {
   
    areaCadFunc.style.display = 'block';
    areaFuncionarios.style.display = 'none';
    areadash.style.display = 'none';
    dashLink.classList.remove('ativo');
    cadFunc.classList.toggle('ativo');
    funcionario.classList.remove('ativo');

}
// Chama as funções para inicializar o estado
// mostrarFunc();
mostrarDash();

// Adiciona event listeners
dashLink.addEventListener('click', mostrarDash);

funcionario.addEventListener('click', mostrarFunc);
cadFunc.addEventListener('click', mostrarCadFunc);
// document.addEventListener('DOMContentLoaded', mostrarFunc);



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


function toggleModal(btn) {

    const btnAbrirModalFuncionarios = document.querySelectorAll('.btnAbrirModalFuncionario');

    const divFuncionario = btn.closest('.infosFuncionario');
    const iconeEdit = divFuncionario.querySelectorAll('.iconeEditar');
    const labelFuncionario = divFuncionario.querySelectorAll('.labelFuncionario');
    const taskInput = divFuncionario.querySelector('.task-input');
    const estadoMaquinaText = divFuncionario.querySelector('.estadoMaquinaText');
    const usoMaquinaText = divFuncionario.querySelector('.usoMaquinaText');

    divFuncionario.classList.toggle('expandido');
    labelFuncionario.forEach(label => {
        label.classList.toggle('expandido');
    });

    if (divFuncionario.classList.contains('expandido')) {
        btn.textContent = '-';
        iconeEdit.forEach(icone => {
            icone.style.display = 'block';
        });
        taskInput.style.display = 'block';
        // Restante do código...
        if (estadoMaquinaText.textContent === 'Manutenção') {
            estadoMaquinaText.classList.add('vermelho'); // Adiciona classe 'vermelho'
        }
        if (usoMaquinaText.textContent === 'Off') {
            usoMaquinaText.classList.add('vermelho'); // Adiciona classe 'vermelho'
        }
        if (estadoMaquinaText.textContent === 'Normal') {
            estadoMaquinaText.classList.add('verde'); // Adiciona classe 'vermelho'
        }
        if (usoMaquinaText.textContent === 'On') {
            usoMaquinaText.classList.add('verde'); // Adiciona classe 'vermelho'
        }
    } else {
        btnAbrirModalFuncionarios.textContent = '+';
            iconeEdit.forEach(icone => {
                icone.style.display = 'none';
            });
            taskInput.style.display = 'none';
            estadoMaquinaText.classList.remove('vermelho'); // Remove classe 'vermelho'
            usoMaquinaText.classList.remove('vermelho'); // Remove classe 'vermelho'
    }
}
