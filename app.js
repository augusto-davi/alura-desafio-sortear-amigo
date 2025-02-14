let amigos = [];

function adicionarAmigo(){
  const inputAmigo = document.querySelector("#amigo");
  const amigo = inputAmigo.value;

  if(!(amigo.match("[a-zA-Z]"))){
    alert("Por favor, insira um nome.");
    limparInput(inputAmigo);
    return;
  }

  amigos.push(amigo);
  atualizarLista();
  limparInput(inputAmigo);
}

function limparInput(inputAmigo){
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

}