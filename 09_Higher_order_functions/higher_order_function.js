// Higher order functions
// A callback function that squares a number
const callback = (n) => {
  return n * n;
};

// A function that calculates the cube using a callback
const cube = (callback, n) => {
  return callback(n) * n;
};

console.log(cube(callback, 3)); // Output: 27

// A separate square function for demonstration
const square = (n) => {
  return n * n;
};

console.log(cube(square, 3)); // Output: 27

// forEach - Iterates through each element in the array
const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element); // Outputs each element: 1, 2, 3, 4, 5
});

// map - Creates a new array by applying a function to each element
const arr2 = [1, 2, 3, 4, 5];
const arr3 = arr2.map((element) => element * 2);
console.log(arr3); // Output: [2, 4, 6, 8, 10]

// filter - Filters elements based on a condition
const arr4 = [1, 2, 3, 4, 5];
const arr5 = arr4.filter((element) => element % 2 === 0);
console.log(arr5); // Output: [2, 4]

// reduce - Reduces the array to a single value
const arr6 = [1, 2, 3, 4, 5];
const arr7 = arr6.reduce((acc, element) => acc + element, 0);
console.log(arr7); // Output: 15

// find - Finds the first element that matches the condition
const arr8 = [1, 2, 3, 4, 5];
const arr9 = arr8.find((element) => element % 2 === 0);
console.log(arr9); // Output: 2

// findIndex - Finds the index of the first element that matches the condition
const arr10 = [1, 2, 3, 4, 5];
const arr11 = arr10.findIndex((element) => element % 2 === 0);
console.log(arr11); // Output: 1

// some - Checks if at least one element satisfies the condition
const arr12 = [1, 2, 3, 4, 5];
const arr13 = arr12.some((element) => element % 2 === 0);
console.log(arr13); // Output: true

// every - Checks if all elements satisfy the condition
const arr14 = [1, 2, 3, 4, 5];
const arr15 = arr14.every((element) => element % 2 === 0);
console.log(arr15); // Output: false

// sort - Sorts the array based on the comparator function
const arr16 = [5, 3, 1, 4, 2];
const arr17 = arr16.sort((a, b) => a - b);
console.log(arr17); // Output: [1, 2, 3, 4, 5]

// reverse - Reverses the array
const arr18 = [1, 2, 3, 4, 5];
const arr19 = arr18.reverse();
console.log(arr19); // Output: [5, 4, 3, 2, 1]

// join - Joins array elements into a string
const arr20 = [1, 2, 3, 4, 5];
const arr21 = arr20.join(" - ");
console.log(arr21); // Output: "1 - 2 - 3 - 4 - 5"

// split - Splits a string into an array
const arr22 = "1 - 2 - 3 - 4 - 5";
const arr23 = arr22.split(" - ");
console.log(arr23); // Output: ["1", "2", "3", "4", "5"]

// slice - Returns a shallow copy of a portion of the array
const arr24 = [1, 2, 3, 4, 5];
const arr25 = arr24.slice(1, 4);
console.log(arr25); // Output: [2, 3, 4]

// splice - Removes and/or adds elements to the array
const arr26 = [1, 2, 3, 4, 5];
const arr27 = arr26.splice(1, 3); // Removes 3 elements starting at index 1
console.log(arr27); // Output: [2, 3, 4]
console.log(arr26); // Output: [1, 5]

// concat - Concatenates two arrays
const arr28 = [1, 2, 3, 4, 5];
const arr29 = [6, 7, 8, 9, 10];
const arr30 = arr28.concat(arr29);
console.log(arr30); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// includes - Checks if an array includes a certain value
const arr31 = [1, 2, 3, 4, 5];
const arr32 = arr31.includes(3);
console.log(arr32); // Output: true

// indexOf - Returns the first index of a value
const arr33 = [1, 2, 3, 4, 5];
const arr34 = arr33.indexOf(3);
console.log(arr34); // Output: 2

// lastIndexOf - Returns the last index of a value
const arr35 = [1, 2, 3, 4, 5, 3];
const arr36 = arr35.lastIndexOf(3);
console.log(arr36); // Output: 5

// push - Adds elements to the end of the array
const arr37 = [1, 2, 3, 4, 5];
const arr38 = arr37.push(6);
console.log(arr38); // Output: 6 (new length of the array)
console.log(arr37); // Output: [1, 2, 3, 4, 5, 6]

// pop - Removes the last element of the array
const arr39 = [1, 2, 3, 4, 5];
const arr40 = arr39.pop();
console.log(arr40); // Output: 5 (removed element)
console.log(arr39); // Output: [1, 2, 3, 4]
