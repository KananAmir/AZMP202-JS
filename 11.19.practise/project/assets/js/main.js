import { products } from "./data.js";
import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";

const logoutBtn = document.querySelector(".dropdown-menu .logout");
const loginBtn = document.querySelector(".dropdown-menu .login");
const registerBtn = document.querySelector(".dropdown-menu .register");
const productsWrapper = document.querySelector(".products");
const userName = document.querySelector(".user-name");

const users = getDataFromLocalStorage("users") || [];

const user = users.find((u) => u.isLogged);

// console.log(user);

if (user) {
  userName.textContent = user.userName;
} else {
  userName.textContent = "User";
}
window.addEventListener("DOMContentLoaded", function () {
  if (user) {
    logoutBtn.classList.replace("d-none", "d-block");
    loginBtn.classList.replace("d-inline", "d-none");
    registerBtn.classList.replace("d-inline", "d-none");
  } else {
    logoutBtn.classList.replace("d-block", "d-none");
    loginBtn.classList.replace("d-none", "d-inline");
    registerBtn.classList.replace("d-none", "d-inline");
  }
});

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

function drawCards(arr) {
  productsWrapper.innerHTML = "";
  arr.forEach((product) => {
    const cardWrapper = document.createElement("div");
    const card = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    const price = document.createElement("p");
    const icons = document.createElement("div");

    cardWrapper.className = "col-12 col-md-6 col-lg-3 mb-3";
    cardImage.className = "card-img-top";
    cardBody.className = "card-body";
    cardTitle.className = "card-title";
    cardText.className = "card-text";
    price.className = "price";
    card.className = "card";
    cardImage.setAttribute("src", product.imageUrl);
    cardTitle.textContent = product.title;
    cardText.textContent = `${product.description.slice(0, 50)}...`;

    price.innerHTML = `Price: $<span>${product.price}</span>`;

    icons.innerHTML = `
                <div class="icons">
                  <button class="btn btn-outline-warning basket" data-id="${product.id}">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </button>

                  <button class="btn btn-outline-danger wishlist">
                    <i class="fa-regular fa-heart"></i>
                    <!-- <i class="fa-solid fa-heart"></i> -->
                  </button>
                  <a class="btn btn-outline-primary" href="details.html?id=${product.id}">
                    <i class="fa-solid fa-circle-info"></i>
                  </a>
                </div>
    `;

    cardBody.append(cardTitle, cardText, price, icons);

    card.append(cardImage, cardBody);

    cardWrapper.append(card);
    productsWrapper.append(cardWrapper);
  });

  const allBasketBtns = document.querySelectorAll(".basket");
  allBasketBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pId = this.getAttribute("data-id");
      if (user) {
        addToBasket(pId);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login olun!",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          window.location.replace("login.html");
        });
      }
    });
  });
}

function addToBasket(id) {
  const found = user.basket.find((q) => q.productId == id);
  console.log(found);

  if (!found) {
    user.basket.push({ productId: id, count: 1 });
  } else {
    found.count++;
  }

  calcBasketCount();
  setDataToLocalStorage("users", users);

  //   console.log(user);
}
drawCards(products);

// function calcBasketCount() {
//   const basketCount = document.querySelector(".basket-count");

//   let count = user.basket.length;
//   basketCount.textContent = count;
// }

function calcBasketCount() {
  const basketCount = document.querySelector(".basket-count");

  let count = user.basket.reduce((sum, item) => sum + item.count, 0);
  basketCount.textContent = count;
}

calcBasketCount();
