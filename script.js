let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, operator, secondNumber) {
  return operator(firstNumber, secondNumber);
}

function add(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

function minus(...args) {
  let sum = args[0];
  for (let i = 1; i < args.length; i++) {
    sum -= args[i];
  }
  return sum;
}

function multiply(...args) {
  let sum = 1;
  for (let arg of args) {
    sum *= arg;
  }
  return sum;
}

function divide(...args) {
  let sum = args[0];
  for (let arg of args.slice(1)) {
    sum /= arg;
  }
  return sum;
}

const numberBtns = document.querySelectorAll(".number");
numberBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e.target.textContent);
  })
);

// press button input number to store in first var until press other mathematic button
// number go above
// press mathematic button show mathematic
