const calculator = {
  displayNumber: 0,
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false
};

function updateDisplay() {
  document.querySelector('#displayNumber').innerText = calculator.displayNumber;
};