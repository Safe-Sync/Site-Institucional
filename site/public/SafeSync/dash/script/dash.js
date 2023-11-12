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

// area do header

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    // Calcula a opacidade com base na posição de rolagem
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 50; // Você pode ajustar o valor 300 conforme necessário

    // Define a opacidade do cabeçalho
    header.style.opacity = opacity >= 0 ? opacity : 0;
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

// area kpis
// Função para gerar um número aleatório entre 0 e 10
function gerarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10
    document.getElementById("alertasMaquinaFunc").textContent = numeroAleatorio; // Atualiza o conteúdo do elemento com o número aleatório

    // Converta o número de alertas para um número inteiro
    numAlertas = parseInt(numeroAleatorio);

    // Aplique as classes de acordo com o número de alertas
    if (numAlertas > 5) {
        document.getElementById("alertasMaquinaFunc").classList.remove("kpiAmarela", "kpiVerde");
        document.getElementById("alertasMaquinaFunc").classList.add("kpiVermelha");
    } else if (numAlertas >= 3 && numAlertas <= 5) {
        document.getElementById("alertasMaquinaFunc").classList.remove("kpiVermelha", "kpiVerde");
        document.getElementById("alertasMaquinaFunc").classList.add("kpiAmarela");
        document.getElementById("alertasMaquinaFunc").style.marginTop = "0";
    } else {
        document.getElementById("alertasMaquinaFunc").classList.remove("kpiVermelha", "kpiAmarela");
        document.getElementById("alertasMaquinaFunc").classList.add("kpiVerde");
    }
}

// Atualiza o número aleatório e as classes a cada 2 segundos (2000 milissegundos)
setInterval(gerarNumeroAleatorio, 4000);

