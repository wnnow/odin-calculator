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
let result;
let resultStage = false;
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
  return arrOperators.includes(e);
}

function assignOperator(e) {
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
  firstNumber = "";
  operator = "";
  secondNumber = "";
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
  upperDisplayLine.textContent = `${firstNumber} ${operatorStr} ${secondNumber} = `;
}

resetBtn.addEventListener("click", clearDisplay);
ceBtn.addEventListener("click", deleteLastCha);

numberBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (
      displayValueLastChild.textContent.split("").includes(".") &&
      e.target.textContent === "."
    ) {
      return;
    } else {
      removeOperators();
      displayValueLastChild.textContent += e.target.textContent;
    }
  })
);

operators.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (operator && resultStage === false) {
      secondNumber = Number(displayValueLastChild.textContent);
      result = operate(Number(firstNumber), operator, Number(secondNumber));
      updateUpperDisplayValue();
      assignOperator(e);
      firstNumber = result;
    } else {
      firstNumber = Number(displayValueLastChild.textContent);
      assignOperator(e);
    }
    displayValueLastChild.textContent = e.target.textContent;
    operatorStr = e.target.textContent;
    resultStage = false;
  })
);
resultBtn.addEventListener("click", (e) => {
  if (checkOperator(displayValueLastChild.textContent)) {
    return;
  } else {
    secondNumber = Number(displayValueLastChild.textContent);
    displayValueLastChild.textContent = operate(
      firstNumber,

      operator,

      secondNumber
    );
    updateUpperDisplayValue();
    firstNumber = displayValueLastChild.textContent;
    secondNumber = "";
    resultStage = true;
  }
});
