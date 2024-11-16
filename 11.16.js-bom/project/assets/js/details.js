import { products } from "./data.js";

const details = document.querySelector(".details");
const url = new URLSearchParams(window.location.search);

const id = url.get("id");

// console.log(id);

const product = products.find((p) => p.id == id);

// console.log(product);

details.innerHTML = `
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <img src="${product.image}" alt="" />
            </div>
            <div class="col-12 col-md-6">
              <h3 class="title">${product.title}</h3>
              <p class="desc">
                ${product.description}
              </p>
              <p>$ ${product.price}<p/>
              <button class="go-back">Go Back</button>
            </div>
          </div>
`;

const goBackBtn = document.querySelector(".go-back");

goBackBtn.addEventListener("click", function () {
  window.history.back();
});
