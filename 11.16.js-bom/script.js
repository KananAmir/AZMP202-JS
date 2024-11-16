// DOM - document object model
// BOM - brauser object model

// console.log(window);

// console.log(window.innerWidth);
// console.log(window.innerHeight);

const openBtn = document.querySelector(".open");
const copyBtn = document.querySelector(".copy");
const text = document.querySelector(".text");

openBtn.addEventListener("click", function () {
  //   window.open();
  window.close();
});

console.log(window.location);

console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.location.href);

copyBtn.addEventListener("click", function () {
  window.navigator.clipboard.writeText(text.textContent);
});

// alert("alert message");
// const bool = confirm("are u sure to delete?");
// console.log(bool);

// let email = prompt("enter ur email..", "test@gmail.com");

// console.log(email);

//js timing functions

// settimeout

const clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
  //   clearTimeout(timeoutId);
  //   clearInterval(intervalId);
});
// const timeoutId = setTimeout(() => {
//   console.log("hello");
// }, 3000);

// setinterval

// setInterval(() => {
//   console.log("js");
// }, 1000);

// clearInterval
// let count = 0;
// const intervalId = setInterval(() => {
//   console.log(++count);
//   if (count === 100) {
//     clearInterval(intervalId);
//   }
// }, 10);

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const incByInputValue = document.querySelector(".inc-by-input-value");
const numberInput = document.querySelector(".number");
const result = document.querySelector(".result");

let count = 0;
let countIntervalId = null;
stopBtn.setAttribute("disabled", null);

startBtn.addEventListener("click", function () {
  //   clearInterval(countIntervalId);

  this.setAttribute("disabled", null);
  stopBtn.removeAttribute("disabled");

  countIntervalId = setInterval(() => {
    count++;
    result.textContent = count;
  }, 100);
});
stopBtn.addEventListener("click", function () {
  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", null);

  clearInterval(countIntervalId);
});
resetBtn.addEventListener("click", function () {
  count = 0;
  result.textContent = count;

  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", null);
});

incrementBtn.addEventListener("click", function () {
  count++;
  result.textContent = count;
});
decrementBtn.addEventListener("click", function () {
  count--;
  result.textContent = count;
});

incByInputValue.addEventListener("click", function () {
  count += numberInput.valueAsNumber;
  result.textContent = count;
});

const wrapper = document.querySelector(".wrapper");
const js = document.querySelector(".js");

let positon = 0;

setInterval(() => {
  positon += 10;
  js.style.transform = `translateX(${positon}px)`;

  if (positon === 300) {
    positon = 0;
  }
}, 100);

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
];

const slide = document.querySelector(".slide");

let currentIndex = 0;
setInterval(() => {
  slide.src = products[currentIndex].image;

  currentIndex = (currentIndex + 1) % products.length;
  //   currentIndex++;
  //   if (currentIndex === products.length - 1) {
  //     currentIndex = 0;
  //   }
}, 1000);
