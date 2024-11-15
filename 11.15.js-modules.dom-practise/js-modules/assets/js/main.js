// named and default export / import

import { students, BASE_URL, users as istifadeciler } from "./data.js";

// import sum, { students, BASE_URL } from "./data.js";
//default
import sum from "./data.js";

// console.log(students);
console.log(BASE_URL);

const studentsList = document.querySelector(".students-list");

students.forEach((s) => {
  const liElem = document.createElement("li");
  liElem.textContent = s;
  studentsList.appendChild(liElem);
});

console.log(sum(1, 2));

const users = [];

console.log(istifadeciler);
