function validarEnvio() {
    if (validarNombre() == false) {
        nombreInput.classList.add("is-invalid");
            
    }
    if (validarMensaje() == false) {
        emailInput.classList.add("is-invalid");
    }
}

function validarNombre() {
    if (nombreInput.value.length == 0) {
        nombreInput.classList.remove("is-valid");
        nombreInput.classList.add("is-invalid");
        return false;
    } else {
        nombreInput.classList.remove("is-invalid");
        nombreInput.classList.add("is-valid");
        return true;
    }
}

function validarMensaje() {
  if (mensajeInput.value.length>99) {
    alert('Tu mensaje supera el limite de caracteres');
    mensajeInput.classList.add("is-invalid");
    mensajeInput.txt.focus();
  }else {
        mensajeInput.classList.remove("is-invalid");
        mensajeInput.classList.add("is-valid");
        return true;
    }
}
