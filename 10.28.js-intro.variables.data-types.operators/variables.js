let userName = "Aslan";

let email = "aslan@code.edu.az";

// let city = "Baku";
let city = "Baku";

let age = 20;

// console.log(userName);
// console.log(city);
// console.log(age);

// console.log(userName, city, age);
// console.log("I am", userName, "I am ", age, "years old.", "I live in", city);

// template strings / template litherals
let studentInfo = `I am ${userName}, I am ${age} years old. I live in ${city}.`;

console.log(studentInfo);

// let const var

// initialization
// declearment
// assignment
// redeclearment
// reassignment

let subject;

subject = "Javascript";

subject = "CSS";

console.log(subject);

// ecmascript

// global scope, local scope, function scope

// {}
// if(){}
// for(){}
// while(){}

// let/const - block scope variable
// var - function scope variable

// console.log("x", x);
let x = 5;
// let x;
// x = 5;

console.log("x", x);

// let x = 7; //Cannot redeclare block-scoped variable 'x'.

const BASE_URL = "www.test.com";

// BASE_URL = "sdasd"; //Uncaught TypeError: Assignment to constant variable.
console.log(BASE_URL);

var studentName = "Kanan Qadirov";
var studentName = "Elcan Aydamirov";

console.log(studentName);

// hoisting

// TDZ - temporal dead zone

// console.log("a", a);
// let a = 5;

// console.log("b", b);
// var b = 4;

{
  let x = 3;
  var y = 4;
}

console.log("y", y);

function sayHi() {
  console.log(`Wellcome ${user}`);
  var user = "jhon doe";
}

// console.log(user);

sayHi();

var studentScore = 96;
console.log(studentScore);

// naming conventions

// camelCase;
// PascalCase;
// snake_case;
