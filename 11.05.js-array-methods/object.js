//object litheral
// const obj = {};

// const user = {
//   fName: "jhon",
//   lName: "doe",
// };

// Object constructure

const obj = new Object();

console.log(obj);

function Human(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const person1 = new Human("Elcan", "Aydamirov", 20);
const person2 = new Human("Aslan", "Mammadov", 20);

const people = [];
people.push(person1, person2);
console.log(people);

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
  getFullName: function () {
    return "I am " + this.firstName + " " + this["last name"];
  },
  //   getFullName() {
  //     return `I am ${this.firstName} ${this["last name"]}`;
  //   },
  //   getFullName: () => {
  //     return `I am ${this.firstName} ${this["last name"]}`;
  //   },
  calculateAge: function () {
    return 2024 - this.birthYear;
  },
};

console.log(student.getFullName());
student.uniInfo.faculty = "MIT";

student.hobbies = ["sleeping", "reading"];
console.log(student.studentName);
console.log(student["last name"]);
console.log(student["email"]);
console.log(student["uniInfo"]);

student["last name"] = "Javadova";
delete student.email;
console.log(student);

for (key in student) {
  //   console.log(key);
  //   console.log(student[key]);
  console.log(`${key}: ${student[key]}`);
}

console.log(student.calculateAge());
