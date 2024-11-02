// Declaring Variables with let and const

// Using let to declare a mutable (changeable) variable
let age = 32;
console.log("Age:", age); // 32

// Modifying the value of a variable declared with let
age = 33;
console.log("Updated Age:", age); // 33

// Declaring another variable with let for a decimal value
let price = 19.99;
console.log("Price:", price); // 19.99

// Using const to declare immutable (unchangeable) constants
const gravity = 9.81; // Acceleration due to gravity (m/s^2)
console.log("Gravity:", gravity); // 9.81

const boilingPoint = 100; // Boiling point of water in Celsius
console.log("Boiling Point:", boilingPoint); // 100

const bodyTemp = 37; // Average human body temperature in Celsius
console.log("Body Temperature:", bodyTemp); // 37

const mass = 72; // Mass in kilograms
console.log("Mass:", mass); // 72

const PI = 3.14159; // Mathematical constant π
console.log("PI:", PI); // 3.14159

// Explanation of Variable Types

// Variables declared with let can be reassigned, making them ideal for values that change.
// Variables declared with const are immutable, meaning their values cannot be reassigned.
// They are suitable for constants or values that should remain fixed throughout the program, such as scientific constants.

// Example: Attempting to modify a const variable will throw an error
// Uncommenting the following line will produce an error
// gravity = 9.8; // Error: Assignment to constant variable

// Summary:
// - Use let for variables that may change over time.
// - Use const for fixed values or constants that should not change.
// - JavaScript differentiates between numbers (integers and floats) but considers them both as the number data type.
