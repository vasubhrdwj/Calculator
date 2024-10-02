/*Getting Node elements from HTML */

let display = document.querySelector(".display-result");
let equals = document.querySelector(".btn-equal");
let justSolved = false;
let opr;
let curr = "";

/* Calls operation to perform */

function operate(n1, n2, op) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);
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
  // If any number Clicked
  if (item.classList.contains("digit")) {
    if (justSolved) {
      let lastElem = parseInt(curr[curr.length - 1]);
      if (Number.isInteger(lastElem)) {
        curr = "";
      }
      justSolved = false;
    }
    curr += item.textContent;
    display.textContent = curr;
  }

  // If operator clicked
  if (event.target.classList.contains("op")) {
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

    display.textContent = curr;
  }

  // Equals to Sign Clicked
  if (event.target.className == "btn-equal") {
    exp = curr.split(" ");
    if (check(exp) == false) return;
    if (exp[2] == 0) display.textContent = "lmao";
    else res = operate(exp[0], exp[2], exp[1]);

    curr = res.toString();
    console.log(curr);
    opr = null;
    justSolved = true;
    display.textContent = res;
  }
});

function check(exp) {
  if (!Number.isInteger(parseInt(exp[0]))) return false;
  if (!Number.isInteger(parseInt(exp[2]))) return false;

  return true;
}
