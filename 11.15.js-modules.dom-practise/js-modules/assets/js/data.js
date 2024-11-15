//named export
// export const students = ["eljan", "safar", "farid", "nihad"];

// export const BASE_URL = "www.api-url.com";

const students = ["eljan", "safar", "farid", "nihad"];

const users = ["jhon", "jimmi"];
const BASE_URL = "www.api-url.com";

//default export

// export default function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

export { students, BASE_URL, users };

export default sum;
