/*Getting Node elements from HTML */

let display = document.querySelector(".display-result");
let equals = document.querySelector(".btn-equal");

/* Calls operation to perform */

function operate(n1, n2, op) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  if (op === "+") {
    return n1 + n2;
  }
  if (op === "-") {
    return n1 - n2;
  }
  if (op === "*") {
    return n1 * n2;
  }
  if (op === "/") {
    return n1 / n2;
  }
}

/* Events Delegated  */
let num1, num2, opr;
let curr = "";

document.addEventListener("click", (event) => {
  let item = event.target;
  // If any number Clicked
  if (item.classList.contains("digit")) {
    curr += item.textContent;
    display.textContent = curr;
  }

  // If operator clicked
  if (event.target.classList.contains("op")) {
    let opChosen = item.classList;

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
    display.textContent = operate(exp[0], exp[2], exp[1]);
    curr = "";
  }
});

// equals.addEventListener("click", () => {
//   num2 = parseInt(number);
//   number = "";
//   currEval = "";
//   displayRes.textContent = operate(num1, num2, oper);
// });
