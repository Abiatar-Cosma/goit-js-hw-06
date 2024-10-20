const inputField = document.getElementById("validation-input");

inputField.addEventListener("blur", () => {
  const requiredLength = Number(inputField.getAttribute("data-length"));
  if (inputField.value.length === requiredLength) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  } else {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  }
});
