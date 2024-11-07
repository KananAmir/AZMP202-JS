// DOM - document object model
// BOM - browser object model

// console.log(document);
console.log(document.head);
console.log(document.body);

// window - global

console.log(window);

// const pElem = document.getElementById("first");

// console.log(pElem);
// console.log(pElem.textContent);

const radioInputs = document.getElementsByName("language");

//node list
console.log(radioInputs);

//html collection
const allParagElements = document.getElementsByTagName("p");

console.log(allParagElements);

radioInputs.forEach((input) => {
  console.log(input);
});

// allParagElements.forEach((input) => {
//   console.log(input);
// });

Array.from(allParagElements).forEach((item) => {
  console.log(item);
});

let str = "abc";

console.log(Array.from(str));

const allLiElems = document.getElementsByClassName("item");

console.log(allLiElems);

const parag = document.querySelector(".section-a .wrapper .parag");
const listElems = document.querySelectorAll("#menu .item");

console.log(parag.textContent);
console.log(parag.innerText);
console.log(listElems);

const heading = document.querySelector(".heading");
//textContent, innerText, innerHtml

console.log(heading.textContent);
console.log(heading.innerText);
console.log(heading.innerHTML);

// heading.textContent = "hello <strong>javascript!</strong>";
// heading.innerText = "hello <strong>javascript!</strong>";
heading.innerHTML = "hello <em>javascript!</em>";

const noteDiv = document.querySelector("#note");

// console.log(noteDiv.innerHTML);
console.log(noteDiv.textContent);
console.log(noteDiv.innerText);

