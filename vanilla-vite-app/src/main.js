import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import moment from "moment";
import axios from "axios";
// const date = new Date("2022-03-25");
const date = new Date(2023, 4);

// console.log(date);

// console.log(Date.now());

const d = new Date();

// console.log(d.getDate());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getTime());

// console.log(d.toUTCString());
// console.log(d.toLocaleString());

const date1 = new Date("2024-11-25");
const date2 = new Date("2024-11-23");

const difference = date1.getTime() - date2.getTime();

const seconds = difference / 1000;
const minutes = seconds / 60;
const hours = minutes / 60;
const days = hours / 24;

console.log(days);

const datePicker = document.querySelector(".date-picker");
const selectedDate = document.querySelector(".selected-date");

datePicker.addEventListener("change", function (e) {
  // selectedDate.textContent = moment(e.target.value).format("LLL");
  // selectedDate.textContent = moment(e.target.value).format("LLLL");
  selectedDate.textContent = moment(e.target.value)
    .subtract(10, "days")
    .calendar();
});

const getCategories = async () => {
  const res = await axios("https://northwind.vercel.app/api/categories");

  console.log(res.data);
};

getCategories();
