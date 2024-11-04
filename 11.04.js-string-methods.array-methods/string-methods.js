let str = "Javascript";

// strings are immutable

// const nums = [1, 2, 3, 4];

// nums[1] = 222;

// console.log(nums);

// console.log(str.length);
// console.log(str.charAt(3)); //a
// console.log(str.charCodeAt(3)); // 97
// console.log(str.charCodeAt(0)); // 97
// console.log(str.at(0)); // J
// console.log(str.at(-1)); // t
// console.log(str.at(-5)); // c

// console.log(str[0]);
// console.log(str[str.length - 1]);
// console.log(str.slice()); //Javascript
// console.log(str.slice(3)); //ascript
// console.log(str.slice(-4)); //ript
// console.log(str.slice(-4, -2)); //ri

// console.log(str.slice(4, 7)); //script
// // console.log(str.substr(0, 3)); // depreciated

// console.log(str.substring());
// console.log(str.substring(4)); //script
console.log(str.substring(2, 5)); //vas
// console.log(str.toLowerCase()); //javascript
// console.log(str.toUpperCase()); //JAVASCRIPT
// console.log(str.toLocaleLowerCase()); //JAVASCRIPT
// console.log(str.toLocaleUpperCase("en")); //JAVASCRIPT
// console.log(str.toLocaleUpperCase("az")); //JAVASCRİPT

// console.log("Kanan".concat("Amirov"));
// console.log("Kanan".concat(" ", "Amirov"));

// console.log("Kanan" + " " + "Amirov");

// let fName = "Kanan";
// let lName = "Amirov";
// console.log(`${fName} ${lName}`);

// console.log("        hello             ".trimStart());
// console.log("        hello             ".trimEnd());
// console.log("        hello             ".trim());

// console.log("1234123412341234".slice(-4).padStart(16, "*"));
// console.log("1234123412341234".slice(-4).padEnd(16, "*"));

// // console.log("hello ".padEnd(20, "$"));

// console.log("a".repeat(5));

// console.log("lorem ipsum dolor ipsum ipsum".replace("ipsum", "aaa"));
// console.log("lorem ipsum dolor ipsum ipsum".replaceAll("ipsum", "aaa"));
// console.log("javascript".replace("java", "type"));

// let city = "baku";

// let strArr = city.split();

console.log("hello".split());
console.log("hello".split(""));
console.log("hello".split("e"));
console.log("lorem ipsum dolor".split(" "));

console.log("1,2,3,4,5".split(","));

const arr = [1, 2, 3, 4];
// arr.reverse();
// console.log(arr);

console.log(arr.join());
console.log(arr.join(""));

// function isPolidrom(str) {
//   return str.split("").reverse().join("") === str
//     ? `${str} is polidrom`
//     : `${str} is NOT polidrom`;
// }
// function isPolidrom(str) {
//   let reverseStr = str.split("").reverse().join("");
//   if (str === reverseStr) {
//     return "polidromdur";
//   } else {
//     return "polidrom deyil";
//   }
// }

// console.log(isPolidrom("hello")); // hello is NOT polidrom
// console.log(isPolidrom("racecar")); // hello is polidrom

// console.log("hello".indexOf("l"));
// console.log("hello".lastIndexOf("l"));

// console.log("hello world!".indexOf("l", 5));
// console.log("hello world!".indexOf("llo")); //2
// console.log("hello world!".indexOf("world")); //6
// console.log("hello world!".indexOf("eddd")); //-1

// let text = "please loCate where 7'loCate' occurs!";
// console.log(text.search("locate"));
// console.log(text.search(/[A-Z]/g));
// console.log(text.search(/[0-9]/g));

// let text = "The rain in SPAIN stays mainly in the plain";
// const myArr = text.match(/ain/);

// console.log(myArr);

let country = "azerbaijan";

console.log(country.startsWith("b"));//false
console.log(country.startsWith("a"));//true
console.log(country.startsWith("aze"));//true
console.log(country.startsWith("azer"));//true

console.log(country.endsWith("azer"));//flase
console.log(country.endsWith("jan"));//true


console.log("hello world".includes("aaa")); //false
console.log("hello world".includes("world"));//true
console.log("hello world".includes("lo"));//true
