// Función para calcular el área y el perímetro de un círculo
function calcularCirculo() {
    const radio = parseFloat(prompt('Ingresa el radio del círculo:'));
    //isNaN intenta convertir el parámetro pasado a un número
    if (isNaN(radio)) {
      console.log('Por favor, ingresa un número válido.');
      return;
    }
  
    const area = Math.PI * radio * radio;
    const perimetro = 2 * Math.PI * radio;
  
    console.log(`Área del círculo: ${area.toFixed(2)}`);
    console.log(`Perímetro del círculo: ${perimetro.toFixed(2)}`);
  }
  
  // Función para calcular el área y el perímetro de un rectángulo
  function calcularRectangulo() {
    const base = parseFloat(prompt('Ingresa la base del rectángulo:'));
    const altura = parseFloat(prompt('Ingresa la altura del rectángulo:'));
  
    if (isNaN(base) || isNaN(altura)) {
      console.log('Por favor, ingresa números válidos para la base y la altura.');
      return;
    }
  
    const area = base * altura;
    const perimetro = 2 * (base + altura);
  
    console.log(`Área del rectángulo: ${area.toFixed(2)}`);
    console.log(`Perímetro del rectángulo: ${perimetro.toFixed(2)}`);
  }
  
  // Función para calcular el área y el perímetro de un hexágono
  function calcularHexagono() {
    const lado = parseFloat(prompt('Ingresa la longitud de un lado del hexágono:'));
    if (isNaN(lado)) {
      console.log('Por favor, ingresa un número válido.');
      return;
    }
  
    const area = (3 * Math.sqrt(3) * lado * lado) / 2;
    const perimetro = 6 * lado;
  
    console.log(`Área del hexágono: ${area.toFixed(2)}`);
    console.log(`Perímetro del hexágono: ${perimetro.toFixed(2)}`);
  }
  
  // Función principal para mostrar opciones y manejar la elección del usuario
  function main() {
    console.log('Calculadora de Figuras Geométricas');
    console.log('1. Calcular el área y el perímetro de un círculo');
    console.log('2. Calcular el área y el perímetro de un rectángulo');
    console.log('3. Calcular el área y el perímetro de un hexágono');
  
    const opcion = parseInt(prompt('Elige una opción (1/2/3):'));
  
    switch (opcion) {
      case 1:
        calcularCirculo();
        break;
      case 2:
        calcularRectangulo();
        break;
      case 3:
        calcularHexagono();
        break;
      default:
        console.log('Opción no válida. Por favor, elige 1, 2 o 3.');
    }
  }
  
  // Ejecutamos la función principal
  main();
  
