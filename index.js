// Función para validar entrada de números
function obtenerNumero(mensaje) {
  let input;
  do {
    input = prompt(mensaje);
    if (isNaN(input) || input === null || input.trim() === "") {
      alert("Por favor, ingresa un número válido.");
    }
  } while (isNaN(input) || input === null || input.trim() === "");
  return parseInt(input);
}

// Juego Matemático
alert("¡Bienvenido al juego matemático!");

alert("Piensa en tu edad y sigue las instrucciones.");

// Preguntas con validación
let edadPorDos = obtenerNumero("1. Multiplica tu edad por 2. Escribe el resultado:");
let sumaTres = obtenerNumero("2. Súmale 3 al resultado anterior. Escribe el resultado:");
let multiplicaPorCinco = obtenerNumero("3. Multiplica el resultado anterior por 5. Escribe el resultado:");
let restaSeis = obtenerNumero("4. Réstale 6 al resultado anterior. Escribe el resultado:");

// Convertir la respuesta final a un número
let resultadoFinal = parseInt(restaSeis);

// Quitar la última cifra (el 9)
let edad = Math.floor(resultadoFinal / 10);

// Mostrar la edad del usuario
alert("¡Tu edad es: " + edad + "!");

