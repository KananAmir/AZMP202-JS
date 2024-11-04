// declearation(regular);
// expression;
// arrow;

// console.log(funcName());
// function funcName() {
//   return "hello";
// }

// arrow function

// const greeting = () => {
//   return "Wellcome";
// };
// console.log(greeting());

// anonim function

// function () {

// }

// expression function

const greeting = function (user) {
  return `Hello ${user}`;
};

console.log(greeting("Shola"));

const sum = (a, b) => a + b;

console.log(sum(1, 2));

const user = {
  fName: "Jhon",
  lName: "Doe",
  email: "jhon_doe@gmail.com",
  skill: ["a", "b", "c"],
  //   getFullName: function () {
  //     return `${this.fName} ${this.lName}`;
  //   },
  getFullName: () => {
    return `${this.fName} ${this.lName}`;
  },
};

console.log(user.getFullName());
console.log(user.age);

console.log(this);

// IIFE - immediately invoked function expression

// (function () {
//   console.log("hi js");
// })();

((studentName) => {
  console.log(`Hello ${studentName}`);
})("Safar");

function sumOfAllParams(...params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    sum += params[i];
  }
  return sum;
}

console.log(sumOfAllParams(1, 2, 3));
console.log(sumOfAllParams(1, 2, 3, 4, 5));
console.log(sumOfAllParams(1, 2, 3, 4, 5, 7));
