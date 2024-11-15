import { products } from "./data.js";

const tBody = document.querySelector("tbody");
const searchInput = document.querySelector("#search");
const ascBtn = document.querySelector(".asc");
const descBtn = document.querySelector(".desc");
const defaultBtn = document.querySelector(".default");
const sortBtn = document.querySelector(".sort");
const categorySelect = document.querySelector("#category");
const productForm = document.querySelector(".product-form");

//draw table

function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((product) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
            <td><img src="${product.image}" width="100"/></td>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.rating.rate}</td>
            <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i></td>
        `;

    tBody.appendChild(trElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete-btn");

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      //   console.log(this);
      //   this.parentElement.parentElement.remove();

      const productId = this.getAttribute("data-id");
      const idx = products.findIndex((item) => item.id == productId);

      Swal.fire({
        title: "Are you sure to delete product!?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(idx, this);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}

drawTable(products);

//delete product

function deleteProduct(index, btn) {
  products.splice(index, 1);
  //   console.log(products);
  btn.closest("tr").remove();
  //   drawTable(products);
}

searchInput.addEventListener("input", function (event) {
  //   console.log(event.target.value);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(event.target.value.trim())
  );

  drawTable(filteredProducts);
});

//sort by price
ascBtn.addEventListener("click", function () {
  const sortedProducts = products.toSorted((a, b) => a.price - b.price);
  drawTable(sortedProducts);
});
descBtn.addEventListener("click", function () {
  const sortedProducts = products.toSorted((a, b) => b.price - a.price);
  drawTable(sortedProducts);
});
defaultBtn.addEventListener("click", function () {
  drawTable(products);
});

sortBtn.addEventListener("click", function () {
  //   console.log(this.textContent);

  let sorted;
  if (this.textContent === "ASC by Price") {
    this.textContent = "DESC by Price";
    sorted = products.toSorted((a, b) => a.price - b.price);
  } else if (this.textContent === "DESC by Price") {
    this.textContent = "Default";
    sorted = products.toSorted((a, b) => b.price - a.price);
  } else {
    this.textContent = "ASC by Price";
    sorted = structuredClone(products);
  }
  drawTable(sorted);
});

//filter by category

categorySelect.addEventListener("change", function (event) {
  //   console.log(event.target.value);

  if (event.target.value !== "all") {
    const filteredProducts = products.filter(
      (p) => p.category === event.target.value
    );
    drawTable(filteredProducts);
  } else {
    drawTable(products);
  }

  drawTable(filteredProducts);

  //   console.log(filteredProducts);
});

productForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
