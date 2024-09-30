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

let a = 18;
let b = 6;
console.log(`Sum of ${a} and ${b} is ${Add(a, b)}`);
console.log(`Difference of ${a} and ${b} is ${Subtract(a, b)}`);
console.log(`Multiplication of ${a} and ${b} is ${Multiply(a, b)}`);
console.log(`Division of ${a} and ${b} is ${Divide(a, b)}`);
