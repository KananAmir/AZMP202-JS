const BASE_URL = "http://localhost:3000";

function getAllData() {
  fetch(`${BASE_URL}/products`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getAllData();

function deleteDataById(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

deleteDataById("products", 7);
