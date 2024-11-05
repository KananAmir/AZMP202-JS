// foreach
// map
// find
// findLast
// findIndex
// findLastIndex
// filter
// sort
// every
// some
// reduce

const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

const numbers = [30, 25, 49, 37, 40, 100]; // array of numbers

// let sum = 30;
// for (let i = 1; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log("sum", sum);

const cb = () => {};
numbers.forEach(cb);
numbers.forEach(function () {});

// numbers.forEach((element, index, array) => {
//   console.log(index, element);
//   console.log(array);
// });

// let sum = 0;
// numbers.forEach((element, index, array) => {
//   sum += element;
// });

// console.log("sum", sum);

const countries = [
  "Finland",
  "America",
  "Denmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
  "Albania",
]; // array of strings, countries

// let newNums = numbers.map((item, index) => {
//   return item * 0.5;
// });

let newNums = numbers.map((item, index) => item * 0.5);

console.log(newNums);

// console.log(
//   countries.map((country, index) => {
//     return `${index}.${country}`;
//   })
// );
// const countriesAbbr = countries.map((country, index) => {
//   return `${country.slice(0, 3).toUpperCase()}`;
// });
// const countriesAbbr = countries.map((c, index, array) => {
//   return `${c.slice(0, 3).toUpperCase()}${c.slice(3)}`;
// });
const countriesAbbr = countries.map(
  (c, index, array) => `${c.slice(0, 3).toUpperCase()}${c.slice(3)}`
);

console.log(countriesAbbr);

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

// const newProducts = products.map((item) => {
//   return { name: item.name, price: item.price };
// });

// console.log(newProducts);

let found = numbers.find((item, index, array) => item > 30);
console.log(found);
console.log(numbers.findLast((item, index, array) => item > 30));
console.log(numbers.findIndex((item, index, array) => item > 30));
console.log(numbers.findLastIndex((item, index, array) => item > 30));
console.log(countries.find((item) => item.length > 7));
// console.log(
//   countries.find((q) => {
//     return q.length > 7;
//   })
// );

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

const filteredTechs = webTechs.filter((elem) => elem.length > 4);

console.log(filteredTechs);

console.log(numbers.filter((n) => n > 40));

// const filteredProducts = products.filter((product) => product.price > 50);
// const filteredProducts = products.filter(
//   (product) => product.category.toLowerCase() === "electronics"
// );
// const filteredProducts = products.filter((product) => {
//   return product.category.toLowerCase() === "electronics" && product.price > 50;
// });

const filteredProducts = products
  .filter((product) => {
    return (
      product.category.toLowerCase() === "electronics" && product.price > 50
    );
  })
  .map((q) => {
    return { name: q.name, price: q.price };
  });

console.log(filteredProducts);

const students = ["fatima", "ibrahim", "shola", "emin", "safar", "ulviyya"];

const sortedStudents = students.toSorted();

console.log(students);
console.log(sortedStudents);

const scores = [40, 100, 96, 44, 30, 84];

// sort by number asc
// scores.sort((a, b) => a - b);
console.log(scores);

// sort by number desc
// scores.sort((a, b) => b - a);

console.log(scores);

// sort by string asc (a-z)
// students.sort((a, b) => {
//   return a.localeCompare(b);
// });
// sort by string desc (z-a)
// students.sort((a, b) => {
//   return b.localeCompare(a);
// });

console.log(students);

const products2 = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
    count: 2,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
    count: 7,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
    count: 3,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
    count: 4,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
    count: 3,
  },
];

// asc by price
const sortByNumAsc = products2.toSorted((a, b) => a.price - b.price);
console.log(sortByNumAsc);

// asc by price
const sortByNumDesc = products2.toSorted((a, b) => b.price - a.price);
console.log(sortByNumDesc);

console.log(products2);

console.log(numbers.every((item) => item > 0)); // true
console.log(numbers.every((item) => item < 0)); // false
console.log(numbers.every((item) => item > 40)); //false

console.log(numbers.some((item) => item > 0)); // true
console.log(numbers.some((item) => item < 0)); // false
console.log(numbers.some((item) => item > 40)); //true

console.log(products2.every((p) => p.price > 500)); //false
console.log(products2.every((p) => p.price > 90)); //true

//reduce

// let sum = scores.reduce((acc, curr, index, arr) => {});

// let cem = 0;

// scores.forEach((q) => {
//   cem += q;
// });
// console.log(a);

// const scores = [40, 100, 96, 44, 30, 84];

// let sumOfNumbers = scores.reduce((sum, item, index, arr) => {
//   console.log("sum", sum, "item", item);

//   return sum + item;
// });
let sumOfNumbers = scores.reduce((sum, item, index, arr) => sum + item, 0);
let multiplyOfNumbers = scores.reduce((sum, item, index, arr) => sum * item, 1);

console.log(sumOfNumbers);
console.log(multiplyOfNumbers);

const sumOfPricesOfProducts = products2.reduce(
  (acc, curr) => acc + curr.price,
  0
);

console.log(sumOfPricesOfProducts);

console.log(students.reduce((acc, curr) => acc + curr[0], ""));

let str = "hello";
// console.log(str.split(""));
// console.log([...str]);

console.log(Array.from(str));

const arr = [1, 2, 3, 4];

// arr.fill("a", 2);
arr.fill("a");
console.log(arr);
