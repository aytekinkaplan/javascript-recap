// Example 1: Checking if a number is positive, negative, or zero
let num = -4; // Initialize with a negative value

if (num > 0) {
  console.log("Positive number"); // Executes if num is greater than 0
} else if (num < 0) {
  console.log("Negative number"); // Executes if num is less than 0
} else {
  console.log("Zero"); // Executes if num is exactly 0
}

// Example 2: Another number check with a variable 'a' and handling different cases
let a = 34;

if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a === 0) {
  console.log("Zero");
} else {
  console.log(`${a} is not a number`);
}

// Example 3: Using switch-case to check the state of variable `b`
let b = 56;

switch (true) {
  case b > 0:
    console.log(`${b} is a positive number`);
    break;
  case b < 0:
    console.log(`${b} is a negative number`);
    break;
  case b === 0:
    console.log("Zero");
    break;
  default:
    console.log(`${b} is not a number`);
}

// Example 4: Using a ternary operator for checking a boolean condition
let isRaining = true;

console.log(isRaining ? "It's raining" : "It's not raining"); // Output based on isRaining's value
isRaining = false;
console.log(isRaining ? "It's raining" : "It's not raining");

// Example 5: Checking if a number is positive, negative, or zero
let c = 0;

if (c > 0) {
  console.log(`${c} is a positive number`);
} else if (c < 0) {
  console.log(`${c} is a negative number`);
} else {
  console.log("Zero");
}

// Example 6: Using logical operators for more complex checks
let x = 5;
let y = 15;

if (x > 0 && y > 0) {
  console.log("Both x and y are positive numbers");
} else {
  console.log("One or both numbers are non-positive");
}

// Example 7: Ternary operator to check if a number is even or odd
let number = 7;
console.log(number % 2 === 0 ? "Even" : "Odd");

// Example 8: Nested if-else to check multiple conditions
let score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else if (score >= 50) {
  console.log("Average");
} else {
  console.log("Fail");
}

// Example 9: Switch-case for specific days of the week
let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Wednesday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Not a valid day");
}

// Example 10: Using multiple conditions with the ternary operator
let age = 20;
let isAdult = age >= 18 ? "Adult" : "Not an adult";
console.log(isAdult);

// Example 11: Using modulo operator in an if-else structure
let n = 10;

if (n % 2 === 0) {
  console.log(`${n} is even`);
} else {
  console.log(`${n} is odd`);
}

// Example 12: Multiple variable comparison using logical operators
let height = 170;
let weight = 65;

if (height >= 150 && weight >= 50) {
  console.log("You meet the height and weight requirements");
} else {
  console.log("You do not meet the requirements");
}

// Example 13: Using nested ternary operators
let temperature = 30;

let weatherStatus =
  temperature > 30
    ? "Hot"
    : temperature >= 20
    ? "Warm"
    : temperature >= 10
    ? "Cool"
    : "Cold";
console.log(weatherStatus);

// Example 14: Using conditions with string comparison
let username = "admin";

if (username === "admin") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Example 15: Simple true/false check
let hasLicense = true;

console.log(hasLicense ? "You can drive" : "You cannot drive");

// Example 16: Switch-case for season names
let season = "winter";

switch (season) {
  case "spring":
    console.log("Flowers are blooming");
    break;
  case "summer":
    console.log("It's hot outside");
    break;
  case "autumn":
    console.log("Leaves are falling");
    break;
  case "winter":
    console.log("It's cold");
    break;
  default:
    console.log("Unknown season");
}

// Example 17: Using comparison in a function with ternary operator
function checkEligibility(age) {
  return age >= 18 ? "Eligible" : "Not eligible";
}

console.log(checkEligibility(17)); // Not eligible
console.log(checkEligibility(18)); // Eligible

// Example 18: Simple calculation check
let Width = 20;
let Height = 25;
let area = Width * Height;

console.log(area > 200 ? "Large area" : "Small area");

// Example 19: Checking a numeric range
let mark = 78;

if (mark >= 90 && mark <= 100) {
  console.log("A grade");
} else if (mark >= 80 && mark < 90) {
  console.log("B grade");
} else if (mark >= 70 && mark < 80) {
  console.log("C grade");
} else {
  console.log("Fail");
}

// Example 20: Boolean check with a ternary operator
let isOnline = false;

console.log(isOnline ? "User is online" : "User is offline");
