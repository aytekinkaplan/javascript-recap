// reduce
// 1. The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// 2. The reducer function takes four arguments:
// a. The accumulated value so far (previousValue)
// b. The current element being processed (currentValue)
// c. The current index (currentIndex)
// d. The source array (array)
// 3. The return value of the reducer function is the new accumulated value.

// Syntax
const arr = [1, 2, 3, 4, 5];
const initialValue = 0;
const sum = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sum); // Output: 15

// Example 1
const numbers = [1, 2, 3, 4, 5];
const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfNumbers); // Output: 15

// Example 2
const numbers2 = [1, 2, 3, 4, 5];
const productOfNumbers = numbers2.reduce((acc, cur) => acc * cur, 1);
console.log(productOfNumbers); // Output: 120

// Example 3
const numbers3 = [1, 2, 3, 4, 5];
const sumOfSquares = numbers3.reduce((acc, cur) => acc + cur * cur, 0);
console.log(sumOfSquares); // Output: 55

// Example 4
const numbers4 = [1, 2, 3, 4, 5];
const sumOfCubes = numbers4.reduce((acc, cur) => acc + cur ** 3, 0);
console.log(sumOfCubes); // Output: 225

// Example 5
const numbers5 = [1, 2, 3, 4, 5];
const productOfSquares = numbers5.reduce((acc, cur) => acc * cur * cur, 1);
console.log(productOfSquares); // Output: 3025

// Example 6
const numbers6 = [1, 2, 3, 4, 5];
const productOfCubes = numbers6.reduce((acc, cur) => acc * cur ** 3, 1);
console.log(productOfCubes); // Output: 945

// Example 7
const numbers7 = [1, 2, 3, 4, 5];
const sumOfEvenNumbers = numbers7.reduce(
  (acc, cur) => (cur % 2 === 0 ? acc + cur : acc),
  0
);
console.log(sumOfEvenNumbers); // Output: 10

// Example 8
const numbers8 = [1, 2, 3, 4, 5];
const sumOfOddNumbers = numbers8.reduce(
  (acc, cur) => (cur % 2 !== 0 ? acc + cur : acc),
  0
);
console.log(sumOfOddNumbers); // Output: 9

// Example 9
const numbers9 = [1, 2, 3, 4, 5];
const productOfEvenNumbers = numbers9.reduce(
  (acc, cur) => (cur % 2 === 0 ? acc * cur : acc),
  1
);
console.log(productOfEvenNumbers); // Output: 480

// Example 10
const numbers10 = [1, 2, 3, 4, 5];
const productOfOddNumbers = numbers10.reduce(
  (acc, cur) => (cur % 2 !== 0 ? acc * cur : acc),
  1
);
console.log(productOfOddNumbers); // Output: 60

// Example 11
const numbers11 = [1, 2, 3, 4, 5];
const sumOfPositiveNumbers = numbers11.reduce(
  (acc, cur) => (cur > 0 ? acc + cur : acc),
  0
);
console.log(sumOfPositiveNumbers); // Output: 15
