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

console.log(`${num1} ${oper} ${num2} = ${Add(num1, num2)}`);
oper = "-";
console.log(`${num1} ${oper} ${num2} = ${Subtract(num1, num2)}`);
oper = "*";
console.log(`${num1} ${oper} ${num2} = ${Multiply(num1, num2)}`);
oper = "/";
console.log(`${num1} ${oper} ${num2} = ${Divide(num1, num2)}`);
