
const nombre = document.getElementById("name");
const apellido = document.getElementById("lastname");
const mail = document.getElementById("email");
const mensajes = document.getElementById("mensaje");
const form = document.getElementById("form");
const error = document.getElementById("form_error")


 form.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let ok = false
    let errors = ""
    form_error.innerHTML= ""

      if(nombre.value.length <4){
        errors += 'INGRESAR NOMBRE COMPLETO<br>';
        ok = true
      }

      if(apellido.value.length <4){
        errors += 'INGRESAR APELLIDO COMPLETO<br>';
        ok = true
      }
        
      if(!regexEmail.test(mail.value)){
        errors += 'INGRESE UN MAIL VALIDO<br>';
        ok = true
      }

      if(mensajes.value.length <5){
        errors += 'MENSAJE MUY CORTO<br>';
        ok = true
      } 
      
      if(mensajes.value.length >400){
        errors += 'MENSAJE MUY LARGO<br>';
        ok = true
      }

      if(ok){
        form_error.innerHTML = errors
        document.getElementById("form_error").style.display ="block";
        document.getElementById("form_ok").style.display = "none";
      }

      if(!ok){
        document.getElementById("form_error").style.display = "none";
        document.getElementById("form_ok").style.display= "block";
        
      }      

    

    })
 


