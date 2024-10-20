const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = form.elements;

  if (email.value === "" || password.value === "") {
    alert("Toate câmpurile trebuie completate!");
    return;
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  form.reset();
}
