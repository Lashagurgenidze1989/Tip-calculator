const billInput = document.querySelector("#bill");
const buttonInput = Array.from(document.querySelectorAll(".percent"));
const customInput = document.querySelector("#custominput");
const peopleInput = document.querySelector("#people");
const tipResult = document.querySelector("#tip-result");
const totalResult = document.querySelector("#total-result");
const resetButton = document.querySelector("#reset");

let billValue = 0;
let percentValue = 0;
let peopleValue = 0;

let tipAmount = 0;
let totalAmount = 0;

billInput.addEventListener("input", (event) => {
  if (billInput) {
    billValue = parseInt(event.target.value);
  } else {
    billValue = 0;
  }
  calculator();
});

buttonInput.map((element) => {
  element.addEventListener("click", (event) => {
    percentValue = parseFloat(event.target.innerText);
    calculator();
    buttonInput.forEach((btn) => {
      btn.classList.remove("clicked");
    });
    element.classList.add("clicked");
  });
});

customInput.addEventListener("input", (event) => {
  percentValue = parseInt(event.target.value);
  calculator();
});

peopleInput.addEventListener("input", (event) => {
  peopleValue = parseInt(event.target.value);
  calculator();
});

resetButton.addEventListener("click", () => {
  billInput.value = "";
  customInput.value = "";
  peopleInput.value = "";
  tipResult.innerText = "$0.00";
  totalResult.innerText = "$0.00";
  buttonInput.classList.remove("clicked");
});

function calculator() {
  if (peopleValue && percentValue) {
    tipAmount = (billValue * percentValue) / 100 / peopleValue;
    totalAmount = billValue / peopleValue + tipAmount;

    tipResult.innerText = `$${tipAmount.toFixed(2)}`;
    totalResult.innerText = `$${totalAmount.toFixed(2)}`;
  } else {
    tipResult.innerText = "$0.00";
    totalResult.innerText = "$0.00";
  }

  /*  console.log(tipAmount);
  console.log(totalAmount); */
}
