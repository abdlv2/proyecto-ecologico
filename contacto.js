let usuario = {
    nombre: nombre,
    email: email
};

/* Se convierte el objeto a formato JSON*/

let usuarioJSON = JSON.stringify(usuario);

/* Se guarda en localStorage */

localStorage.setItem("usuario", usuarioJSON);

