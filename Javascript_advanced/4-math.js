function divideBy(firstNumber) {
    // Returns a function that takes a second number and returns the second number divided by the first number.
    return function(secondNumber) {
      return secondNumber / firstNumber;
    };
  }
  function addBy(firstNumber) {
    // Returns a function that takes a second number and returns the sum of the two numbers.
    return function(secondNumber) {
      return firstNumber + secondNumber;
    };
  }
// Closure to add 100 to a number.
const addBy100 = addBy(100);

// Closure to add 1000 to a number.
const addBy1000 = addBy(1000);

// Closure to divide a number by 10.
const divideBy10 = divideBy(10);

// Closure to divide a number by 100.
const divideBy100 = divideBy(100);
    