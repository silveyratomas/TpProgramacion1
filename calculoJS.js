// Obtenemos referencias a los elementos HTML con los que vamos a interactuar
const optionsSelect = document.getElementById('options');
const inputContainer = document.getElementById('input-container');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

// Agregamos un event listener al cambio de opción en el select
optionsSelect.addEventListener('change', () => {
  // Limpiamos los campos de entrada previos
  inputContainer.innerHTML = '';
  
  // Obtenemos la opción seleccionada del select
  const selectedOption = optionsSelect.value;

  // Dependiendo de la opción seleccionada, creamos los campos de entrada necesarios
  if (selectedOption === 'circle') {
    inputContainer.innerHTML = `
      <label for="radius">Radio:</label>
      <input type="number" id="radius" step="0.01">
    `;
  } else if (selectedOption === 'rectangle') {
    inputContainer.innerHTML = `
      <label for="base">Base:</label>
      <input type="number" id="base" step="0.01">
      <label for="height">Altura:</label>
      <input type="number" id="height" step="0.01">
    `;
  } else if (selectedOption === 'hexagon') {
    inputContainer.innerHTML = `
      <label for="side">Lado:</label>
      <input type="number" id="side" step="0.01">
    `;
  }

  // Mostramos los campos de entrada y ocultamos los resultados anteriores
  inputContainer.classList.remove('hidden');
  resultDiv.classList.add('hidden');
});

// Agregamos un event listener al botón "Calcular"
calculateBtn.addEventListener('click', () => {
  // Obtenemos la opción seleccionada del select
  const selectedOption = optionsSelect.value;
  let area, perimeter;

  // Dependiendo de la opción seleccionada, calculamos el área y el perímetro
  if (selectedOption === 'circle') {
    const radius = parseFloat(document.getElementById('radius').value);
    area = Math.PI * radius * radius;
    perimeter = 2 * Math.PI * radius;
  } else if (selectedOption === 'rectangle') {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    area = base * height;
    perimeter = 2 * (base + height);
  } else if (selectedOption === 'hexagon') {
    const side = parseFloat(document.getElementById('side').value);
    area = (3 * Math.sqrt(3) * side * side) / 2;
    perimeter = 6 * side;
  }

  // Mostramos los resultados y ocultamos los campos de entrada
  resultDiv.innerHTML = `
    <p>Área: ${area.toFixed(2)}</p>
    <p>Perímetro: ${perimeter.toFixed(2)}</p>
  `;

  resultDiv.classList.remove('hidden');
});
