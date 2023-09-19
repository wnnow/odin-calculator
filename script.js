const resetBtn = document.querySelector("#reset-btn");
const ceBtn = document.querySelector("#back-btn");
const displayValueContainer = document.querySelector(
  ".display-value-container"
);
const displayValueLastChild = displayValueContainer.lastElementChild;
const numberBtns = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const resultBtn = document.querySelector("#result-btn");
const upperDisplayLine = document.querySelector("#upper-line");
let operatorStr = "";
let firstNumber;
let operator;
let secondNumber;
let displayValue;
let arrOperators = ["+", "-", "÷", "×"];

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

function checkOperator(e) {
  switch (e.target.textContent) {
    case "+":
      operator = add;
      break;
    case "-":
      operator = subtract;
      break;
    case "×":
      operator = multiply;
      break;
    case "÷":
      operator = divide;
      break;
  }

  return operator;
}

function clearDisplay() {
  displayValueLastChild.textContent = "";
  upperDisplayLine.textContent = "";
}

function deleteLastCha() {
  displayValueLastChild.textContent = displayValueLastChild.textContent.slice(
    0,
    displayValueLastChild.textContent.length - 1
  );
}

function removeOperators() {
  for (let arg of arrOperators) {
    if (displayValueLastChild.textContent === arg) {
      displayValueLastChild.textContent = "";
    }
  }
}

function updateUpperDisplayValue() {
  upperDisplayLine.textContent = `${firstNumber} ${operatorStr} ${secondNumber}`;
}

resetBtn.addEventListener("click", clearDisplay);
ceBtn.addEventListener("click", deleteLastCha);

numberBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    removeOperators();
    displayValue = displayValueLastChild.textContent += e.target.textContent;
  })
);

operators.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    firstNumber = Number(displayValueLastChild.textContent);
    checkOperator(e);
    displayValue = displayValueLastChild.textContent = e.target.textContent;
    operatorStr = e.target.textContent;
  })
);
resultBtn.addEventListener("click", (e) => {
  secondNumber = Number(displayValueLastChild.textContent);
  displayValueLastChild.textContent = operate(
    firstNumber,

    operator,

    secondNumber
  );
  updateUpperDisplayValue();
  firstNumber = displayValueLastChild.textContent;
});
