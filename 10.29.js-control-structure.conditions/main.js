//switch case

let weekDay = +prompt("enter weekday!");

// switch (weekDay) {
//   case 1:
//     console.log("today is Monday!");
//     break;
//   case 2:
//     console.log("today is Tuesday!");
//     break;
//   case 3:
//     console.log("today is Wednesday!");
//     break;
//   case 4:
//     console.log("today is Thursday!");
//     break;
//   case 5:
//     console.log("today is Friday!");
//     break;
//   case 6:
//     console.log("today is Saturday!");
//     break;
//   case 7:
//     console.log("today is Sunday!");
//     break;

//   default:
//     console.log(`${weekDay} is not a valid week day!`);

//     break;
// }
switch (weekDay) {
  case 1:
    console.log("today is Monday!");
    break;
  case 2:
    console.log("today is Tuesday!");
    break;
  case 3:
    console.log("today is Wednesday!");
    break;
  case 4:
    console.log("today is Thursday!");
    break;
  case 5:
    console.log("today is Friday!");
    break;
  case 6:
  case 7:
    // if (weekDay === 6) {

    // }else{

    // }
    console.log("today is Weekend!");
    break;

  default:
    console.log(`${weekDay} is not a valid week day!`);

    break;
}

let num1 = +prompt("first number");
let num2 = +prompt("second number");
let operator = prompt("enter operator to calculate");

let result = 0;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;

  default:
    alert("operator is not correct!");
    break;
}

alert(`RESULT: ${result}`);
