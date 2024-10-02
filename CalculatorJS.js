/*Getting Node elements from HTML */

let display = document.querySelector(".display-upper");
let displayRes = document.querySelector(".display-lower");
let equals = document.querySelector(".btn-equal");

/* Variables */

let curr = "";
let justSolved = false;
let opr;
let hasDecimal = false;

/* Calls operation to perform */

function operate(n1, n2, op) {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  let res;
  if (op === "+") {
    res = n1 + n2;
  }
  if (op === "-") {
    res = n1 - n2;
  }
  if (op === "*") {
    res = n1 * n2;
  }
  if (op === "/") {
    res = n1 / n2;
  }

  return Math.round(res * 1e6) / 1e6;
}

/* Events Delegated  */

document.addEventListener("click", (event) => {
  let item = event.target;

  if (item.classList.contains("digit")) {
    addDigits(item);
  }

  if (event.target.classList.contains("op")) {
    operatorFn(item);
  }

  if (item.className == "btn-equal") {
    equalsFn();
  }

  if (item.className == "btn-decimal") {
    if (hasDecimal) return;
    curr += ".";
    display.textContent += ".";
    hasDecimal = true;
  }

  if (item.className == "btn-Reset") {
    resetAll();
  }
});

/* Different Functions */

function check(exp) {
  if (!Number.isInteger(parseInt(exp[0]))) return false;
  if (!Number.isInteger(parseInt(exp[2]))) return false;

  return true;
}

function addDigits(item) {
  // For calcs after equals to or after operations
  if (justSolved) {
    let lastElem = parseInt(curr[curr.length - 1]);
    if (Number.isInteger(lastElem)) {
      curr = "";
      display.textContent = "";
    }
    justSolved = false;
  }

  curr += item.textContent;
  display.textContent += item.textContent;
}

function operatorFn(item) {
  let opChosen = item.classList;

  let lastElem = parseInt(curr[curr.length - 1]);
  if (!Number.isInteger(lastElem)) {
    return;
  }

  if (opr) {
    exp = curr.split(" ");
    curr = operate(exp[0], exp[2], exp[1]);
  }

  if (opChosen.contains("btn-add")) {
    opr = "+";
    curr += " + ";
  } else if (opChosen.contains("btn-subtract")) {
    opr = "-";
    curr += " - ";
  } else if (opChosen.contains("btn-divide")) {
    opr = "/";
    curr += " / ";
  } else {
    opr = "*";
    curr += " * ";
  }
  hasDecimal = false;
  display.textContent += ` ${opr} `;
}

function equalsFn(item) {
  exp = curr.split(" ");
  if (check(exp) == false) return;
  if (exp[2] == 0) {
    res = "LMAO";
    curr = "";
  } else {
    res = operate(exp[0], exp[2], exp[1]);
    curr = curr = res.toString();
  }

  opr = null;
  justSolved = true;
  hasDecimal = false;
  display.textContent = res;
  displayRes.textContent = res;
}

function resetAll() {
  opr = null;
  curr = "";
  justSolved = false;
  hasDecimal = false;
  display.textContent = curr;
  displayRes.textContent = curr;
}
