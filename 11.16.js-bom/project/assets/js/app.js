import { products } from "./data.js";
import { Product } from "./classes.js";

const tBody = document.querySelector("tbody");
const searchInput = document.querySelector("#search");
const ascBtn = document.querySelector(".asc");
const descBtn = document.querySelector(".desc");
const defaultBtn = document.querySelector(".default");
const sortBtn = document.querySelector(".sort");
const categorySelect = document.querySelector("#category");
const productForm = document.querySelector(".product-form");

const pImage = document.querySelector("#image");
const pTitle = document.querySelector("#title");
const pPrice = document.querySelector("#price");
const pCategory = document.querySelector("#category-select");
const pRaiting = document.querySelector("#raiting");

const submitBtn = document.querySelector(".submit-btn");

let editedId = null;
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
            <td>${product.rating?.rate}</td>
            <td>
              <i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i>
              <i class="fa-solid fa-pen-to-square edit-btn" data-id=${product.id}></i>
              <a href="details.html?id=${product.id}" ><i class="fa-solid fa-circle-info"></i></a>
            </td>
        `;

    tBody.appendChild(trElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete-btn");
  const allEditBtns = document.querySelectorAll(".edit-btn");

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

  allEditBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // console.log(this);
      const pId = this.getAttribute("data-id");
      editProduct(pId);
      submitBtn.textContent = "Edit";
      submitBtn.classList.add("bg-success");

      editedId = pId;
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

function editProduct(id) {
  // console.log(id);
  const editedProduct = products.find((p) => p.id == id);
  // console.log(editedProduct);
  fillForm(editedProduct);
}

function fillForm(productObj) {
  pImage.value = productObj.image;
  pTitle.value = productObj.title;
  pPrice.value = productObj.price;
  pCategory.value = productObj.category;
  pRaiting.value = productObj.rating.rate;
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

  // drawTable(filteredProducts);

  //   console.log(filteredProducts);
});

productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    if (!editedId) {
      const newProduct = new Product(
        pImage.value,
        pTitle.value,
        pPrice.valueAsNumber,
        pCategory.value,
        pRaiting.valueAsNumber
      );

      products.push({ ...newProduct, rating: { rate: pRaiting.value } });

      // console.log(products);
    } else {
      const found = products.find((p) => p.id == editedId);
      found.image = pImage.value;
      found.title = pTitle.value;
      found.category = pCategory.value;
      found.price = pPrice.value;
      found.rating.rate = pRaiting.value;
      console.log(found);
    }

    drawTable(products);
    resetInputFields();
  }
});

function resetInputFields() {
  // pImage.value = "";
  // pTitle.value = "";
  // pPrice.value = "";
  // pCategory.value = "";
  // pRaiting.value = "";

  productForm.reset();
}

function validateForm() {
  const imageError = document.querySelector("#image-error");
  const titleError = document.querySelector("#title-error");
  const priceError = document.querySelector("#price-error");
  const raitingError = document.querySelector("#raiting-error");

  imageError.textContent = "";
  titleError.textContent = "";
  priceError.textContent = "";
  raitingError.textContent = "";

  let isValidate = true;

  if (pImage.value === "") {
    imageError.textContent = "image url can not be empty!";
    isValidate = false;
  }
  if (pTitle.value === "") {
    titleError.textContent = "title can not be empty!";
    isValidate = false;
  }
  if (pPrice.value === "") {
    priceError.textContent = "price can not be empty!";
    isValidate = false;
  }
  if (pRaiting.value === "") {
    raitingError.textContent = "raiting can not be empty!";
    isValidate = false;
  }
  return isValidate;
}
