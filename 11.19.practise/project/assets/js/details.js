import { products } from "./data.js";
const pId = new URLSearchParams(window.location.search).get("id");

const detailsWrapper = document.querySelector(".details");
// console.log(id);

const product = products.find((p) => p.id == pId);

console.log(product);

detailsWrapper.innerHTML = `
         <div class="col-12 col-md-6">
            <img src="${product.imageUrl}" alt="" />
          </div>
          <div class="col-12 col-md-6">
            <h4>${product.title}</h4>
            <p>
              ${product.description}
            </p>
            <h4>Category: ${product.category}</h4>
            <p>Price $ ${product.price}</p>
            <button class="go-back btn btn-primary">Go Back</button>
          </div>

`;

const goBackBtn = document.querySelector(".go-back");

goBackBtn.addEventListener("click", function () {
  window.history.back();
});
