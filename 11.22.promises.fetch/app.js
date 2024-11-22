// promises
// sinxron vs asinxron

// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);

// promise states - pending, fulfilled, rejected

const techs = ["html", "css", "js"];
// techs.length = 0;
const myPromise = new Promise((resolve, reject) => {
  if (techs.length > 0) {
    resolve("success");
  } else {
    reject("failed");
  }
});

// console.log(myPromise);

// blocks: then, catch, finally

myPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {});

//promise chaning
const students = ["farid", "elcan", "aslan", "shola", "zeyneb"];
// students.length = 0;
const promise = new Promise((resolve, reject) => {
  if (students.length) {
    // resolve(students);
    resolve({
      data: students,
      error: null,
    });
  } else {
    reject({
      data: null,
      error: "empty",
    });
  }
});

promise
  .then((response) => {
    response.data.pop();
    return response;
  })
  .then((students) => {
    students.data.shift();
    return students;
  })
  .then((updatedStudents) => {
    console.log(updatedStudents);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("nəticədən asılı olmayaraq ən sonda işlədim!!");
  });

//callback hell

setTimeout(() => {
  console.log("1ci əməliyyat icra olundu");
  setTimeout(() => {
    console.log("2ci əməliyyat icra olundu");
    setTimeout(() => {
      console.log("3ci əməliyyat icra olundu");
      setTimeout(() => {
        console.log("4ci əməliyyat icra olundu");
        setTimeout(() => {
          console.log("5ci əməliyyat icra olundu");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

setTimeout(() => {
  console.log("a");
}, 1000);
setTimeout(() => {
  console.log("b");
}, 1000);
setTimeout(() => {
  console.log("c");
}, 1000);
