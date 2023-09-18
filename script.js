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
