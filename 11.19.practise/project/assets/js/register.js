import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";

const registerForm = document.querySelector("form");
const emailInput = document.querySelector("#email");
const userNameInput = document.querySelector("#user-name");
const passwordInput = document.querySelector("#pw");

const users = getDataFromLocalStorage("users") || [];
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = {
    id: Date.now(),
    userName: userNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
    isLogged: false,
  };

  users.push(user);
  setDataToLocalStorage("users", users);
  window.location.replace("login.html");
  resetForm();
});

function resetForm() {
  registerForm.reset();
}
