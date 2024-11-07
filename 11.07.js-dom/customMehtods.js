const obj = {};

console.log(obj);

// const arr = new Array(5);

// console.log(arr);

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

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

// String.prototype.customCapitalize = function () {
//   let result = this[0].toUpperCase() + this.slice(1).toLowerCase();
//   return result;
// };

String.prototype.customCapitalize = function () {
  const words = this.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += ` ${words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()}`;
  }

  return result.trim();
};

let str = "lorem ipsum dolor";
let str2 = "hello";

console.log(str2.customCapitalize());
console.log(str.customCapitalize());

String.prototype.wavyStr = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    if (i % 2 === 1) {
      result += this[i].toUpperCase();
    } else {
      result += this[i].toLowerCase();
    }
  }

  return result;
};
console.log(str.wavyStr());

// webTechs.forEach((item, index, arr) => {
//   console.log(item);
// });

// CUSTOM FOREACH
Array.prototype.customForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

webTechs.customForEach((element, index, arr) => {
  console.log(element);
});

// CUSTOM MAP

Array.prototype.customMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

// console.log(webTechs.map((item) => item.toLowerCase()));
console.log(webTechs.customMap((item) => item.toLowerCase()));
