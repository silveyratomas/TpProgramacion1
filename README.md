// Función para verificar si una persona puede votar
function verificarVotacion(edad) {
    if (edad >= 16) {
      return 'Puede votar.';
    } else {
      return 'No puede votar.';
    }
  }
  
  // Función para determinar el género
  function determinarGenero(genero) {
    if (genero.toLowerCase() === 'hombre') {
      return 'Es un hombre.';
    } else if (genero.toLowerCase() === 'mujer') {
      return 'Es una mujer.';
    } else {
      return 'Género no reconocido.';
    }
  }
  
  // Función principal para obtener la edad y el género del usuario
  function main() {
    const edad = parseInt(prompt('Ingresa tu edad:'));
    if (isNaN(edad)) {
      console.log('Por favor, ingresa una edad válida.');
      return;
    }
  
    const genero = prompt('Ingresa tu género (hombre/mujer):');
    if (!genero) {
      console.log('Por favor, ingresa un género válido.');
      return;
    }
  
    const resultadoVotacion = verificarVotacion(edad);
    const resultadoGenero = determinarGenero(genero);
  
    console.log(`Edad: ${edad}`);
    console.log(resultadoVotacion);
    console.log(resultadoGenero);
  }
  
  // Ejecutamos la función principal
  main();
  
