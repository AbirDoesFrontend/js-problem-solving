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

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const findMostFrequentElement = (arr) => {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]] === undefined) {
      frequency[arr[i]] = 1;
    } else {
      frequency[arr[i]]++;
    }
  }

  let mostFrequentElement;
  let highestFrequency = 0;

  for (let element in frequency) {
    if (frequency[element] > highestFrequency) {
      highestFrequency = frequency[element];
      mostFrequentElement = element;
    }
  }

  return parseInt(mostFrequentElement);
};

let inputNumbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
let outputNumber = findMostFrequentElement(inputNumbers);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumbersWithSum = (arr, target) =>{
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return []; 
}

let sortedArray = [1, 3, 6, 8, 11, 15];
let targetValue = 9;
let sortedResult = findTwoNumbersWithSum(sortedArray, targetValue);

