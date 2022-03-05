const primeiroNome = document.getElementById('primeiroNome');
const ultimoNome = document.getElementById('ultimoNome');
const email= document.getElementById('email');
const senha= document.getElementById('senha');
const botãoConfirmar = document.getElementById('bt');
const EstadoSeletor = document.querySelectorAll("[required]");

botãoConfirmar.addEventListener('click',function(){
    validarSegundoNome()
    validarPrimeiroNome()
    validarEmail()
    validarSenha()
})
function validarPrimeiroNome(){
if(primeiroNome.value ==''){
  primeiroNome.classList.add('invalido')
}else{
    primeiroNome.classList.remove('invalido')
}
}
function validarSegundoNome(){
    if(ultimoNome.value ==''){
        ultimoNome.classList.add('invalido')
    }else{
        ultimoNome.classList.remove('invalido')
    }

}
function validarEmail(){
    if(( email.value =='')||(email.value.indexOf('@') == -1)||(email.value.indexOf('.com') == -1)){
        email.classList.add('invalido')
    }else{
        email.classList.remove('invalido')
    }
}
function validarSenha(){
    if((senha.value =='')){
        senha.classList.add('invalido')
    }else{
        senha.classList.remove('invalido')
    }

}
