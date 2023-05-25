
const nombre = document.getElementById("name");
const mail = document.getElementById("email");
const tel = document.getElementById("tel");
const hora = document.getElementById("time");
const dia = document.getElementById("date");
const form =document.getElementById("form");


function validarmail(mail){
    var regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var Valido = regexEmail.test(mail);

    if(Valido==false){
            alert("Correo no valido") }
}


//form.addEventListener("submit", e=>{
  //  e.preventDefault()
    //let advertencia =""


  /*  if(nombre.value.length <5){
        alert("Debe ingresar nombre completo")} **/

  //  if(regexEmail.test(mail.vulue)){
    //    alert("El mail ingresado no es valid") }
    //})



