document.getElementById("botaoEnviar").addEventListener(
  "click", validaFormulario)

function validaFormulario (){
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
 alert("Prontinho! você recebera as novidades por email") 
  } else {
    alert("Preencha os campos corretamente")
  }
}





 
    