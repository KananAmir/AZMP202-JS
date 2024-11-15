// addeventlistener("click") vs onclick

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("clicked 1");
});
btn.addEventListener("click", function () {
  console.log("clicked 2");
});
btn.addEventListener("click", function () {
  console.log("clicked");
});

btn.onclick = function () {
  console.log("btn clicked -> onclick 1");
};
btn.onclick = function () {
  console.log("btn clicked -> onclick 2");
};
btn.onclick = function () {
  console.log("btn clicked -> onclick 3");
};

const searchInput = document.querySelector(".search");

// searchInput.addEventListener("keyup", function (event) {
//   console.log(event.target.value);
// });

searchInput.onkeyup = function (event) {
  console.log(event.target.value);
};
