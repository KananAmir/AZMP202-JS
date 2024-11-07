// 1)
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Create an instance of the Rectangle class
const rectangle = new Rectangle(12, 10);

// Calculate area and perimeter of the rectangle
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

// Display the results
console.log(`Rectangle Area: ${area}`);
console.log(`Rectangle Perimeter: ${perimeter}`);

//   2)
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    console.log(`A/c No.: ${accountNumber}`);
    console.log(`Opening Balance: $${balance}`);
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log(`Want to withdrawn: $${amount}`);
      console.log("Insufficient balance");
    }
  }
  displayBalance() {
    console.log(`Account Balance: $${this.balance}`);
  }
}
// Create an instance of the BankAccount class
const account = new BankAccount("SB-123", 1500);
// Deposit money into the account
account.deposit(500);
// Withdraw money from the account
account.withdraw(400);
// Display the account balance
account.displayBalance();
// Withdraw money from the account
account.withdraw(1800);
// Display the account balance
account.displayBalance();

//   3)
//classes
class Human {
    age = 0;
    //properties
    constructor(name, surname, gender, nationality, age = 0) {
      this.name = name;
      this.surname = surname;
      this.gender = gender;
      this.nationality = nationality;
      this.age = age;
    }
  
    //methods
    getFullName() {
      return `${this.name} ${this.surname}`;
    }
    getBirthYear() {
      return new Date().getFullYear() - this.age;
    }
  }
  class User extends Human {
    isLogged = false;
    constructor(
      name,
      surname,
      gender,
      nationality,
      username,
      email,
      isAdmin,
      password,
      bio,
      age
    ) {
      super(name, surname, gender, nationality, age);
      this.username = username;
      this.email = email;
      this.isAdmin = isAdmin;
      if (password.length < 5) {
        window.alert("password should at least 5 chars!");
        throw new Error("password should at least 5 chars!");
      } else {
        this.password = password;
      }
      if (bio.length > 30) {
        window.alert("bio should at max 100 chars!");
        throw new Error("bio should at max 100 chars!");
      } else {
        this.bio = bio;
      }
      // this.isLogged = false;
    }
  
    //methods
    changePassword(currentPassword, newPassword) {
      if (this.password === currentPassword) {
        if (currentPassword === newPassword)
          window.alert("current password and new password are same!");
        else this.password = newPassword;
      } else {
        window.alert("current password is incorrect!");
      }
    }
    changeEmail(arr, newEmail) {
      let found = arr.find((user) => user.email === newEmail);
      if (found) {
        window.alert("email already in use!");
      } else {
        if (found.email === newEmail) {
          window.alert("new email and current email is the same");
        } else {
          found.email = newEmail;
        }
      }
    }
  }
  
  let users = [
    new User(
      "John",
      "Doe",
      "Male",
      "American",
      "johndoe",
      "john.doe@example.com",
      false,
      "password123",
      "A bit about John.",
      30
    ),
    new User(
      "Jane",
      "Doe",
      "Female",
      "British",
      "janedoe",
      "jane.doe@example.com",
      true,
      "securepassword",
      "Jane's bio goes here.",
      28
    ),
    new User(
      "Alex",
      "Smith",
      "Non-binary",
      "Canadian",
      "alexsmith",
      "alex.smith@example.com",
      false,
      "alexspassword",
      "All about Alex.",
      35
    ),
    new User(
      "Emily",
      "Clark",
      "Female",
      "Australian",
      "emilyclark",
      "emily.clark@example.com",
      false,
      "emilyspassword",
      "Explorer and photographer.",
      26
    ),
    new User(
      "Michael",
      "Brown",
      "Male",
      "German",
      "michaelbrown",
      "michael.brown@example.com",
      true,
      "michaelspass",
      "Coffee enthusiast. Avid reader.",
      32
    ),
    new User(
      "Luis",
      "Gomez",
      "Male",
      "Spanish",
      "luisgomez",
      "luis.gomez@example.com",
      false,
      "luispassword",
      "Music lover, Guitar player.",
      29
    ),
    new User(
      "Sophia",
      "Lopez",
      "Female",
      "Mexican",
      "sophialopez",
      "sophia.lopez@example.com",
      true,
      "sophiaspassword",
      "Digital marketer and content creator.",
      31
    ),
  ];
  
  //global functions
  function sortUsersByUsername(arr) {
.
  }
  function filterByBirthYear(arr, year) {
    return arr.filter((user) => user.getBirthYear() > year);
  }
  function login(arr, username, password) {
    let found = arr.find((user) => user.username === username);
    if (found) {
      if (found.username === username && found.password === password) {
        let check = arr.some((user) => user.isLogged === true);
        if (check) {
          window.alert("another user currently logged in!");
        } else {
          found.isLogged = true;
          window.alert("successfully logged in!");
        }
      } else {
        window.alert("username or password is incorrect!");
      }
    } else {
      window.alert("user not found!");
    }
  }
  function logout(arr, username) {
    let found = arr.find((user) => user.username === username);
    if (found) {
      if (found.isLogged === true) {
        window.alert("successfully logged out!");
        found.isLogged = false;
      } else {
        window.alert("user did not logged in to log out!");
      }
    } else {
      window.alert("user not found!");
    }
  }
  function createUser(arr, newUser) {
    arr.push(newUser);
  }
  function deleteUser(arr, username){
      let idx = arr.findIndex((user)=>user.username===username);
      if (idx===-1) {
          window.alert('no such user!');
      }
      else{
          arr.splice(idx,1);
          window.alert(`user deleted successfully`);
      }
  }