const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleInputChange = () => {
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
};

nameInput.addEventListener("input", handleInputChange);
