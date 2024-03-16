const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert("Wypełnij wszystkie pola!");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log("Dane z formularza:", formData);

    emailInput.value = "";
    passwordInput.value = "";
  }
});
