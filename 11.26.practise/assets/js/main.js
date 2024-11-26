const BASE_URL = "http://localhost:8080/";

let products = null;
const searchInput = document.querySelector("#search-input");
async function getData() {
  const { data } = await axios.get(`${BASE_URL}products`);
  console.log(data);

  products = data;
  displayProducts(data);
}

getData();

function displayProducts(arr) {
  const productCards = document.getElementById("product-cards");
  productCards.innerHTML = "";
  arr.forEach((product) => {
    const productCard = `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">Price: $${product.price}</p>
              </div>
            </div>
          </div>
        `;
    productCards.innerHTML += productCard;
  });
}

// searchInput.addEventListener("keyup", function (event) {
//   const searchValue = event.target.value.toLowerCase().trim();

//   const filteredProducts = products.filter(
//     (p) =>
//       p.name.toLowerCase().includes(searchValue) ||
//       p.description.toLowerCase().includes(searchValue)
//   );

//   displayProducts(filteredProducts);
// });

let timeoutId = null;
searchInput.addEventListener("keyup", function (event) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(async () => {
    const searchValue = event.target.value.toLowerCase().trim();
    const { data } = await axios.get(`${BASE_URL}products`);

    const filteredProducts = data.filter(
      (p) =>
        p.name.toLowerCase().includes(searchValue) ||
        p.description.toLowerCase().includes(searchValue)
    );

    // console.log(filteredProducts);
    displayProducts(filteredProducts);
  }, 500);
  console.log(timeoutId);

  //   displayProducts(filteredProducts);
});
