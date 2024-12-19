"use strict";

// Array constructor with length
const arr = Array(3); // Creates an array with 3 empty slots
console.log(arr); // [ <3 empty items> ]
console.log(arr.length); // 3

// Array.of method
const arr2 = Array.of(3); // Creates an array with a single element: 3
console.log(arr2); // [ 3 ]
console.log(arr2.length); // 1

// Array with fill method
const arr3 = Array(3).fill(3); // Creates an array of length 3 and fills it with the value 3
console.log(arr3); // [ 3, 3, 3 ]
console.log(arr3.length); // 3

// Standard array initialization
const arr4 = [1, 2, 3]; // Creates an array with specific values
console.log(arr4); // [ 1, 2, 3 ]

// Array.from examples
const arr5 = Array.from("hello"); // Converts a string into an array of characters
console.log(arr5); // [ 'h', 'e', 'l', 'l', 'o' ]

const arr6 = Array.from([1, 2, 3], (x) => x * 2); // Creates a new array by mapping each element
console.log(arr6); // [ 2, 4, 6 ]

const arr7 = Array.from({ length: 3 }, (_, i) => i + 1); // Creates an array [1, 2, 3] using a generator
console.log(arr7); // [ 1, 2, 3 ]

const arr8 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)); // Generates an array of random numbers
console.log(arr8); // Example: [ 7, 4, 9 ]

// Math.max and Math.min with the spread operator
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log(Math.max(...numbers)); // 100
console.log(Math.min(...numbers)); // 0

// Array reduce for summation
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 248.55

// Array slice examples
const fruits = ["apple", "banana", "orange", "watermelon", "kiwi", "mango"];
console.log(fruits.slice(0, 2)); // [ 'apple', 'banana' ]
console.log(fruits.slice(-2)); // [ 'kiwi', 'mango' ]

// Concatenation with spread operator
const vegetables = [
  "carrot",
  "potato",
  "tomato",
  "onion",
  "cucumber",
  "lettuce",
];
const allFruits = [...fruits, ...vegetables];
console.log(allFruits); // Combined array of fruits and vegetables

// Sorting arrays
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
console.log(webTechs.sort()); // Alphabetical order

const countries = [
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
  "Estonia",
  "Russia",
];
console.log(countries.sort((a, b) => a.localeCompare(b))); // Locale-aware sorting

// String manipulation
let js = "JavaScript";
console.log(js.split("")); // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", ")); // Splits by comma and space

// Checking array existence
const names = ["Murat", "Hakan", "Furkan", "Mehmet", "Ali"];
console.log(Array.isArray(names)); // true
console.log(Array.isArray("Hello")); // false

// Using map for transformations
const capitals = ["Sarajevo", "Paris", "Berlin", "Rome", "Madrid"];
const firstLetters = capitals.map((capital) => capital[0]);
console.log(firstLetters); // [ 'S', 'P', 'B', 'R', 'M' ]

// Joining arrays into strings
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.join(" - ")); // "1 - 2 - 3 - 4 - 5"

// Slice method examples
const farEastCapitals = [
  "Tokyo",
  "Beijing",
  "Seoul",
  "Taipei",
  "Ulaanbaatar",
  "Astana",
];
console.log(farEastCapitals.slice(-3)); // Last three items

// Splice method examples
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies.splice(1, 3)); // Removes and returns 3 items starting at index 1

// Array includes
console.log(itCompanies.includes("Google")); // false (already spliced out!)

// Push and pop
const itCompanies2 = ["Facebook", "Google", "Microsoft"];
itCompanies2.push("Tesla");
console.log(itCompanies2); // Adds Tesla to the array

itCompanies2.pop();
console.log(itCompanies2); // Removes the last element

// Unshift and shift
itCompanies2.unshift("Amazon");
console.log(itCompanies2); // Adds Amazon to the start

itCompanies2.shift();
console.log(itCompanies2); // Removes the first element
