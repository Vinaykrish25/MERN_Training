let currentInput = '';
let previousInput = '';
let operator = '';

function pressbutton(value) {
  const inputField = document.getElementById('input');
  const outputField = document.getElementById('output');

  if (value === 'C') {
    currentInput = '';
    previousInput = '';
    operator = '';
    inputField.value = '';
    outputField.innerText = '';
    return;
  }

  if (value === '=') {
    if (previousInput && operator) {
      const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
      outputField.innerText = result;
      currentInput = result;
      previousInput = '';
      operator = '';
    }
    return;
  }

  if (['+', '-', '*', '/'].includes(value)) {
    if (currentInput) {
      if (previousInput && operator) {
        const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
        previousInput = result;
        outputField.innerText = result;
        inputField.value=result;
      } else {
        previousInput = currentInput;
        inputField.value =currentInput+value;
      }
      operator = value;
      currentInput = '';
    }
    return;
  }

  currentInput += value;
  inputField.value =previousInput+operator+currentInput;
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 0;
  }
}
