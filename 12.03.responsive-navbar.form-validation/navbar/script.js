const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

menu.addEventListener("click", function () {
  // if (nav.classList.contains("show")) {
  //   nav.classList.remove("show");
  // } else {
  //   nav.classList.add("show");
  // }

  nav.classList.toggle("show");
});

window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 0);
});
