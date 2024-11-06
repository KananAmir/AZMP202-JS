//rest vs spread

let str = "lorem";

// console.log(str.split(""));
// console.log(Array.from(str));
const strArr = [...str];
console.log(strArr);

const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

const vegetablesCopy = [...vegetables];

console.log(vegetablesCopy);

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const allNums = [...nums1, ...nums2];

console.log(allNums);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(...numbers));

//rest

function sumOfAllNumbers(...params) {
  return params.reduce((sum, item) => sum + item);
}

console.log(sumOfAllNumbers(1, 2));
console.log(sumOfAllNumbers(1, 2, 3));
console.log(sumOfAllNumbers(1, 2, 3, 4));
console.log(sumOfAllNumbers(1, 2, 3, 4, 5));

//destructing

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
// let h = webTechs[0];
// let c = webTechs[1];
// let r = webTechs[3];

// let [h, c, j, r] = webTechs;
// let [h, c, , r] = webTechs;
// let [h, c, , r] = webTechs;
let [h, c, j, ...restWebTechs] = webTechs;
console.log(h, c, j);
console.log(restWebTechs);

const student = {
  id: 1,
  firstName: "Sabina",
  "last name": "Cavadova",
  email: "sabina@code.edu.az",
  birthYear: 2004,
  uniInfo: {
    studentId: "azmiu123",
    uniName: "AZMIU",
    faculty: "IT",
    gpa: 3.2,
    courseNumber: 3,
  },
  skills: ["html", "css", "js"],
};

// let firstName = student.firstName;
// let studentEmail = student.email;
// let studentSkills = student.skills;

let {
  firstName,
  email: studentEmail,
  skills: bacariqlar,
  uniInfo: { gpa, uniName },
} = student;

// let { gpa, uniName } = uniInfo;

console.log(gpa, uniName);

console.log(firstName, studentEmail, bacariqlar);

//swapping

let a = 4;
let b = 3;
// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

console.log(a, b);

// shallow copy vs deep copy

const countries = [
  "Finland",
  "America",
  "Denmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
  "Albania",
];

// const countriesCopy = countries; //shallow
// const countriesCopy = countries; //shallow

// countries.pop();

// console.log(countriesCopy);

const students = [
  "khadija",
  "eljan",
  "aslan",
  { sName: "nihad", email: "nihad@gmail.com" },
];
// const studentsCopy = structuredClone(students); //deep copy
const studentsCopy = JSON.parse(JSON.stringify(students)); //deep copy

students[3].sName = "ibrahim";
// const studentsCopy = [...students]; //deep copy, birinci dereceden

studentsCopy.push("farid");

console.log("students", students);
console.log("studentsCopy", studentsCopy);

const user = {
  userName: "jhon doe",
  age: 40,
  isOnline: false,
};

const userCopy = structuredClone(user);

user.isOnline = true;

console.log("user", user);
console.log("userCopy", userCopy);
