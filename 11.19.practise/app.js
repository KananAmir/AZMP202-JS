const name = document.querySelector("#name");
const score = document.querySelector("#score");
const form = document.querySelector("form");
const averageBtn = document.querySelector(".average-btn");
const average = document.querySelector(".average");

// let studentsArr = JSON.parse(localStorage.getItem("students")) ?? [];
let studentsArr;
window.addEventListener("DOMContentLoaded", function () {
  studentsArr = JSON.parse(localStorage.getItem("students")) || [];
  average.textContent = calcAverage(studentsArr);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const student = {
    id: Date.now(),
    name: name.value,
    score: +score.value,
  };

  studentsArr.push(student);
  localStorage.setItem("students", JSON.stringify(studentsArr));

  this.reset();
});

// function calcAverage(arr) {
//   let sum = 0;
//   arr.forEach((item) => {
//     sum += item.score;
//   });

//   return sum / arr.length;
// }
function calcAverage(arr) {
  return arr.reduce((sum, item) => sum + item.score, 0) / arr.length;
}

averageBtn.addEventListener("click", function () {
  average.textContent = calcAverage(studentsArr);
  average.textContent = calcAverage(studentsArr);
});
