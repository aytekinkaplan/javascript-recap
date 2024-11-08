// Booleans

// Booleans have two values: `true` and `false`. Using `===`, we compare `lightOn` (true) and `lightOff` (false).
// Since they have different boolean values, the comparison returns false.

let isLightOn = true; // Boolean representing whether the light is on
let isRaining = false; // Boolean representing if it is raining
let isHungry = false; // Boolean representing if someone is hungry
let isMarried = true; // Boolean representing marital status
let truValue = 4 > 3; // true - Comparison that evaluates to true
let falseValue = 4 < 3; // false - Comparison that evaluates to false

// Variables without initialization or with null values
let firstName; // Undefined variable
console.log(firstName); // Outputs undefined as it has not been assigned a value

let empty = null; // Variable with a null value
console.log(empty); // Outputs null

// Arithmetic Operators
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo; // Addition of two numbers
let diff = numOne - numTwo; // Subtraction of two numbers
let mult = numOne * numTwo; // Multiplication of two numbers
let div = numOne / numTwo; // Division of two numbers
let remainder = numOne % numTwo; // Remainder of division
let powerOf = numOne ** numTwo; // Exponentiation (numOne to the power of numTwo)

console.log(sum, diff, mult, div, remainder, powerOf); // Outputs: 7, 1, 12, 1.3333..., 1, 64

// Constants and calculations related to circles
const PI = 3.14;
console.log(PI); // Outputs the value of PI

let radius = 5; // Example radius for calculations
const areaOfCircle = PI * (radius ** 2); // Area of a circle formula: πr^2
console.log(areaOfCircle); // Outputs the area of the circle

const circumferenceOfCircle = 2 * PI * radius; // Circumference formula: 2πr
console.log(circumferenceOfCircle); // Outputs the circumference of the circle

// Calculating weight using gravity
const gravity = 9.81; // Acceleration due to gravity in m/s^2
let mass = 72; // Example mass in kg
let weight = mass * gravity; // Weight formula: mass * gravity
console.log(weight); // Outputs the weight

// Temperature comparisons
const boilingPoint = 100; // Boiling point of water in °C
const bodyTemp = 37; // Normal human body temperature in °C
const freezingPoint = 0; // Freezing point of water in °C
const isBoiling = bodyTemp === boilingPoint; // Checks if body temperature equals boiling point
const isFreezing = bodyTemp === freezingPoint; // Checks if body temperature equals freezing point
console.log(isBoiling, isFreezing); // Outputs false, false as bodyTemp is neither boiling nor freezing point

// Comparison Operators
console.log(3 > 2);             // true, because 3 is greater than 2
console.log(3 >= 2);            // true, because 3 is greater than or equal to 2
console.log(3 < 2);             // false, because 3 is greater than 2
console.log(2 < 3);             // true, because 2 is less than 3
console.log(2 <= 3);            // true, because 2 is less than or equal to 3
console.log(3 == 2);            // false, because 3 is not equal to 2
console.log(3 != 2);            // true, because 3 is not equal to 2
console.log(3 == '3');          // true, compares only value, not type
console.log(3 === '3');         // false, compares both value and data type
console.log(3 !== '3');         // true, compares both value and data type
console.log(3 != 3);            // false, compares only value
console.log(3 !== 3);           // false, compares both value and data type
console.log(0 == false);        // true, equivalent in non-strict comparison
console.log(0 === false);       // false, not exactly the same in strict comparison
console.log(0 == '');           // true, equivalent in non-strict comparison
console.log(0 == ' ');          // true, equivalent in non-strict comparison
console.log(0 === '');          // false, not exactly the same in strict comparison
console.log(1 == true);         // true, equivalent in non-strict comparison
console.log(1 === true);        // false, not exactly the same in strict comparison
console.log(undefined == null); // true, equivalent in non-strict comparison
console.log(undefined === null);// false, not exactly the same in strict comparison
console.log(NaN == NaN);        // false, NaN is not equal to itself
console.log(NaN === NaN);       // false, NaN is not equal to itself
console.log(typeof NaN);        // "number", NaN is of type number

// String length comparisons
console.log('mango'.length == 'avocado'.length);  // false
console.log('mango'.length != 'avocado'.length);  // true
console.log('mango'.length < 'avocado'.length);   // true
console.log('milk'.length == 'meat'.length);      // true
console.log('milk'.length != 'meat'.length);      // false
console.log('tomato'.length == 'potato'.length);  // true
console.log('python'.length > 'dragon'.length);   // false

// Logical Operators
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false);// false
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false);// false
console.log(!true);         // false
console.log(!false);        // true
console.log(!false || !true); // true

// && operator example
const check1 = 4 > 3 && 10 > 5;         // true && true -> true
const check2 = 4 > 3 && 10 < 5;         // true && false -> false
const check3 = 4 < 3 && 10 < 5;         // false && false -> false

// || operator example
const check4 = 4 > 3 || 10 > 5;         // true || true -> true
const check5 = 4 > 3 || 10 < 5;         // true || false -> true
const check6 = 4 < 3 || 10 < 5;         // false || false -> false

// ! Negation examples
let check7 = 4 > 3;                     // true
let check8 = !(4 > 3);                  // false
let isLightOff = !isLightOn;            // false
let isSingle = !isMarried;              // false

// Summary:
// - Use `&&` and `||` operators to combine boolean expressions.
// - Use `!` operator to negate boolean expressions.
// - Booleans are useful for representing binary states, such as on/off or true/false.

// Increment Operator
let count = 0;
console.log(++count);        // 1, pre-increment: increments first, then logs
console.log(count);          // 1
console.log(count++);        // 1, post-increment: logs first, then increments
console.log(count);          // 2

// Decrement Operator
count = 0;
console.log(--count);        // -1, pre-decrement: decrements first, then logs
console.log(count);          // -1

count = 0;
console.log(count--);        // 0, post-decrement: logs first, then decrements
console.log(count);          // -1

// Ternary Operator
const age = 25;
const isAdult = age >= 18 ? 'You are an adult' : 'You are not an adult';
console.log(isAdult);        // "You are an adult"

let number = 5;
const result = number > 0 ? 'positive' : number < 0 ? 'negative' : 'zero';
console.log(result);         // "positive"