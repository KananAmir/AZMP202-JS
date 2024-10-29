// let num = +window.prompt("enter number here!");

// console.log(typeof num);

// if(num % 2 === 0){

// }

// if (num !== 0) {
//   if (num % 2 !== 0) {
//     console.log(`${num} is ODD number`);
//   } else {
//     console.log(`${num} is EVEN number`);
//   }
// } else {
//   console.log(`${num} is zero`);
// }

// let userName = "Nihad";
// let age = 15;
// let balance = 40;
let ticketPrice = 8;

let ticketCount = 2;
const user = {
  name: "Nihad",
  age: 25,
  balance: 40,
  studentStatus: false,
};

// console.log(user.name);

if (user.age >= 18 && user.age <= 65) {
  if (!user.studentStatus) {
    if (user.balance >= ticketPrice * ticketCount) {
      // user.balance = user.balance - ticketPrice;
      user.balance -= ticketPrice * ticketCount;
      console.log(
        `${user.name}, bilet hazırdır! your balance: ${user.balance}`
      );
    }
  } else {
    if (user.balance >= ticketPrice * 0.5 * ticketCount) {
      // user.balance = user.balance - ticketPrice;
      user.balance -= ticketPrice * 0.5 * ticketCount;
      console.log(
        `${user.name}, bilet hazırdır! your balance: ${user.balance}`
      );
    }
  }
} else {
  if (user.age > 65) {
    console.log("yaşınız uyğun deyil!");
  } else {
    console.log(`${user.name} hele balacasan, boyuyende gelersen!`);
  }
}

//ternary operator

user.studentStatus === true
  ? console.log("telebedir")
  : console.log("telebe deyil");



  