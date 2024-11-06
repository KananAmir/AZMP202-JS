// OOP - object oriented programming

// 4 main principles : abstraction, inheritance, polymorphism, encapulation

// access modifiers: public, private, protected

//static
class User {
  // fields

  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  // methods
}

const user1 = new User("Jhon", "Doe"); //instance

// console.log(user1);
// console.log(typeof user1); //object
// console.log(typeof User); //function

// const obj = new Object(); //empty object

// let User = class {
//     sayHi() {
//       alert("Hello");
//     }
//   };

class Human {
  static id = 0;
  constructor(firstName, surName, birthDate) {
    this.firstName = firstName;
    this.surName = surName;
    this.birthDate = birthDate;
    this.id = ++Human.id;
    this._status = "offline";

    if (this.constructor === Human) {
      throw new Error("Abstract class'dan instance yarada bilməzsən!!");
    }
  }

  static greeting() {
    return "Hello!";
  }
  getFullName() {
    return `${this.firstName} ${this.surName}`;
  }

  getRole() {
    return "I am Human";
  }

  calculateAge() {
    const currentDate = new Date();
    return currentDate.getFullYear() - this.birthDate;
  }
  getStatus() {
    return this._status;
  }
  _setStatus(value) {
    this._status = value;
  }
}

// inheritance
class Teacher extends Human {
  #salary;
  constructor(firstName, surName, birthDate, position, salary) {
    super(firstName, surName, birthDate);
    this.position = position;
    this.#salary = salary;
  }

  //   method overriding
  //polymorphism
  getRole() {
    return "I am Teacher";
  }

  //   encapulation

  //   getter
  get salary() {
    return this.#salary;
  }

  //setter
  set salary(newSalary) {
    try {
      if (newSalary >= this.#salary) {
        this.#salary = newSalary;
      } else {
        throw new Error("yeni maaş əvvəlkindən çox olmalıdır!!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeStatus() {
    this._setStatus("online");
    return this._status;
  }
}
class Student extends Human {
  constructor(firstName, surName, birthDate, uniName, faculty, courseNumber) {
    super(firstName, surName, birthDate);
    this.uniName = uniName;
    this.faculty = faculty;
    this.courseNumber = courseNumber;
  }

  getRole() {
    return "I am Student";
  }

  changeStatus() {
    this._setStatus("online");
    return this._status;
  }
}
// create instance of Human class

// const human1 = new Human("Narmin", "Jabbarova", 2000);
const teacher1 = new Teacher("Kanan", "Amirov", 1800, "front end", 150);
const student1 = new Student("Rashid", "Huseynov", 1900, "Harvard", "IT", 4);
// console.log(human1);
// console.log(human1.getFullName());

console.log(teacher1);
console.log(teacher1.getFullName());
console.log(student1);
console.log(student1.getFullName());
// console.log(human1.getRole());
console.log(student1.getRole());
console.log(teacher1.getRole());

// console.log(human1.greeting());
// console.log(student1.greeting());

console.log(Human.greeting());

// teacher1.salary = 140;
teacher1.salary = 200;
console.log(teacher1.salary);
console.log(teacher1.calculateAge());
console.log(student1.calculateAge());
console.log(teacher1.changeStatus());

console.log(student1._status);
console.log(student1.changeStatus());
teacher1._status;

// try {

// } catch (error) {

// }
