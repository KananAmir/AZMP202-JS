// implicit (automatic) and explicit (manual) type conversions

let a = "" + 3;
let b = "abc" + 3;
// console.log(a);
// console.log(b);
// console.log(typeof a);

// console.log(typeof ("" + true));
// console.log(typeof ("" + undefined));
// console.log(typeof (7 + ""));
// console.log(null + "");

// console.log(3 + "7"); // 37
// console.log("2" + "4"); //24
// console.log("2" + 4); //24

console.log("----------------------");

// let number = +"5";

// console.log(number);
// console.log(typeof number);

// console.log(3 + true); // 4
// console.log(true + 56); // 57
// console.log(false + 4); //4
// console.log(2 + false); //2
// console.log(33 + null); // 33

// console.log(33 + undefined); // NaN
// console.log(33 + NaN); // NaN

// console.log(4 - "3"); // 1
// console.log(4 * "10"); // 40
// console.log(4 / "10"); //0.4
// console.log(4 + "10"); //410

// console.log(3 * "salam"); //NaN
// console.log("a" / 15); // NaN
// console.log("a" - "b"); //NaN

console.log(!!"hello"); //true
console.log(!!""); //false
console.log(!!" "); //true
console.log(!!null); //false

// Explicit type conversions

console.log(Number("a")); //NaN
console.log(Number("4")); // 4
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(NaN)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(32 / 0); // infinity
console.log(typeof 32 / 0); // NaN

console.log("----------------------");

console.log(isNaN("34")); //false
console.log(isNaN("a5")); //true
console.log(isNaN(null)); //false
console.log(isNaN(undefined)); //true
console.log(isNaN(NaN)); // true
console.log(isNaN(3 - "hello")); // true

console.log(parseInt(123)); //123
console.log(parseInt("123")); //123
console.log(parseInt(12.345)); //12
console.log(parseInt("12.345")); //12
console.log(parseInt("12.345abc")); //12
console.log(parseInt("122abc2")); //12
console.log(Number("122abc")); //NaN
console.log(parseInt("abc12.345")); //NaN

console.log(parseInt(1000, 2)); // 8
console.log(parseInt(1000, 8)); //512
console.log(parseInt(1000, 10)); //10
console.log(parseInt(1000, 16)); // 4
console.log(parseInt("ff", 16)); // 255
console.log(parseInt("f", 16)); // 15
console.log(parseFloat("121.23123")); // 121.23123
console.log(parseFloat("121.231asdasd")); // 121.23123
console.log(parseFloat("asasa121.231")); // NaN

let n = 123.456;
console.log(+n.toFixed()); // 123
console.log(n.toFixed(2)); // 123.46
console.log(n.toFixed(5)); // 123.4600

console.log(String(5));
console.log(String(true));
console.log(String(5 - "a"));
console.log(String(null));

console.log(Boolean(1)); //true
console.log(Boolean("1")); //true
console.log(Boolean("0")); //true
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
