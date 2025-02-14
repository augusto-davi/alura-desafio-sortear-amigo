let amigos = [];
const inputAmigo = document.querySelector("#amigo");
const amigo = inputAmigo.value;

function adicionarAmigo(){

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
  if(amigos.length == 0){
    alert("Por favor, adicione amigos.");
    limparInput();
    return;
  }


}