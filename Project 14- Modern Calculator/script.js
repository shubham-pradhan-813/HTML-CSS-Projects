let memory = 0;
let history = [];

function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

function calculateResult() {
  const display = document.getElementById('display');
  let expression = display.value;

  // Replace symbols for evaluation
  expression = expression.replace(/√/g, 'Math.sqrt');
  expression = expression.replace(/\^/g, '**');
  expression = expression.replace(/%/g, '/100');
  expression = expression.replace(/sin/g, 'Math.sin');
  expression = expression.replace(/cos/g, 'Math.cos');
  expression = expression.replace(/tan/g, 'Math.tan');

  try {
    const result = eval(expression);
    display.value = result;
    addToHistory(`${expression} = ${result}`);
  } catch (error) {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  history.push(entry);
  const historyElement = document.getElementById('history');
  historyElement.innerHTML = history.join('<br>');
  historyElement.scrollTop = historyElement.scrollHeight; // Auto-scroll to the latest entry
}

// Memory Functions
function memoryAdd() {
  const display = document.getElementById('display');
  memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
  const display = document.getElementById('display');
  memory -= parseFloat(display.value) || 0;
}

function memoryRecall() {
  const display = document.getElementById('display');
  display.value = memory;
}

function memoryClear() {
  memory = 0;
}