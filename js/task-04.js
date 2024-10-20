let counterValue = 0;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtor = document.querySelector(
  'button[data-action="increment"]'
);
const valueElement = document.getElementById("value");

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
  console.log("Decrement button was clicked");
});
incrementButtor.addEventListener("click", () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
  console.log("Increment button was clicked");
});
