const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false
};

function updateDisplay() {
  document.querySelector('#displayNumber').innerText = calculator.displayNumber;
};

function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
};

function inputDigit(digit) {
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
};

const buttons = document.querySelectorAll('.button');

for (let button of buttons) {
  button.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains('negative')) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if (target.classList.contains('equals')) {
      performCalculator();
      updateDisplay();
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
};
