

let nombre = prompt("Por favor, ingrese su nombre:");

while (!isNaN(nombre) || nombre === null) {
  nombre = prompt("Nombre no válido. Por favor, ingrese un nombre válido:");
}

alert("Hola, " + nombre + "! ¡BIENVENIDO/A A LA PÁGINA!");
