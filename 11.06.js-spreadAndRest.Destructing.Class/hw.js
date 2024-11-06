// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin
let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqott",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "lovlle",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1)
let maxLengthElem = arr[0];
let maxLengthElemIndex = 0;
arr.forEach((item, index, arr) => {
  if (item.name.length > maxLengthElem.name.length) {
    maxLengthElem = item;
    maxLengthElemIndex = index;
  }
});

// console.log(maxLengthElem);
// console.log(maxLengthElemIndex ** 2);

// 2)
// let res = arr.reduce((acc, item, idx, arr) => {
//   if (item.name.length > arr[acc].name.length) {
//     acc = idx;
//   }
//   return acc;
// }, 0);

// console.log(res ** 2);

// 5) "name"-i en uzun olan obyekti tapin

let res = arr.reduce((acc, item, idx, arr) => {
  if (item.name.length > acc.name.length) {
    acc = item;
  }
  return acc;
});

// console.log(res);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.

// let result = arr.filter((elem) => elem.name.split("l").length === 3);

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// let result = arr.filter((elem) => elem.name.split("l").length >= 3);
let result = arr.filter(
  (elem) => elem.name.indexOf("t") !== elem.name.lastIndexOf("t")
);

console.log(result);
