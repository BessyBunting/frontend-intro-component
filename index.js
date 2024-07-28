const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const pw = document.querySelector("#pw");

const firstNameError = document.querySelector(".first-name-error");
const lastNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error");
const pwError = document.querySelector(".pw-error");

const firstNameIcon = document.querySelector(".first-name-icon");
const lastNameIcon = document.querySelector(".last-name-icon");
const emailIcon = document.querySelector(".email-icon");
const pwIcon = document.querySelector(".pw-icon");

function displayError(input, inputError, errorIcon) {
  input.classList.add("error-border");
  inputError.style.display = "block";
  errorIcon.style.display = "block";
  input.setAttribute("placeholder", "");
}

function removeError(input, inputError, errorIcon) {
  input.classList.remove("error-border");
  inputError.style.display = "none";
  errorIcon.style.display = "none";
}

function resetInputs() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  pw.value = "";
}

const form = document.querySelector(".grid-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  if (!firstName.value) {
    displayError(firstName, firstNameError, firstNameIcon);
  } else {
    removeError(firstName, firstNameError, firstNameIcon);
  }
  if (!lastName.value) {
    displayError(lastName, lastNameError, lastNameIcon);
  } else {
    removeError(lastName, lastNameError, lastNameIcon);
  }
  if (!email.value) {
    displayError(email, emailError, emailIcon);
    email.setAttribute("placeholder", "email@example/com");
    email.classList.add("error-placeholder");
  } else {
    removeError(email, emailError, emailIcon);
    email.removeAttribute("placeholder", "email@example/com");
  }
  if (!pw.value) {
    displayError(pw, pwError, pwIcon);
  } else {
    removeError(pw, pwError, pwIcon);
  }
  resetInputs();
});
