let opcoesPlayer = document.querySelectorAll("#opcoes-player img");
let opcoesComputador = document.querySelectorAll("#opcoes-computador img");
let escolhaPlayer = "";
let escolhaComputador = "";

function resetarOpacidade() {
    opcoesPlayer.forEach(function(opcao) {
        opcao.style.opacity = 0.3;
    });
    opcoesComputador.forEach(function(opcao) {
        opcao.style.opacity = 0.3;
    });
}

function computadorJogar() {
    let rand = Math.floor(Math.random() * 3);
    
    opcoesComputador.forEach(function(opcao, index) {
        if (index == rand) {
            opcao.style.opacity = 1;
            escolhaComputador = opcao.getAttribute("option");
        }
    });
}

function validarVitoria() {
    let resultado = document.querySelector(".cabecario__resultado");

    if (escolhaPlayer == "pedra") {
        if (escolhaComputador == "pedra") {
            resultado.innerHTML = "Empate!"
        } else if (escolhaComputador == "papel") {
            resultado.innerHTML = "Você Perdeu!"
        } else if (escolhaComputador == "tesoura") {
            resultado.innerHTML = "Você Ganhou!"
        }
    } else if (escolhaPlayer == "papel") {
        if (escolhaComputador == "pedra") {
            resultado.innerHTML = "Você Ganhou!"
        } else if (escolhaComputador == "papel") {
            resultado.innerHTML = "Empate!"
        } else if (escolhaComputador == "tesoura") {
            resultado.innerHTML = "Você Perdeu!"
        }

    } else if (escolhaPlayer == "tesoura") {
        if (escolhaComputador == "pedra") {
            resultado.innerHTML = "Você Perdeu!"
        } else if (escolhaComputador == "papel") {
            resultado.innerHTML = "Você Ganhou!"
        } else if (escolhaComputador == "tesoura") {
            resultado.innerHTML = "Empate!"
        }
    }
}

opcoesPlayer.forEach(function(opcao) {
    opcao.addEventListener("click", function(t) {
        resetarOpacidade();
        t.target.style.opacity = 1;
        escolhaPlayer = t.target.getAttribute("option");
        computadorJogar();
        validarVitoria()
    });
});
