// axios
import BASE_URL, { endpoints } from "./contants.js";

// fetch(`${BASE_URL}/${endpoints.products}`, {
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteBtn = document.querySelector(".delete");
function getAllData() {
  axios(`${BASE_URL}/${endpoints.products}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

getAllData();
function deleteDataById(id) {
  axios
    .delete(`${BASE_URL}/${endpoints.products}/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

deleteBtn.addEventListener("click", function () {
  deleteDataById(3);
});

function addNewData(payload) {
  axios
    .post(`${BASE_URL}/${endpoints.products}`, payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
function editDataById(id, payload) {
  axios
    .put(`${BASE_URL}/${endpoints.products}/${id}`, payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
