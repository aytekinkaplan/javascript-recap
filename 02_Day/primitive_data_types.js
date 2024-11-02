// String Concatenation

let word = "JavaScript";
let sentence = "I am learning " + word + "!"; // Concatenates "I am learning " with the value of 'word'
console.log(sentence); // Output: "I am learning JavaScript!"

// Explanation:
// The `+` operator combines (concatenates) strings. Here, it joins the string "I am learning " with the variable `word`.
// This is a common way to dynamically build strings in JavaScript.

// Number Comparison

let numberOne = 42;
let numberTwo = 42;

console.log("Are numberOne and numberTwo equal?", numberOne === numberTwo); // true

// Explanation:
// The `===` operator checks for both value and type equality. Since both `numberOne` and `numberTwo` hold the number 42, the comparison returns true.

// String Comparison

let js = "JavaScript";
let ruby = "Ruby";
let python = "Python";
let swift = "Swift";

console.log("Is js equal to ruby?", js === ruby); // false
console.log("Is js equal to python?", js === python); // false
console.log("Is js equal to swift?", js === swift); // false

// Explanation:
// Strings in JavaScript can also be compared using `===`. Here, `js` is compared to other language strings.
// Since the values are different, all comparisons return false.

// Boolean Values and Comparison

let lightOn = true;
let lightOff = false;

console.log("Are lightOn and lightOff equal?", lightOn === lightOff); // false

// Explanation:
// Booleans have two values: `true` and `false`. Using `===`, we compare `lightOn` (true) and `lightOff` (false).
// Since they have different boolean values, the comparison returns false.

// Summary:
// - `+` can concatenate strings.
// - `===` checks both value and type equality. It returns true if both operands have the same type and value.
// - Boolean values are useful for representing binary states, such as on/off or true/false.
