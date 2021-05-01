/*Validar formulario*/
function validarFormInsc() {
    validacionClave();
}

/*Validar contraseñas*/
function validacionClave() {
    var clave1 = document.getElementById('txtClave').value;
    var clave2 = document.getElementById('txtClaveConf').value;
    if (clave1 == clave2) {
        return true;
    }
    else {
        alert('Las contraseñas deben ser iguales.');
        return false;
    }
}