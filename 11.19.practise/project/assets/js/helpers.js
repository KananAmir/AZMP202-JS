export function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function setDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function calcBasketCount(user) {
  console.log(user);

  const basketCount = document.querySelector(".basket-count");

  let count = user.basket.reduce((sum, item) => sum + item.count, 0);
  basketCount.textContent = count;
}
export function calcFavsCount(user) {
  const favsCount = document.querySelector(".favs-count");

  let count = user.favorites.length;
  favsCount.textContent = count;
}

export function showUserInfo(user, users) {
  const logoutBtn = document.querySelector(".dropdown-menu .logout");
  const loginBtn = document.querySelector(".dropdown-menu .login");
  const registerBtn = document.querySelector(".dropdown-menu .register");
  const userName = document.querySelector(".user-name");

  if (user) {
    userName.textContent = user.userName;

    logoutBtn.classList.replace("d-none", "d-block");
    loginBtn.classList.replace("d-inline", "d-none");
    registerBtn.classList.replace("d-inline", "d-none");
  } else {
    logoutBtn.classList.replace("d-block", "d-none");
    loginBtn.classList.replace("d-none", "d-inline");
    registerBtn.classList.replace("d-none", "d-inline");
    userName.textContent = "User";
  }

  logoutBtn.addEventListener("click", function () {
    user.isLogged = false;
    setDataToLocalStorage("users", users);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logged out",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.replace("login.html");
    });
  });
}
