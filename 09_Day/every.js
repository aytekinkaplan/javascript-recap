// Array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Check if all names have an even length
const isEvenLength = names.every((name) => name.length % 2 === 0);
console.log("Are all names even length?", isEvenLength);
// Output: false (not all names have an even length)

// Check if all names start with 'A'
const startsWithA = names.every((name) => name.startsWith("A"));
console.log("Are all names starting with 'A'?", startsWithA);
// Output: false (only "Alice" starts with 'A')

// Check if all elements in the names array are strings
const areAllStrings = names.every((name) => typeof name === "string");
console.log("Are all names strings?", areAllStrings);
// Output: true (all elements in the names array are strings)

// Array of boolean values
const bools = [true, false, true, false, true];

// Check if all booleans are true
const allTrue = bools.every((bool) => bool);
console.log("Are all booleans true?", allTrue);
// Output: false (not all boolean values are true)
