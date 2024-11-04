// Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])); // true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])); // false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])); // false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])); // true

// 11. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'Example:

function convert(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}
// console.log(convert("SAlamNecesEN")); //SAlAMnECESEN

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın

// output: ["FIN", "DEN", "SWE", "NOR", "ICE"];

function getAbbreviation(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i][0] + arr[i][1] + arr[i][2];
    result.push(str.toUpperCase());
  }

  return result;
}

// console.log(getAbbreviation(countries));

// Write a method that returns a duplicate-free array.

// const clearDuplicate = (arr) => [...new Set(arr)];

const clearDuplicate = (arr) => {
  const result = [1, 2];

  for (let i = 0; i < arr.length; i++) {
    let isDublicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDublicate = true;
        break;
      }
    }

    if (!isDublicate) {
      result.push(arr[i]);
    }
  }

  return result;
};

// console.log(clearDuplicate([1, 2, 1, 2, 3])); // [1, 2, 3]
// console.log(clearDuplicate(["a", 2, "d", 2, "a", 14, 14, "s", false])); // ['a', 2, 'd', 14, 's', false]

// 4.Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

// Expected Output:
// "A Short Sentence"

function sentenceCapitalization(sentence) {
  let result = "";
  let newWord = true;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && newWord === true) {
      result += sentence[i].toUpperCase();
      newWord = false;
    } else {
      result += sentence[i];
    }

    if (sentence[i] === " ") {
      newWord = true;
    }
  }
  return result;
}

// console.log(sentenceCapitalization("short sentence lorem ipsum"));

const moveElement = (arr, currentIndex, newIndex) => {
  if (
    currentIndex >= arr.length ||
    currentIndex < 0 ||
    newIndex >= arr.length ||
    newIndex < 0
  ) {
    return "Daxil etdiyiniz indexlər invaliddir!";
  }

  const element = arr[currentIndex];

  if (currentIndex < newIndex) {
    for (let i = currentIndex; i < newIndex; i++) {
      arr[i] = arr[i + 1];
    }
    arr[newIndex] = element;
  } else {
    for (let i = currentIndex; i > newIndex; i--) {
      arr[i] = arr[i - 1];
    }
    arr[newIndex] = element;
  }

  return arr;
};
console.log(moveElement(["a", "b", "c", "d"], 1, 3)); // ["a", "c", "d", "b"]

console.log(moveElement([10, 20, 30, 40, 50], 0, 2)); //[ 20, 30, 10, 40, 50 ]
console.log(moveElement([10, 20, 30, 40, 50], 2, 4)); //[ 10, 20, 40, 50, 30 ]
console.log(moveElement([10, 20, 30, 40, 50], 4, 0)); //[ 50, 10, 20, 30, 40 ]
