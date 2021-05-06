/*Validar formulario crear usuario*/
function validarFormInsc() {

    var resp = validarNombre();
    if (resp == false) {
        return false;
    }

    var resp = validacionClave();
    if (resp == false) {
        return false;
    }
    return true;
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
/*Validar nombre*/
function validarNombre() {
    var nombre = document.getElementById("txtNombreCompleto").value;
    if (nombre.trim().length==0) {
        alert('El campo de nombre no puede estar vacio.');
        return false;
    }
    return true;
}

/*****************************************/

/*Validar formulario contacto*/
function validarFormContacto() {
    var comentario = document.getElementById('txtComentario').value;

    if (comentario.trim().length==0) {
        alert('El campo de consulta no puede estar vacio.');
        return false;
    }
    return true;
    
}

/*****************************************/

/*Validar formulario ingresar obra*/
function validarFormObra() {

    var resp = validarAutor();
    if (resp == false) {
        return false;
    }

    var resp = validarNomObra();
    if (resp == false) {
        return false;
    }

    var resp = validarDescr();
    if (resp == false) {
        return false;
    }

    var resp = validarHisto();
    if (resp == false) {
        return false;
    }

    return true;
}

/*Validar autor*/
function validarAutor() {
    var autor = document.getElementById("txtNombreAutor").value;
    if (autor.trim().length==0) {
        alert('El campo de nombre de autor no puede estar vacio.');
        return false;
    }
    return true;
}
/*Validar autor*/
function validarNomObra() {
    var autor = document.getElementById("txtNombreObra").value;
    if (autor.trim().length==0) {
        alert('El campo de nombre de obra no puede estar vacio.');
        return false;
    }
    return true;
}
/*Validar descripcion*/
function validarDescr() {
    var descrip = document.getElementById("txtDescripcion").value;
    if (descrip.trim().length==0) {
        alert('El campo de descripcion de la obra no puede estar vacio.');
        return false;
    }
    return true;
}
/*Validar Historia*/
function validarHisto() {
    var historia = document.getElementById("txtHistoria").value;
    if (historia.trim().length==0) {
        alert('El campo de historia de la obra no puede estar vacio.');
        return false;
    }
    return true;
}