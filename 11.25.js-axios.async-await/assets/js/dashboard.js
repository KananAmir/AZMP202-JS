import { deleteDataById, getAllData } from "./api/services.js";
import { endpoints } from "./contants.js";

// getAllData(endpoints.products).then((res) => {
//   console.log(res.data);
// });

const tBody = document.querySelector("tbody");
const search = document.querySelector(".search");

let products = null;
async function getProducts() {
  try {
    const response = await getAllData(endpoints.products);
    // console.log(response.data);
    products = response.data;
    drawTable(response.data);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((product) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
              <td>${product.id}</td>
              <td><img src="${product.image}" width="100"/></td>
              <td>${product.title}</td>
              <td>${product.category}</td>
              <td>${product.price}</td>
              <td>${product.rating.rate}</td>
              <td title="${product.description}">${product.description.slice(
      0,
      30
    )}..</td>
              <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${
                product.id
              }></i></td>
          `;

    tBody.appendChild(trElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete-btn");

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      //   console.log(this);
      //   this.parentElement.parentElement.remove();

      const productId = this.getAttribute("data-id");

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
          deleteProduct(productId, this);
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

async function deleteProduct(id, btn) {
  try {
    const response = await deleteDataById(endpoints.products, id);
    btn.closest("tr").remove();
  } catch (error) {
    console.log(error);
  }
}

// search.addEventListener("keyup", function (e) {
//   const filteredProducts = products.filter((q) =>
//     q.title.toLowerCase().includes(e.target.value.toLowerCase().trim())
//   );

//   //   console.log(filteredProducts);
//   drawTable(filteredProducts);
// });

let timeout = null;
search.addEventListener("keyup", function (e) {
  clearTimeout(timeout);
  let response;
  timeout = setTimeout(async () => {
    response = await getAllData(endpoints.products);

    const filteredProducts = response.data.filter((q) =>
      q.title.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );

    drawTable(filteredProducts);
  }, 500);
});
