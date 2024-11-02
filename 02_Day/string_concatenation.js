// Different Ways to Concatenate Strings

let space = " "; // Space for separating words
let js = "JavaScript";
let py = "Python";
let ruby = "Ruby";
let php = "PHP";

// 1. Concatenation using the + operator
console.log("I am learning " + js + "!"); // Output: I am learning JavaScript!

// 2. Concatenation using the concat() method
console.log("I am learning ".concat(js, "!")); // Output: I am learning JavaScript!

// Combining multiple strings with spaces in between
const languages = js + space + py + space + ruby + space + php;
console.log("Programming Languages:", languages); // Output: JavaScript Python Ruby PHP

// 3. Using concatenation to create a sentence with multiple languages
console.log("I am learning " + languages + "!"); // Output: I am learning JavaScript Python Ruby PHP!

// 4. Using concat() to create the same sentence
console.log("I am learning ".concat(languages, "!")); // Output: I am learning JavaScript Python Ruby PHP!

// 5. Template literals (backticks) for easier and readable concatenation
let sentence = `I am learning ${languages}!`;
console.log(sentence); // Output: I am learning JavaScript Python Ruby PHP!

// Template Literals with Variables
let firstName = "Murat";
let lastName = "Melek";
let country = "Holland";
let city = "Amsterdam";
let age = 32;
let isMarried = true;

// Using template literals to construct a detailed sentence
console.log(
  `My name is ${firstName} ${lastName}. I am from ${country}. I live in ${city}. I am ${age} years old. I am ${
    isMarried ? "married" : "single"
  }.`
);
// Output: My name is Murat Melek. I am from Holland. I live in Amsterdam. I am 32 years old. I am married.

// Explanation:

// Template literals use backticks (` `) and allow embedding variables directly using ${} syntax.
// They provide a clean and readable way to include variables within strings, especially for multi-line strings or complex concatenations.
// The ${isMarried ? "married" : "single"} part uses a conditional (ternary) operator to dynamically insert "married" or "single" based on the value of `isMarried`.

// Summary of String Concatenation Methods:
// - The + operator: simple and commonly used but can get lengthy with multiple variables.
// - The concat() method: explicitly combines strings but is more commonly used for shorter strings.
// - Template literals: best for readability, especially when combining multiple variables or creating multi-line strings.
