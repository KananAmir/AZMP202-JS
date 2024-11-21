import { products } from "./data.js";
import {
  calcBasketCount,
  calcFavsCount,
  getDataFromLocalStorage,
  setDataToLocalStorage,
  showUserInfo,
} from "./helpers.js";

const favoritesWrapper = document.querySelector(".favorites-page");
const users = getDataFromLocalStorage("users") || [];

const user = users.find((u) => u.isLogged);

function drawCards(arr) {
  favoritesWrapper.innerHTML = "";
  arr.forEach((pId) => {
    const product = products.find((p) => p.id == pId);

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
  
                    <button class="btn btn-outline-danger wishlist" data-id="${product.id}">
                      <i class="fa-solid fa-heart"></i>
                    </button>
                    <a class="btn btn-outline-primary" href="details.html?id=${product.id}">
                      <i class="fa-solid fa-circle-info"></i>
                    </a>
                  </div>
      `;

    cardBody.append(cardTitle, cardText, price, icons);

    card.append(cardImage, cardBody);

    cardWrapper.append(card);
    favoritesWrapper.append(cardWrapper);
  });

  const allBasketBtns = document.querySelectorAll(".basket");
  const allWishlistBtns = document.querySelectorAll(".wishlist");
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

  allWishlistBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pId = this.getAttribute("data-id");
      const idx = user.favorites.findIndex((q) => q == pId);

      user.favorites.splice(idx, 1);

      this.closest(".col-12").remove();
      setDataToLocalStorage("users", users);
      calcFavsCount(user);
      showEmptyMessage();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully removed!",
        showConfirmButton: false,
        timer: 1500,
      });
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

  calcBasketCount(user);
  setDataToLocalStorage("users", users);

  //   console.log(user);
}
window.addEventListener("DOMContentLoaded", function () {
  if (user) {
    showUserInfo(user, users);
    calcBasketCount(user);
    drawCards(user.favorites);
    calcFavsCount(user);
    showEmptyMessage();
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Login olun!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.replace("login.html");
    });
  }
});

function showEmptyMessage() {
  const emptyInfo = document.querySelector(".empty-info");
  if (!user.favorites.length > 0) {
    emptyInfo.classList.add("d-block");
    emptyInfo.classList.remove("d-none");
  } else {
    emptyInfo.classList.add("d-none");
    emptyInfo.classList.remove("d-block");
  }
}
