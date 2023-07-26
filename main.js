// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const stringReverser = str => {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
};

const inputValue = "hello world";
const outputValue = stringReverser(inputValue);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const positiveSummer = arr => {
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

const findMostFrequentElement = arr => {
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

const findTwoNumbersWithSum = (arr, target) => {
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
};

let sortedArray = [1, 3, 6, 8, 11, 15];
let targetValue = 9;
let sortedResult = findTwoNumbersWithSum(sortedArray, targetValue);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculate = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Error: Division by zero is not allowed.";
    }
    return num1 / num2;
  } else {
    return "Error: Invalid operator. Please use one of +, -, *, or /.";
  }
};

let number1 = 5;
let number2 = 3;
let operator = "+";

let resultNum = calculate(number1, number2, operator);

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = length => {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
};

let passwordLength = 12;
let randomPassword = generateRandomPassword(passwordLength);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = romanNumeral => {
  const romanNumeralsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentChar = romanNumeral[i];
    const nextChar = romanNumeral[i + 1];

    if (romanNumeralsMap[currentChar] < romanNumeralsMap[nextChar]) {
      result -= romanNumeralsMap[currentChar];
    } else {
      result += romanNumeralsMap[currentChar];
    }
  }

  return result;
};

let romanNumeralString = "IV";
let integerValue = romanToInt(romanNumeralString);

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = arr => {
  if (arr.length < 2) {
    return "Error: Array must contain at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "Error: All elements in the array are the same.";
  }

  return secondSmallest;
};

let numbersArray = [5, 2, 8, 1, 9, 3];
let secondSmallestNumber = findSecondSmallest(numbersArray);
