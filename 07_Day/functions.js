function square() {
  let num = 5;
  return num * num;
}

console.log("Square of 5:", square()); // 25

function cube() {
  let num = 6;
  return num * num * num;
}

console.log("Cube of 6:", cube()); // 216

function add(num1, num2) {
  return num1 + num2;
}

console.log("Sum of 2 and 3:", add(2, 3)); // 5

function subtract(num1, num2) {
  return num1 - num2;
}

console.log("Difference of 10 and 5:", subtract(10, 5)); // 5

function multiply(num1, num2) {
  return num1 * num2;
}

console.log("Product of 3 and 4:", multiply(3, 4)); // 12

function divide(num1, num2) {
  return num1 / num2;
}

console.log("Quotient of 20 and 5:", divide(20, 5)); // 4

function remainder(num1, num2) {
  return num1 % num2;
}

console.log("Remainder of 10 and 3:", remainder(10, 3)); // 1

function power(num1, num2) {
  return num1 ** num2;
}

console.log("Power of 2 to the power of 3:", power(2, 3)); // 8

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

console.log("Area of a circle with radius 5:", areaOfCircle(5)); // 78.5

function printName(name) {
  console.log("Hello, " + name + "!");
}

printName("John"); // Hello, John!

function printFullName(firstName, lastName) {
  console.log("Hello, " + firstName + " " + lastName + "!");
}

printFullName("Alice", "Smith"); // Hello, Alice Smith!

// Function with multiple parameters
// Function with multiple parameters
function calculateSum(num1, num2, num3, ...rest) {
  let sum = num1 + num2 + num3;
  for (let num of rest) {
    sum += num;
  }
  return sum;
}

console.log("Sum of 1, 2, 3, 4, and 5:", calculateSum(1, 2, 3, 4, 5)); // 15
