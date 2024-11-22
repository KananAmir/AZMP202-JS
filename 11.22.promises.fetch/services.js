import { BASE_URL } from "./constants.js";

//get all data

function getAllData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// getAllData("customers");
// getAllData("suppliers");
// getAllData("categories");

//get data by id

function getDataById(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
// getDataById("customers", 5); //not found
// getDataById("customers", "BLONP");

//delete data by id
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

// const deleteBtn = document.querySelector(".delete");

// deleteBtn.addEventListener("click", function () {
//   deleteDataById("customers", "BLONP");
// });

//add new data

function addNewData(endpoint, payload) {
  fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// addNewData("customers", { name: "azmp202" });

const obj = {
  companyName: "Code Academy",
  contactName: "Code MMC",
  contactTitle: "Devs",
};
// addNewData("customers", obj);

//edit data by id

function editDataById(endpoint, id, payload) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// editDataById("customers", "ANTON", obj);

//update data with specific fields
function editDataByIdWithSpecificFields(endpoint, id, payload) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

editDataByIdWithSpecificFields("customers", "BONAP", {
  contactTitle: "azmp202",
});
