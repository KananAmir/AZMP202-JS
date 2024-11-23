import { BASE_URL } from "./constants.js";

const addForm = document.querySelector("#add-form");

const companyInput = document.querySelector("#company");
const contactInput = document.querySelector("#contact");
const streetInput = document.querySelector("#street");
const cityInput = document.querySelector("#city");
const countrytInput = document.querySelector("#country");

addForm.addEventListener("submit", function (e) {
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

  //   console.log(customer);

  fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((res) => {
      //   console.log(res);
      this.reset();
      window.location.replace("index.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
