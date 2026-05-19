const calcDisplay = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.calc-button');

function updateDisplay(value) {
  if (value === 0) {
    calcDisplay.value = value;
    return;
  }

  if (calcDisplay.value === '0') {
    calcDisplay.value = value;
  } else {
    calcDisplay.value += value;
  }
}

function clearDisplay() {
  calcDisplay.value = '';
}

function backspace() {
  calcDisplay.value = calcDisplay.value.slice(0, -1);
}

function calculate() {
  const expression = calcDisplay.value;
  if (!expression) {
    return;
  }

  if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
    calcDisplay.value = 'Error';
    return;
  }

  try {
    const result = Function(`"use strict"; return (${expression})`)();
    calcDisplay.value = String(result);
  } catch (error) {
    calcDisplay.value = 'Error';
  }
}

function handleButton(value) {
  switch (value) {
    case 'C':
      clearDisplay();
      break;
    case 'back':
      backspace();
      break;
    case '=':
      calculate();
      break;
    default:
      updateDisplay(value);
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => handleButton(button.dataset.value));
});
