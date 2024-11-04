// pop, push, shift, unshift

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

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers

// numbers[1] = 50;
// console.log(numbers);

// numbers.pop()
// numbers.shift()
// numbers.push(1, 2, 4);
// numbers.unshift(1, 2, 4);
// console.log(numbers);

// console.log(numbers.length);
// console.log(numbers.toString());
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

// console.log(fruits.at(2)); //mango
// console.log(fruits[2]); //mango
// console.log(fruits[fruits.length - 1]); //lemon
// console.log(fruits.at(-1)); //lemon
// console.log(fruits.join("-"));
// console.log(fruits.join());
// console.log(fruits.join("#"));

// const vegetablesAndFruits = vegetables.concat(fruits);

// console.log(vegetablesAndFruits);

// const arr = [1, 2, [3, 4, [5, 6]]];

// console.log(arr.flat());
// console.log(arr.flat(2));

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// countries.splice(2, 1); //[ 'Finland', 'Denmark', 'Norway', 'Iceland' ]
// countries.splice(1, 3); // [ 'Finland', 'Iceland' ]
// countries.splice(1); //[ 'Finland' ]

// countries.splice(2, 0, "Turkey", "Azerbaijan"); //["Finland", "Denmark", "Turkey", "Azerbaijan", "Sweden", "Norway", "Iceland"];
// countries.splice(1, 3, "Turkey", "Azerbaijan"); //[ 'Finland', 'Turkey', 'Azerbaijan', 'Iceland' ]
const updatedCountries = countries.toSpliced(1, 3, "Turkey", "Azerbaijan"); //[ 'Finland', 'Turkey', 'Azerbaijan', 'Iceland' ]
console.log(countries);
console.log(updatedCountries);

const webTechs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "React",
  "React",
  "MongDB",
]; // array of web technologies

// const a = webTechs.splice(2, 1);

// console.log(a);
// console.log(webTechs);

// console.log(webTechs.slice());
// console.log(webTechs.slice(3));
// console.log(webTechs.slice(3, 5));

// console.log(webTechs);

// console.log(webTechs.indexOf("react")); //-1
// console.log(webTechs.indexOf("React")); //3
// console.log(webTechs.indexOf("React")); //3
// console.log(webTechs.lastIndexOf("React")); //7

// console.log(webTechs.includes("HTML")); //true
// console.log(webTechs.includes("htm")); //false

webTechs.reverse();
console.log(webTechs);

// const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products

// animalProducts.sort();

// console.log(animalProducts);

const nums = [30, 78, 222, 1000, 45, 24];
// nums.sort();
// nums.sort((a, b) => a - b); //asc
nums.sort((a, b) => b - a); //desc

console.log(nums);

// high order function
function mainFunc(cb) {
  return cb();
}

// callback function
// console.log(mainFunc(callBack));
console.log(
  mainFunc(() => {
    return "HIII";
  })
);
function callBack() {
  return "I am CB";
}

const students = ["safar", "narmin", "eljan"];

// const newStudents = students;
const newStudents = [...students];

// students.push("emin");
newStudents.push("emin");

console.log(students);
console.log(newStudents);

let firstNums = [1, 2, 3];
let secondNums = [4, 5, 6];

// let fullNums = firstNums.concat(secondNums);
let fullNums = [...firstNums, ...secondNums];

console.log(fullNums);
