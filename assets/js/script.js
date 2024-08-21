

function validaFormulario(){
    var nome = document.getElementById('nome');
    var nascimento = document.getElementById('nascimento');
    var login = document.getElementById('login');
    var senha = document.getElementById('senha');
    var repete_senha = document.getElementById('repete_senha');

    var mensagem = '';
    if(nome.value==''){
        mensagem+='O campo nome é obrigatório!\n';
    }
    if(nascimento.value==''){
        mensagem+='O campo data de nascimento é obrigatório!\n';
    }
    if(login.value==''){
        mensagem+='O campo login é obrigatório!\n';
    }
    if(senha.value==''){
        mensagem+='O campo senha é obrigatório!\n';
    }
    if(senha.value!=repete_senha.value){
        mensagem+='Os campos senha e repete senha devem ser iguais!'
    }

    if(mensagem==''){
        localStorage.setItem('login',login.value);
        localStorage.setItem('senha',senha.value);
        document.getElementById('frm').submit();
    } else {
       // alert(mensagem);
    }
}

function autenticar(){
    var login = document.getElementById('login');
    var senha = document.getElementById('senha');
    if(login.value == localStorage.getItem('login') && senha.value==localStorage.getItem('senha')){
        document.getElementById('frm').submit();
    } else {
        alert('Login ou Senha inválida!');
    }
}

function recuperaLogin(){
    var login = localStorage.getItem('login');
    var espaco_login = document.getElementById('espaco_login');
    espaco_login.innerHTML=login;
}

const fone = (event) => {
    let input = event.target
    input.value = foneMask(input.value)
  }
  
  const foneMask = (value) => {
      if (!value) return ""
      value = value.replace(/\D/g,'')
      value = value.replace(/(\d{2})(\d)/,"($1) $2")
      value = value.replace(/(\d)(\d{4})$/,"$1-$2")
      return value
  }

  document.addEventListener('DOMContentLoaded', function() {
    var passwordField = document.getElementById('senha');

    passwordField.addEventListener('keydown', function(event) {
      var key = event.key;
      var isNumber = /\d/.test(key); // Verifica se a tecla pressionada é um número

      if (isNumber) {
        event.preventDefault(); // Cancela o evento para impedir a entrada do número
    }
});
});

document.addEventListener('DOMContentLoaded', function() {
    var loginField = document.getElementById('login');

    loginField.addEventListener('keydown', function(event) {
      var key = event.key;
      var isNumber = /\d/.test(key); // Verifica se a tecla pressionada é um número

      if (isNumber) {
        event.preventDefault(); // Cancela o evento para impedir a entrada do número
    }
});
});
// Obtém o elemento do campo de login
var loginInput = document.getElementById('login');

// Adiciona um ouvinte de evento para o evento de envio do formulário
document.getElementById('frm').addEventListener('submit', function(event) {
  // Verifica o comprimento do valor do campo de login
  if (loginInput.value.length !== 6) {
    // Impede o envio do formulário
    event.preventDefault();
    
    // Exibe uma mensagem de erro
    alert('O campo de login deve ter exatamente 6 letras.');
  }
});