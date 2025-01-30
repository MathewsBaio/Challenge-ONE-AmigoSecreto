//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Seletores
const texto = document.getElementById("amigo");
const listaAmigosFront = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Array
let arrayAmigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
  if (texto.value == "") {
    alert("Por favor, insira um nome");
    return;
  }

  if (temNum(texto.value)) {
    alert("O nome não pode conter números");
    return;
  }

  arrayAmigos.push(texto.value);
  listarAmigos();
  texto.value = "";
}

// Função para exibir amigos
function listarAmigos() {
  listaAmigosFront.innerHTML = "";
  let txt = "";
  for (let i = 0; i < arrayAmigos.length; i++) {
    txt += `<li>${arrayAmigos[i]}</li>`;
  }
  listaAmigosFront.innerHTML = txt;
}

// Função para sortear amigo
function sortearAmigo() {
  if (arrayAmigos.length == 0) {
    alert("Você precisa adicionar amigos antes de realizar o sorteio");
    return;
  }
  resultado.innerHTML = `<li>${arrayAmigos[gerarIndexAleatorio()]}</li>`;
}

// Funções Auxiliares
function temNum(txt) {
  return txt.split("").some((x) => !isNaN(x) && x !== " ");
}

function gerarIndexAleatorio() {
  let index = Math.floor(Math.random() * arrayAmigos.length);
  return index;
}
