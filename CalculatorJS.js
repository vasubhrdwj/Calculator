let digitBtn = document.querySelectorAll(".digit");
let displayRes = document.querySelector(".display-result");
let operator = document.querySelectorAll(".op");
let equals = document.querySelector(".btn-equal");
let num1, num2;
let oper;
let res;

function Add(a, b) {
  return a + b;
}

function Subtract(a, b) {
  return a - b;
}

function Multiply(a, b) {
  return a * b;
}

function Divide(a, b) {
  return a / b;
}

function operate(n1, n2, op) {
  if (op === "+") {
    return Add(n1, n2);
  }
  if (op === "-") {
    return Subtract(n1, n2);
  }
  if (op === "*") {
    return Multiply(n1, n2);
  }
  if (op === "/") {
    return Divide(n1, n2);
  }
}

let displayValue = "";
let number = "";

digitBtn.forEach((item) =>
  item.addEventListener("click", () => {
    displayValue += item.textContent;
    number += item.textContent;
    displayRes.textContent = displayValue;
  })
);

operator.forEach((optr) =>
  optr.addEventListener("click", () => {
    switch (optr.className) {
      case "op btn-subtract":
        oper = "-";
        break;
      case "op btn-add":
        oper = "+";
        break;
      case "op btn-multiply":
        oper = "*";
        break;
      case "op btn-divide":
        oper = "/";
        break;
      default:
        console.log("Nothing");
        break;
    }
    num1 = parseInt(number);
    displayValue += optr.textContent;
    displayRes.textContent = displayValue;
    number = "";
  })
);

equals.addEventListener("click", () => {
  num2 = parseInt(number);
  displayValue = "";
  displayRes.textContent = operate(num1, num2, oper);
});

// console.log(`${num1} ${oper} ${num2} = ${operate(num1, num2, oper)}`);
// oper = "-";
// console.log(`${num1} ${oper} ${num2} = ${operate(num1, num2, oper)}`);
// oper = "*";
// console.log(`${num1} ${oper} ${num2} = ${operate(num1, num2, oper)}`);
// oper = "/";
// console.log(`${num1} ${oper} ${num2} = ${operate(num1, num2, oper)}`);
