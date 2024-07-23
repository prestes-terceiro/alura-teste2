let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatório();
let tentativa = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!")
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa"
        let mensagem = `Você descobriu o número secreto em ${tentativa} ${palavraTentativa}!`
        exibirTextoNaTela("p", mensagem)
        botaoNovoJogo()
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor")
        } else {
            exibirTextoNaTela("p", "O número secreto é maior")
        }
        tentativa++
        limparCampo()
    }
}

function gerarNumeroAleatório() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    quantidadeElementosLista = listaNumerosSorteados.length;
    if (quantidadeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatório();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function botaoNovoJogo() {
    document.getElementById("reiniciar").removeAttribute("disabled");
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatório();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}




