const setToLocalBtn = document.querySelector(".set");
const getFromLocalBtn = document.querySelector(".get");
const clear = document.querySelector(".clear");
const removeItem = document.querySelector(".remove");
// storages

//loacalStorage

setToLocalBtn.addEventListener("click", function () {
  localStorage.setItem("username", "jhon_doe");
  localStorage.setItem("id", 123);
});
getFromLocalBtn.addEventListener("click", function () {
  console.log(localStorage.getItem("username"));
});
clear.addEventListener("click", function () {
  localStorage.clear();
});

removeItem.addEventListener("click", function () {
  localStorage.removeItem("id");
});
//sessionStorage

// sessionStorage.setItem("test", "hello");
// localStorage.setItem("test", "hello");
//cookies

const incBtn = document.querySelector(".inc");
const decBtn = document.querySelector(".dec");
const resetBtn = document.querySelector(".reset");
const result = document.querySelector(".result");
const modeBtn = document.querySelector(".mode");

window.addEventListener("DOMContentLoaded", function () {
  let count = localStorage.getItem("count") || 0;
  result.textContent = count;
});

incBtn.addEventListener("click", function () {
  count++;
  localStorage.setItem("count", count);
  result.textContent = count;
});
decBtn.addEventListener("click", function () {
  count--;
  localStorage.setItem("count", count);
  result.textContent = count;
});
resetBtn.addEventListener("click", function () {
  count = 0;
  localStorage.setItem("count", count);
  result.textContent = count;
});

window.addEventListener("DOMContentLoaded", function () {
  let mode = localStorage.getItem("mode") || "light";
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    modeBtn.textContent = "light mode";
  } else {
    document.body.classList.remove("dark-mode");
    modeBtn.textContent = "dark mode";
  }
});
modeBtn.addEventListener("click", function () {
  if (this.textContent === "dark mode") {
    this.textContent = "light mode";
    localStorage.setItem("mode", "dark");
    document.body.classList.add("dark-mode");
  } else {
    this.textContent = "dark mode";
    localStorage.setItem("mode", "light");
    document.body.classList.remove("dark-mode");
  }
});

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

const student = {
  id: 1,
  firstName: "Sabina",
  "last name": "Cavadova",
  email: "sabina@code.edu.az",
  birthYear: 2004,
  uniInfo: {
    studentId: "azmiu123",
    uniName: "AZMIU",
    faculty: "IT",
    gpa: 3.2,
    courseNumber: 3,
  },
  skills: ["html", "css", "js"],
};

// localStorage.setItem("itCompanies", itCompanies);
// localStorage.setItem("studentObj", student);

// console.log(localStorage.getItem("itCompanies"));
// console.log(localStorage.getItem("studentObj"));

localStorage.setItem("itCompanies", JSON.stringify(itCompanies));
localStorage.setItem("studentObj", JSON.stringify(student));

console.log(JSON.parse(localStorage.getItem("itCompanies")));
console.log(JSON.parse(localStorage.getItem("studentObj")));

let bool = true;

localStorage.setItem("bool", bool);

console.log(typeof localStorage.getItem("bool"));
console.log(typeof JSON.parse(localStorage.getItem("bool")));
