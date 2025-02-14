let amigos = [];

function adicionarAmigo(){
  const inputAmigo = document.querySelector("#amigo");
  const amigo = inputAmigo.value;  
  if(!(amigo.match("[a-zA-Z]"))){
    alert("Por favor, insira um nome.");
  }
  else{
    amigos.push(amigo);
  }
  inputAmigo.value = "";
  inputAmigo.focus();
}