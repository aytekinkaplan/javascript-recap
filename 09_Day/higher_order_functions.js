// Higher Order Function

// Example 1: Returning a function from a function
const callback = (n) => {
  return n ** 2;
};

const cube = (callback, n) => {
  return callback(n) * n;
};

console.log(cube(callback, 3));

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const sumArray = (arr) => {
  let sum = 0;
  const callBack = (element) => {
    sum += element;
  };
  arr.forEach(callBack);
  return sum;
};

console.log(sumArray(numbers));
