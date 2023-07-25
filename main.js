// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const stringReverser = (str) => {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
};

const inputValue = "hello world";
const outputValue = stringReverser(inputValue);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const positiveSummer = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

let inputArray = [2, -5, 10, -3, 7];
let result = positiveSummer(inputArray);

