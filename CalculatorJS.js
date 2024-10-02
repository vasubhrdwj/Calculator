/*Getting Node elements from HTML */

let display = document.querySelector(".display-result");
let equals = document.querySelector(".btn-equal");

let justSolved = false;

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
let opr;
let curr = "";

document.addEventListener("click", (event) => {
  let item = event.target;
  // If any number Clicked
  if (item.classList.contains("digit")) {
    // if(justSolved)
    curr += item.textContent;
    display.textContent = curr;
  }

  // If operator clicked
  if (event.target.classList.contains("op")) {
    let opChosen = item.classList;
    // console.log(curr[curr.length - 1]);
    let lastElem = parseInt(curr[curr.length - 1]);
    // console.log(lastElem);
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
    if (exp[2] == 0) display.textContent = "lmao";
    else res = operate(exp[0], exp[2], exp[1]);
    console.log(typeof res); // number

    curr = res.toString();
    console.log(curr);
    opr = null;
    // justSolved = true;
    display.textContent = res;
  }
});
