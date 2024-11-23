import { BASE_URL } from "./constants.js";

const customerId = new URLSearchParams(window.location.search).get("id");
const cTitle = document.querySelector(".card-title");
const cText = document.querySelector(".card-text");
const address = document.querySelector(".address");
const spinner = document.querySelector(".spinner");
const customerDetails = document.querySelector(".customer-details");
// console.log(customerId);

function getDataById(id) {
  fetch(`${BASE_URL}/suppliers/${id}`)
    .then((res) => res.json())
    .then((data) => {
      fillCardInfo(data);
      customerDetails.classList.add("d-block");
      customerDetails.classList.remove("d-none");
    })
    .catch((err) => {
      console.log(err);
      throw new Error("failed to fetch!");
    })
    .finally(() => {
      spinner.classList.remove("d-flex");
      spinner.classList.add("d-none");
    });
}

getDataById(customerId);

function fillCardInfo(obj) {
  cTitle.textContent = obj.contactTitle;
  cText.textContent = obj.companyName;
  address.textContent = `${obj.address?.street} / ${obj.address?.city}, ${obj.address?.country}`;
}
