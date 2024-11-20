import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";

const registerForm = document.querySelector("form");
const emailInput = document.querySelector("#email");
const userNameInput = document.querySelector("#user-name");
const passwordInput = document.querySelector("#pw");

const users = getDataFromLocalStorage("users") || [];
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const bool = users.some(
    (user) =>
      user.userName === userNameInput.value.trim() ||
      user.email === emailInput.value.trim()
  );

  if (!bool) {
    const user = {
      id: Date.now(),
      userName: userNameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
      isLogged: false,
      isAdmin: false,
      basket: [],
      favorites: [],
    };

    users.push(user);
    setDataToLocalStorage("users", users);

    resetForm();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Uğurla qeydiyyatdan keçdiniz!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.replace("login.html");
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Daxil etdiyiniz email və ya userName artıq istifadə olunub!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

function resetForm() {
  registerForm.reset();
}
