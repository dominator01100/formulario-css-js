(function () {
    let formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        apellido = formulario.apellido,
        edad = formulario.edad,
        email = formulario.email,
        errores = formulario.getElementsByTagName('p');

    function validarRegex(regex, valor) {
        if (regex.test(valor) == false) {
            return false;
        }
    }

    function validarVacio(campo) {
        if (campo.value == null || campo.value == '') {
            return false;
        }
    }

    function validarNombre(nombre, e) {
        if (validarVacio(nombre) == false) {
            errores[0].innerHTML = 'El campo nombre es requerido.';
            e.preventDefault();
            return;
        }
        regex = /^[A-Za-z]+$/;
        if (validarRegex(regex, nombre.value) == false) {
            errores[0].innerHTML = 'El campo nombre no es valido.';
            e.preventDefault();
        }
    }

    function validarApellido(apellido, e) {
        if (validarVacio(apellido) == false) {
            errores[1].innerHTML = 'El campo apellido es requerido.';
            e.preventDefault();
            return;
        }
        regex = /^[A-Za-z]+$/;
        if (validarRegex(regex, apellido.value) == false) {
            errores[1].innerHTML = 'El campo apellido no es valido.';
            e.preventDefault();
        }
    }

    function validarEdad(edad, e) {
        regex = /^[1-9][0-9]?$|^100$/;
        if (validarRegex(regex, edad.value) == false) {
            errores[2].innerHTML = 'El campo edad no es valido.';
            e.preventDefault();
        }
    }

    function validarEmail(email, e) {
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validarRegex(regex, email.value) == false) {
            errores[3].innerHTML = 'El campo email no es valido.';
            e.preventDefault();
        }
    }

    function validarSexo(e) {
        if (formulario.sexo[0].checked == false && formulario.sexo[1].checked == false && formulario.sexo[2].checked == false) {
            errores[4].innerHTML = 'El sexo es requerido.';
            e.preventDefault();
        }
    }

    function validacion(e) {
        for (let i = 0; i < 5; i++) {
            errores[i].innerHTML = '';
        }
        validarNombre(nombre, e)
        nombre.value = nombre.value.trim();
        validarApellido(apellido, e)
        apellido.value = apellido.value.trim();
        validarEdad(edad, e);
        validarEmail(email, e);
        validarSexo(e);
    }

    formulario.addEventListener('submit', validacion);
})();