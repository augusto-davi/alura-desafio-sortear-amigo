let amigos = [];
const inputAmigo = document.querySelector("#amigo");

function adicionarAmigo(){
  const amigo = inputAmigo.value;

  if(!(amigo.match("[a-zA-Z]"))){
    alert("Por favor, insira um nome.");
    limparInput();
    return;
  }

  amigos.push(amigo);
  atualizarLista();
  limparInput();
}

function limparInput(){
  inputAmigo.value = "";
  inputAmigo.focus();
}

function atualizarLista(){
  const listaAmigos = document.querySelector("#listaAmigos");
  const novoAmigo = amigos[amigos.length - 1];
  const li = document.createElement("li");
  li.innerHTML = `<li>${novoAmigo}</li>`;
  listaAmigos.appendChild(li);
}

function sortearAmigo(){
  const qtdAmigos = amigos.length;
  const listaAmigos = document.querySelector("#listaAmigos");
  const resultado = document.querySelector("#resultado");

  if(qtdAmigos == 0){
    alert("Por favor, adicione amigos.");
    limparInput();
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * qtdAmigos);
  listaAmigos.innerHTML = "";
  resultado.innerHTML = amigos[indiceAleatorio];
  amigos = [];
}