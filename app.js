//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Seletores
let texto = document.getElementById("amigo");
let listaAmigosFront = document.getElementById("resultado");

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

// Funções Auxiliares
function temNum(txt) {
  return txt.split("").some((x) => !isNaN(x) && x !== " ");
}
