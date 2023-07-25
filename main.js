// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const stringReverser = str => {
    let reversedStr = "";

    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.charAt(i);
    }
    return reversedStr;
}

const inputValue = 'hello world';
const outputValue = stringReverser(inputValue);

