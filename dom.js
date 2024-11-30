// Variables para manejar el estado del formulario
let responses = [];
let currentStep = 1;

// Manejo del envío del formulario
function handleSubmit(event) {
  event.preventDefault(); // Evitar recarga de la página

  // Obtener el input actual
  const input = document.getElementById(`step${currentStep}-input`);
  const value = parseInt(input.value);

  if (isNaN(value)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  // Guardar la respuesta
  responses[currentStep - 1] = value;

  // Si estamos en la última pregunta, mostrar el resultado
  if (currentStep === 4) {
    showResult(value);
    return;
  }

  // Pasar al siguiente paso
  document.getElementById(`step${currentStep}`).classList.remove('active');
  input.disabled = true; // Deshabilitar el campo actual
  currentStep++;
  const nextInput = document.getElementById(`step${currentStep}-input`);
  nextInput.disabled = false; // Habilitar el siguiente campo
  document.getElementById(`step${currentStep}`).classList.add('active');
  nextInput.focus(); // Poner foco en el siguiente campo
}

// Mostrar el resultado final
function showResult(finalValue) {
  const finalAge = Math.floor(finalValue / 10); // Eliminar la última cifra
  document.getElementById("questions").style.display = "none"; // Ocultar preguntas
  document.getElementById("result").style.display = "block"; // Mostrar resultado
  document.getElementById("final-age").textContent = finalAge; // Mostrar la edad
}