// function sum(a, b) {
//   return a + b;
// }

import BASE_URL, { endpoints } from "./contants.js";

// async await
// async function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2)); //promise

// sum(1, 2).then((res) => {
//   console.log(res);
// });

async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}/products`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally block worked");
  }
}
async function deleteData(id) {
  const response = await axios.delete(`${BASE_URL}/products/${id}`);
  console.log(response.data);
}

getAllData();
