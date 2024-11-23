import { BASE_URL } from "./constants.js";
const tBody = document.querySelector("tbody");
const spinner = document.querySelector(".spinner");
const editForm = document.querySelector("#edit-form");

let customers = null;
let editedId = null;

function getData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);

      customers = data;
      drawTable(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      spinner.classList.add("d-none");
      document.body.style.backgroundColor = "dark";
    });
}

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((item) => {
    tBody.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.companyName}</td>
            <td>${item.contactTitle}</td>
            <td>${item.address?.street}</td>
            <td>${item.address?.city}, ${item.address?.country}</td>
            <td class="d-flex gap-2">
                <button class="delete btn btn-outline-danger" data-id=${item.id}>delete</button>
                <button class="edit btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#edit-modal" data-id=${item.id}>edit</button>
                <a class="btn btn-outline-primary d-flex align-items-center" href="details.html?id=${item.id}">details</a>
            </td>
        </tr>
    `;
  });

  const allDeleteBtns = document.querySelectorAll(".delete");
  const allEditBtns = document.querySelectorAll(".edit");

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteData("suppliers", id, this);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            timer: 1000,
          });
        }
      });
    });
  });

  allEditBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelector(".edit-submit-btn")
        .setAttribute("data-bs-dismiss", "modal");

      const cId = this.getAttribute("data-id");
      editedId = cId;
      const editedCustomer = customers.find((q) => q.id == cId);
      fillEditForm(editedCustomer);
    });
  });
}

function deleteData(endpoint, id, btn) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, { method: "DELETE" })
    .then((res) => {
      //   console.log(res);
      //   if (res.ok) {
      //     getData("suppliers");
      //   }

      if (res.ok) {
        btn.closest("tr").remove();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const companyInput = document.querySelector("#company");
const contactInput = document.querySelector("#contact");
const streetInput = document.querySelector("#street");
const cityInput = document.querySelector("#city");
const countrytInput = document.querySelector("#country");

function fillEditForm(obj) {
  // console.log(obj);

  companyInput.value = obj.companyName;
  contactInput.value = obj.contactTitle;
  streetInput.value = obj.address?.street;
  cityInput.value = obj.address?.city;
  countrytInput.value = obj.address?.country;
}

editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const customer = {
    companyName: companyInput.value.trim(),
    contactTitle: contactInput.value.trim(),
    address: {
      street: streetInput.value.trim(),
      city: cityInput.value.trim(),
      country: countrytInput.value.trim(),
    },
  };

  fetch(`${BASE_URL}/suppliers/${editedId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((res) => {
      //   console.log(res);
      if (res.ok) {
        this.reset();
        getData("suppliers");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
window.addEventListener("DOMContentLoaded", function () {
  getData("suppliers");
});
