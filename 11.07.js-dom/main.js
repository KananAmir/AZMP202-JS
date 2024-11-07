const wrapper = document.querySelector(".wrapper");
const paragElement = document.createElement("p");
paragElement.textContent = "lorem";

// wrapper.append(paragElement, "hello");
// wrapper.appendChild(paragElement);
// wrapper.append("html")
// wrapper.prepend(paragElement);

//append, prepend
//appendChild
//before, after

// const differText = document.querySelector(".text.differ");

// differText.before(paragElement);
// differText.after(paragElement);

const products = [
  { name: "one Product 1", price: 20, category: "electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
];

const list = document.querySelector(".list");

products.forEach((product) => {
  const liElem = document.createElement("li");
  liElem.textContent = product.name;
  //   console.log(liElem);
  //   list.append(liElem);
  liElem.addEventListener("click", function () {
    // console.log(this.textContent);
    this.remove();
  });
  list.prepend(liElem);
});

const note = document.querySelector("#main .note");

// console.log(note.parentElement);
console.log(note.parentElement.parentElement);
// console.log(note.parentElement.parentNode);
// console.log(note.parentElement.parentElement.parentElement);
// console.log(note.parentElement.parentElement.parentElement.parentElement);

const mainDiv = document.querySelector("#main");

// mainDiv.remove()
console.log(mainDiv.children);
// console.log(mainDiv.children[0].textContent);
// console.log(mainDiv.childNodes);

console.log(mainDiv.childNodes);

console.log(mainDiv.firstElementChild);
console.log(mainDiv.firstChild);
console.log(mainDiv.lastElementChild);
console.log(mainDiv.lastChild);

const secondParag = document.querySelector(".note.second-parag");

console.log(secondParag.nextElementSibling);
console.log(secondParag.nextSibling);
console.log(secondParag.previousElementSibling.textContent);
console.log(secondParag.previousSibling);

const btn = document.querySelector(".click");

// btn.addEventListener("click", function () {
//   //   console.log("clicked");
//   console.log(this);
// });

const box = document.querySelector(".outer-box .inner-box");

console.log(box.parentElement.parentElement);
console.log(box.closest(".outer-box"));

const imgContainer = document.querySelector(".img-container");
const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB"
);
img.setAttribute("alt", "dog image");
img.setAttribute("width", 200);

imgContainer.appendChild(img);

img.setAttribute("class", "dog-image");
console.log(img.getAttribute("id"));
console.log(img.getAttribute("alt"));

img.removeAttribute("alt");

console.log(img.hasAttribute("alt")); //false
console.log(img.hasAttribute("src")); //true

const ulElem = document.querySelector("header nav ul");

ulElem.style.display = "flex";
ulElem.style.gap = "1rem";
ulElem.style.listStyle = "none";

console.log(getComputedStyle(ulElem));

// ulElem.className = "test"
console.log(ulElem.className);

console.log(ulElem.classList.remove("bg-red"));

const changeBgBtn = document.querySelector(".change-bg");

changeBgBtn.addEventListener("click", function () {
  //   if (!document.body.classList.contains("bg-dark")) {
  //     document.body.classList.add("bg-dark");
  //   } else {
  //     document.body.classList.remove("bg-dark");
  //   }

  document.body.classList.toggle("bg-dark");
});

const submitBtn = document.querySelector(".submit");
const userName = document.querySelector(".user-name");

submitBtn.addEventListener("click", function () {
  console.log(userName.value);
});

const num1 = document.querySelector(".first-num");
const num2 = document.querySelector(".second-num");
const result = document.querySelector(".result");

const addBtn = document.querySelector(".add");
const multiplyBtn = document.querySelector(".multiply");

addBtn.addEventListener("click", function () {
  //   result.textContent = +num1.value + +num2.value;
  result.textContent = num1.valueAsNumber + num2.valueAsNumber;
});
multiplyBtn.addEventListener("click", function () {
  result.textContent = num1.valueAsNumber * num2.valueAsNumber;
});

//create card

const cardDiv = document.createElement("div");
// cardDiv.setAttribute("class", "card");
cardDiv.classList.add("card");

cardDiv.style.width = "300px";
const cardImage = document.createElement("img");
cardImage.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB"
);
cardImage.setAttribute("class", "card-img");
cardImage.style.width = "100%";

const cardBody = document.createElement("div");
cardBody.setAttribute("class", "card-body");

const cardTitle = document.createElement("h2");
cardTitle.textContent = "Card title";
cardTitle.className = "card-title";

const cardText = document.createElement("p");
cardText.textContent =
  " Some quick example text to build on the card title and make up the bulk of the card's content.";

cardText.setAttribute("class", "card-text");

const cardBtn = document.createElement("a");

cardBtn.setAttribute("href", "#");

cardBtn.textContent = "Go somewhere";
cardBody.append(cardTitle, cardText, cardBtn);
cardDiv.append(cardImage, cardBody);
document.body.append(cardDiv);
