// primitive vs referance (nonpirimitive)

// primitive types / value base
let num = 15;
let str = "lorem ipsum dolor";

let maxValue = Number.MAX_VALUE;
let bigIntNum = 34n;

let isOnline = false;

let char = "a";
let key = Symbol("a34dsd");
// console.log(maxValue);
// console.log(num);
// console.log(typeof str);
// console.log(typeof isOnline);
// console.log(typeof isOnline);
// console.log(key);

let y;
console.log(typeof y);

let userName = null;

console.log(userName);

// NaN - not a number

console.log(typeof NaN); //number
console.log(typeof null); //object

//referance types // referance base

let student = {
  name: "Narmin",
  uniName: "AZMIU",
  fakulty: "MIT",
  skills: ["html", "css", "js"],
};

console.log(student);

const students = ["Farid", "Fatima", "Shola"];

console.log(typeof students);

// falsy value vs truth values

// falsy values: null, undefined, NaN, false, 0, -0, 0n, "", '', ``

// truth values:

// if (true)
//     if ({})
//     if ([])
//     if (42)
//     if ("0")
//     if ("false")
//     if (new Date())
//     if (-42)
//     if (12n)
//     if (3.14)
//     if (-3.14)
//     if (Infinity)
//     if (-Infinity)
