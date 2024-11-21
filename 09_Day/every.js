const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const isEvenLength = names.every((name) => name.length % 2 === 0);
console.log("Are all names even length?", isEvenLength);
const startsWithA = names.every((name) => name.startsWith("A"));
console.log("Are all names starting with 'A'?", startsWithA);

const areAllStrings = names.every((name) => typeof name === "string");
console.log("Are all names strings?", areAllStrings);

const bools = [true, false, true, false, true];
const allTrue = bools.every((bool) => bool);
console.log("Are all booleans true?", allTrue);
