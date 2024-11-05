const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// if (itCompanies.length % 2 === 1) {
//   console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
// } else {
//   console.log(
//     itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1)
//   );
// }

// #Filter out companies which have more than one 'o' without the filter method

let res = [];
for (let i = 0; i < itCompanies.length; i++) {
  if (
    itCompanies[i].toLowerCase().includes("o") &&
    itCompanies[i].toLowerCase().indexOf("o") !==
      itCompanies[i].toLowerCase().lastIndexOf("o")
  ) {
    res.push(itCompanies[i]);
  }
}

// console.log(res);

// Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir.
// Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

function joinElements(arr1, arr2, char) {
  return arr1.concat(arr2).join(char);
}

console.log(joinElements([1, 2], [3, 4], "*"));
