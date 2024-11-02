// Using the Math object in JavaScript
// Math is a built-in object in JavaScript that has properties and methods for mathematical constants and functions.

// Constants
const PI = Math.PI;
console.log("Value of PI:", PI); // 3.141592653589793

const E = Math.E;
console.log("Euler's number (e):", E); // 2.718281828459045

// Rounding Methods
console.log("Rounding 9.81:", Math.round(9.81)); // 10 - rounds to nearest integer
console.log("Floor of 9.81:", Math.floor(9.81)); // 9 - rounds down
console.log("Ceil of 9.81:", Math.ceil(9.81)); // 10 - rounds up
console.log("Truncate 9.81:", Math.trunc(9.81)); // 9 - removes the decimal part

// Absolute Value
console.log("Absolute of -9.81:", Math.abs(-9.81)); // 9.81

// Square Root
console.log("Square root of 9:", Math.sqrt(9)); // 3
console.log("Square root of 9.81:", Math.sqrt(9.81)); // ~3.13

// Exponentiation
console.log("2 to the power of 3:", Math.pow(2, 3)); // 8 - same as 2 ** 3

// Random Numbers
console.log("Random number between 0 and 1:", Math.random()); // random decimal between 0 and 1
console.log("Random number between 0 and 100:", Math.random() * 100); // random decimal between 0 and 100

// Generating random integers within specific ranges
console.log(
  "Random integer between 0 and 100:",
  Math.floor(Math.random() * 100)
); // integer between 0 and 100
console.log(
  "Random integer between 50 and 150:",
  Math.floor(Math.random() * 100 + 50)
); // integer between 50 and 150
console.log(
  "Random integer between 50 and 100:",
  Math.floor(Math.random() * 50 + 50)
); // integer between 50 and 100

// Minimum and Maximum Values
console.log("Minimum of 10, 20, 30:", Math.min(10, 20, 30)); // 10
console.log("Maximum of 10, 20, 30:", Math.max(10, 20, 30)); // 30

// Trigonometric Functions (expect radians as input)
// In JavaScript, trigonometric functions use radians instead of degrees.
// To convert degrees to radians, multiply by (Math.PI / 180).
const degrees = 30;
const radians = degrees * (Math.PI / 180); // Convert degrees to radians

console.log("Sine of 30 degrees:", Math.sin(radians)); // 0.5
console.log("Cosine of 30 degrees:", Math.cos(radians)); // ~0.866
console.log("Tangent of 30 degrees:", Math.tan(radians)); // ~0.577

// Inverse Trigonometric Functions
console.log("Arctan of 1:", Math.atan(1)); // 0.7853981633974483 (π/4 radians or 45 degrees)
console.log("Arctan2 of (1, 1):", Math.atan2(1, 1)); // 0.7853981633974483 (π/4 radians)

// Additional Mathematical Operations
console.log("Square root of 2:", Math.sqrt(2)); // 1.4142135623730951
console.log("2 to the power of 3 (using ** operator):", 2 ** 3); // 8 - equivalent to Math.pow(2, 3)

// Logarithmic Functions
console.log("Natural log of E:", Math.log(Math.E)); // 1
console.log("Log base 10 of 1000:", Math.log10(1000)); // 3 - log base 10 of 1000 is 3
console.log("Log base 2 of 8:", Math.log2(8)); // 3 - log base 2 of 8 is 3

// Exponential Functions
console.log("e^2:", Math.exp(2)); // ~7.389 - the value of e^2

// Example combining random numbers with floor to create a custom range function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random integer between 5 and 15:", getRandomInt(5, 15)); // any integer between 5 and 15

// Summary of Common Math Methods
// Math.PI, Math.E - Constants
// Math.round(), Math.floor(), Math.ceil(), Math.trunc() - Rounding methods
// Math.abs(), Math.sqrt(), Math.pow() - Absolute, square root, exponentiation
// Math.random() - Random number generation
// Math.min(), Math.max() - Finding min and max
// Trigonometric methods: Math.sin(), Math.cos(), Math.tan()
// Inverse trigonometric methods: Math.atan(), Math.atan2()
// Logarithmic and exponential: Math.log(), Math.log10(), Math.exp()
