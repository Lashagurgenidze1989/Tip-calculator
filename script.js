const billInput = document.querySelector("#bill");
const buttonInput = Array.from(document.querySelectorAll(".percent"));
const customInput = document.querySelector("#custominput");
const peopleInput = document.querySelector("#people");
const tipResult = document.querySelector("#tip-result");
const totalResult = document.querySelector("#total-result");
const resetButton = document.querySelector("#reset");
const error = document.querySelector(".peopleZero span");
const billError = document.querySelector(".billZero span");

let billValue = 0;
let percentValue = 0;
let peopleValue = 0;

let tipAmount = 0;
let totalAmount = 0;

billInput.addEventListener("input", (event) => {
  billValue = parseInt(event.target.value);

  if (event.target.value <= 0) {
    billError.style.display = "block";
    billInput.style.outlineColor = "#E17457";
  } else {
    billError.style.display = "none";
    billInput.style.outlineColor = "#26C2AE";
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

  buttonInput.forEach((btn) => {
    btn.classList.remove("clicked");
  });
});

peopleInput.addEventListener("input", (event) => {
  peopleValue = parseInt(event.target.value);

  calculator();

  if (event.target.value <= 0) {
    error.style.display = "block";
    peopleInput.style.outlineColor = "#E17457";
  } else {
    error.style.display = "none";
    peopleInput.style.outlineColor = "#26C2AE";
  }
});

resetButton.addEventListener("click", () => {
  billInput.value = "";
  customInput.value = "";
  peopleInput.value = "";
  tipResult.innerText = "$0.00";
  totalResult.innerText = "$0.00";
  error.style.display = "none";
  billError.style.display = "none";

  buttonInput.forEach((btn) => {
    btn.classList.remove("clicked");
  });
});

function calculator() {
  if (!billValue || !peopleValue || !percentValue) {
    tipResult.textContent = "$0.00";
    totalResult.textContent = "$0.00";
  } else {
    tipAmount = (billValue * percentValue) / 100 / peopleValue;
    totalAmount = billValue / peopleValue + tipAmount;

    tipResult.textContent = `$${tipAmount.toFixed(2)}`;
    totalResult.textContent = `$${totalAmount.toFixed(2)}`;
  }
}
