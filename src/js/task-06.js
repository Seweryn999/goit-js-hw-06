const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", () => {
  const inputValue = inputElement.value.trim();
  const expectedLength = parseInt(inputElement.getAttribute("data-length"));

  if (inputValue.length === expectedLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
