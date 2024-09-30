let btn = document.querySelectorAll(".digit");
let displayRes = document.querySelector(".display-result");
let operator = document.querySelectorAll(".op");

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

let num1 = 18;
let num2 = 6;
let oper = "+";

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

btn.forEach((item) =>
  item.addEventListener("click", () => {
    displayValue += item.textContent;
    console.log("button clicked");
    displayRes.textContent = displayValue;
  })
);

// console.log(`${num1} ${oper} ${num2} = ${operate(num1, num2, oper)}`);
// oper = "-";
// console.log(`${num1} ${oper} ${num2} = ${operate(num1, num2, oper)}`);
// oper = "*";
// console.log(`${num1} ${oper} ${num2} = ${operate(num1, num2, oper)}`);
// oper = "/";
// console.log(`${num1} ${oper} ${num2} = ${operate(num1, num2, oper)}`);
