const btn = document.querySelector(".btn");
const inner = document.querySelector(".inner");
const outer = document.querySelector(".outer");

//mouse events
// btn.addEventListener("click", function (event) {
//   console.log(event);
//   //   console.log(event.target);
//   // console.log(this);

//   //   console.log("btn clicked");
// });

//event propagation - event bubling, event capturing

//event bubling
// btn.addEventListener("click", () => {
//   console.log("btn clicked");
// });
// inner.addEventListener("click", () => {
//   console.log("inner element clicked");
// });
// outer.addEventListener("click", () => {
//   console.log("outer element clicked");
// });

//event capturing
// btn.addEventListener(
//   "click",
//   (e) => {
//     console.log("btn clicked");
//   },
//   { capture: true }
// );
// inner.addEventListener(
//   "click",
//   (e) => {
//     console.log("inner element clicked");
//   },
//   { capture: true }
// );
// outer.addEventListener(
//   "click",
//   (e) => {
//     console.log("outer element clicked");
//   },
//   { capture: true }
// );

// btn.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("btn clicked");
//   },
//   { capture: true }
// );
// inner.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("inner element clicked");
//   },
//   { capture: true }
// );
// outer.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("outer element clicked");
//   },
//   { capture: true }
// );

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("btn clicked");
  //   searchInput.focus();
});
inner.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("inner element clicked");
});
outer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("outer element clicked");
});

const box = document.querySelector(".box");

window.addEventListener("contextmenu", function (e) {
  //   console.log("contextmenu event worked");
  console.log(e);
});

// box.addEventListener("mousedown", function () {
//   console.log("mousedown event wokked");
// });
// box.addEventListener("mouseup", function () {
//   console.log("mouseup event wokked");
// });
// box.addEventListener("mouseenter", function () {
//   console.log("mouseenter event wokked");
// });
// box.addEventListener("mousemove", function () {
//   console.log("mousemove event wokked");
// });
// box.addEventListener("mouseover", function () {
//   console.log("mouseover event wokked");
// });
box.addEventListener("mouseout", function () {
  console.log("mouseout event wokked");
});

//keyboard events

window.addEventListener("keydown", function (event) {
  //   console.log(event);
  //   console.log(event.key);
  //   console.log(event.code);
});

let alpha = 1;
window.addEventListener("keyup", function (event) {
  if (event.code === "ArrowUp") {
    if (alpha < 1) alpha += 0.1;
  } else if (event.code === "ArrowDown") {
    if (alpha > 0) alpha -= 0.1;
  }

  //   console.log(alpha);

  document.body.style.backgroundColor = `rgba(255, 165, 0, ${alpha})`;
});

const searchInput = document.querySelector(".search");

window.addEventListener("keyup", function () {
  console.log(searchInput.value);
});

searchInput.addEventListener("focus", function (event) {
  //   console.log(event.target);
  event.target.style.backgroundColor = "green";
  event.target.style.color = "red";
});
searchInput.addEventListener("blur", function (event) {
  //   console.log(event.target);
  //   event.target.style.backgroundColor = "unset";
  event.target.style.backgroundColor = "white";
});
