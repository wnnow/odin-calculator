const resetBtn = document.querySelector("#reset-btn");

const ceBtn = document.querySelector("#back-btn");
const displayValueContainer = document.querySelector(
  ".display-value-container"
);
let firstNumber;
let operator;
let secondNumber;
let displayValue;

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

function subtract(...args) {
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
    displayValue = displayValueContainer.lastElementChild.textContent +=
      e.target.textContent;
  })
);

const operators = document.querySelectorAll(".operator");
operators.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (isNaN(+displayValue.slice(displayValue.length - 1))) {
      deleteLastCha();
    }
    firstNumber = displayValue;
    operator =
      e.target.textContent === "+"
        ? add
        : e.target.textContent === "-"
        ? subtract
        : e.target.textContent === "×"
        ? multiply
        : divide;
    displayValue = displayValueContainer.lastElementChild.textContent +=
      e.target.textContent;
  })
);

function checkOperator(str) {
  let operator =
    e.target.textContent === "+"
      ? add
      : e.target.textContent === "-"
      ? subtract
      : e.target.textContent === "×"
      ? multiply
      : divide;
}

function clearDisplay() {
  displayValueContainer.lastElementChild.textContent = "";
}

function deleteLastCha() {
  displayValueContainer.lastElementChild.textContent =
    displayValueContainer.lastElementChild.textContent.slice(
      0,
      displayValueContainer.lastElementChild.textContent.length - 1
    );
}
resetBtn.addEventListener("click", clearDisplay);
ceBtn.addEventListener("click", deleteLastCha);
