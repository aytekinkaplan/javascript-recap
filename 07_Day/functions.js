// Function to calculate the square of a number
function square() {
  let num = 5;
  return num * num;
}
console.log("Square of 5:", square()); // 25

// Function to calculate the cube of a number
function cube() {
  let num = 6;
  return num * num * num;
}
console.log("Cube of 6:", cube()); // 216

// Function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}
console.log("Sum of 2 and 3:", add(2, 3)); // 5

// Function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}
console.log("Difference of 10 and 5:", subtract(10, 5)); // 5

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}
console.log("Product of 3 and 4:", multiply(3, 4)); // 12

// Function to divide two numbers
function divide(num1, num2) {
  return num1 / num2;
}
console.log("Quotient of 20 and 5:", divide(20, 5)); // 4

// Function to find the remainder of a division
function remainder(num1, num2) {
  return num1 % num2;
}
console.log("Remainder of 10 and 3:", remainder(10, 3)); // 1

// Function to calculate power
function power(num1, num2) {
  return num1 ** num2;
}
console.log("Power of 2 to the power of 3:", power(2, 3)); // 8

// Function to calculate the area of a circle
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}
console.log("Area of a circle with radius 5:", areaOfCircle(5)); // 78.5

// Function to print a greeting with a name
function printName(name) {
  console.log("Hello, " + name + "!");
}
printName("John"); // Hello, John!

// Function to print a greeting with a full name
function printFullName(firstName, lastName) {
  console.log("Hello, " + firstName + " " + lastName + "!");
}
printFullName("Alice", "Smith"); // Hello, Alice Smith!

// Function with multiple parameters and rest parameters to calculate the sum
function calculateSum(num1, num2, num3, ...rest) {
  let sum = num1 + num2 + num3;
  for (let num of rest) {
    sum += num;
  }
  return sum;
}
console.log("Sum of 1, 2, 3, 4, and 5:", calculateSum(1, 2, 3, 4, 5)); // 15

// Function to sum all numbers using the rest parameter and reduce
function sumAllNumbers(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of all numbers:", sumAllNumbers(1, 2, 3, 4, 5)); // 15

// Arrow function to multiply two numbers
const multiplyArrow = (num1, num2) => num1 * num2;
console.log("Product of 3 and 4:", multiplyArrow(3, 4)); // 12

// Arrow function to add two numbers
const addArrow = (num1, num2) => num1 + num2;
console.log("Sum of 2 and 3:", addArrow(2, 3)); // 5

// Arrow function to subtract two numbers
const subtractArrow = (num1, num2) => num1 - num2;
console.log("Difference of 10 and 5:", subtractArrow(10, 5)); // 5

// Arrow function to divide two numbers
const divideArrow = (num1, num2) => num1 / num2;
console.log("Quotient of 20 and 5:", divideArrow(20, 5)); // 4

// Arrow function to find the remainder
const remainderArrow = (num1, num2) => num1 % num2;
console.log("Remainder of 10 and 3:", remainderArrow(10, 3)); // 1

// Arrow function to calculate power
const powerArrow = (num1, num2) => num1 ** num2;
console.log("Power of 2 to the power of 3:", powerArrow(2, 3)); // 8

// Function to calculate factorial of a number
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5)); // 120

// Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log("Is 4 even?", isEven(4)); // true

// Function to check if a number is odd
function isOdd(num) {
  return num % 2 !== 0;
}
console.log("Is 7 odd?", isOdd(7)); // true

// Function to find the maximum of two numbers
function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log("Max of 5 and 10:", max(5, 10)); // 10

// Function to find the minimum of two numbers
function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
console.log("Min of 5 and 10:", min(5, 10)); // 5

// Function to calculate the average of numbers
function average(...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
console.log("Average of 2, 4, 6:", average(2, 4, 6)); // 4

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reverse of 'hello':", reverseString("hello")); // 'olleh'

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log("30°C in Fahrenheit:", celsiusToFahrenheit(30)); // 86

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log("86°F in Celsius:", fahrenheitToCelsius(86)); // 30

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("Is 'madam' a palindrome?", isPalindrome("madam")); // true

// Function to find the square root of a number
function squareRoot(num) {
  return Math.sqrt(num);
}
console.log("Square root of 16:", squareRoot(16)); // 4

// Function to calculate the hypotenuse of a right triangle
function hypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}
console.log("Hypotenuse of sides 3 and 4:", hypotenuse(3, 4)); // 5

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("Capitalized words:", capitalizeWords("hello world")); // 'Hello World'

// Optional chaining examples
let person1 = {
  name: "Ali",
  address: {
    street: {
      name: "Atatürk Caddesi",
    },
  },
};
let name1 = person1?.address?.street?.name;
console.log(name1); // "Atatürk Caddesi"

// Optional chaining with missing properties
let person2 = {
  name: "Veli",
  address: {}, // Missing street
};
let name2 = person2?.address?.street?.name;
console.log(name2); // undefined

// Optional chaining with null object
let person3 = null;
let name3 = person3?.address?.street?.name;
console.log(name3); // undefined

// Nullish coalescing examples
let person4 = null;
let name4 = person4?.name ?? "Unknown";
console.log(name4); // "Unknown"

// Nullish coalescing with defined but empty name
let person5 = {
  name: "",
};
let name5 = person5?.name ?? "Unknown";
console.log(name5); // "" (empty string is returned)
