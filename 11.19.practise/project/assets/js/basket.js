import { products } from "./data.js";
import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";

const tBody = document.querySelector("tbody");
const totalPrice = document.querySelector(".total-price");
const users = getDataFromLocalStorage("users") || [];

const user = users.find((u) => u.isLogged);

function drawTable(basketArr, productsArr) {
  basketArr.forEach((item) => {
    console.log(item);

    const product = productsArr.find((p) => p.id == item.productId);

    const trElem = document.createElement("tr");
    trElem.innerHTML = `
                      <td><img src="${product.imageUrl}" width="100"/></td>
                      <td>${product.title}</td>
                      <td>$ ${product.price}</td>
                      <td>$ ${product.price * item.count}</td>
                      <td><button class="btn btn-outline-success increment" data-id="${
                        product.id
                      }"><i class="fa-solid fa-plus"></i></button></td>
                      <td>${item.count}</td>
                      <td><button class="btn btn-outline-success decrement" data-id="${
                        product.id
                      }"><i class="fa-solid fa-minus"></i></button></td>
                      <td><button class="btn btn-outline-danger delete" data-id="${
                        product.id
                      }"><i class="fa-solid fa-xmark"></i></button></td>
        `;

    tBody.append(trElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete");
  const allIncrementBtns = document.querySelectorAll(".increment");
  const allDecrementBtns = document.querySelectorAll(".decrement");
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pId = this.getAttribute("data-id");
      const idx = user.basket.findIndex((q) => q.productId == pId);
      user.basket.splice(idx, 1);

      this.closest("tr").remove();
      setDataToLocalStorage("users", users);
      calculateTotalPrice(products);
    });
  });

  allIncrementBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pId = this.getAttribute("data-id");
      const found = user.basket.find((q) => q.productId == pId);
      if (found) {
        console.log(this.parentElement);

        found.count++;
        this.parentElement.nextElementSibling.textContent = found.count;
        setDataToLocalStorage("users", users);
        calculateTotalPrice(products);
      }
    });
  });
  allDecrementBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pId = this.getAttribute("data-id");
      const found = user.basket.find((q) => q.productId == pId);
      if (found) {
        found.count--;
        this.parentElement.previousElementSibling.textContent = found.count;

        setDataToLocalStorage("users", users);
        calculateTotalPrice(products);
      }
    });
  });
}

drawTable(user.basket, products);

function calculateTotalPrice(productsArr) {
  const total = user.basket.reduce((sum, item) => {
    const product = productsArr.find((p) => p.id == item.productId);
    return sum + item.count * product.price;
  }, 0);

  totalPrice.textContent = total.toFixed(2);
}

calculateTotalPrice(products);
