const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const counterValue = document.getElementById("value");

let counter = 0;

decrementBtn.addEventListener("click", () => {
  counter -= 1;
  updateCounter();
});

incrementBtn.addEventListener("click", () => {
  counter += 1;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = counter;
}
