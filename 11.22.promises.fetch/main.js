// fetch

// api - application programming interface

// request
// response

// console.log(fetch("https://jsonplaceholder.typicode.com/users"));

// BASE_URL - "https://jsonplaceholder.typicode.com/"
// endpoint - "users"

// CRUD - create, read, updated, delete
// htttp request methods - get, delete, post, put, patch

const BASE_URL = "https://northwind.vercel.app/api";
fetch(`${BASE_URL}/suppliers`, { method: "GET" })
  .then((response) => {
    // console.log(response.json());
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
    // throw new Error("failed");
  });

fetch(`${BASE_URL}/customers`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
    // throw new Error("failed");
  });

//   json - javascript object notation
