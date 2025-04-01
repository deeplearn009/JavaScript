let count = 0;

const counter = document.getElementById("counter");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

resetButton.addEventListener("click", function () {
  count = 0;
  counter.textContent = count;
  colorchange();
});

decreaseButton.addEventListener("click", function () {
  count = count - 1;
  counter.textContent = count;
  colorchange();
});

increaseButton.addEventListener("click", function () {
  count = count + 1;
  counter.textContent = count;
  colorchange();
});

function colorchange() {
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "white";
  }
}
