const result = document.querySelector(".result");
const firstValue = document.querySelector(".val-1");
const secondValue = document.querySelector(".val-2");
const allBtns = document.querySelectorAll(".btn");

let res = 0;
allBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(this.textContent.toLowerCase());

    switch (this.textContent.toLowerCase()) {
      case "addition":
        res = firstValue.valueAsNumber + secondValue.valueAsNumber;
        break;
      case "subtruct":
        res = firstValue.valueAsNumber - secondValue.valueAsNumber;
        break;
      case "multiply":
        res = firstValue.valueAsNumber * secondValue.valueAsNumber;
        break;
      case "division":
        if (secondValue.valueAsNumber !== 0) {
          res = firstValue.valueAsNumber / secondValue.valueAsNumber;
        } else {
          console.error("sıfıra bolme olmaz!!!");
        }
        break;
      case "reset":
        res = 0;
        firstValue.value = "";
        secondValue.value = "";
        break;

      default:
        break;
    }

    result.textContent = res;
  });
});
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle");

// openBtn.addEventListener("click", function () {
//   sidebar.style.transform = "translateX(0)";
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.style.transform = "translateX(-100%)";
// });

openBtn.addEventListener("click", function () {
  sidebar.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show");
});

// toggleBtn.addEventListener("click", function () {
//   if (sidebar.classList.contains("show")) {
//     sidebar.classList.remove("show");
//   } else {
//     sidebar.classList.add("show");
//   }
// });
toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});
