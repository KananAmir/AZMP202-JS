// let arr = []; //empty array

// console.log(arr);

let arr2 = new Array(10);

console.log(arr2);

const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits

// console.log(fruits[2]);
console.log(fruits);
fruits[1] = "pomegranate";
fruits[fruits.length - 1] = "pear";
console.log(fruits);

// pop/push, shift/unshift

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// let a = countries.pop();
// let b = countries.shift();
// console.log(countries.shift());

// console.log(countries);

// console.log(a, b);

console.log(countries.push("Turkey", "Azerbaijan"));
let c = countries.unshift("Geargia");
console.log(c);

console.log(countries);

// for of, for in

const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products

for (item of animalProducts) {
  console.log(item);
}

let user = {
  username: "Fatima",
  email: "fatima@code.edu.az",
  uniName: "AZMIU",
  fakulty: "IT",
  skills: ["sleeping", "reading", "playing", "coding"],
};

// console.log(user.username);
// console.log(user["username"]);

for (key in user) {
  //   console.log(key);
  //   console.log(user[key]);
  console.log(`${key}: ${user[key]}`);
}

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

const filteredProducts = [];
const onlyElectronics = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price >= 50) {
    filteredProducts.push(products[i]);
    // filteredProducts.push(products[i].name);
  }
}
// for (let i = 0; i < products.length; i++) {
//   if (products[i].category.toLowerCase() === "electronics") {
//     onlyElectronics.push(products[i]);
//   }
// }
for (let i = 0; i < products.length; i++) {
  if (
    products[i].category.toLowerCase() === "electronics" &&
    products[i].price >= 70
  ) {
    onlyElectronics.push(products[i]);
  }
}

// console.log(filteredProducts);
console.log(onlyElectronics);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers

// numbers.length = 0;
numbers.length = 10;
// numbers.length = 3;
// console.log(numbers.length);
numbers[8] = 15;
console.log(numbers);
