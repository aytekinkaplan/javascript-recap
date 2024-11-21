const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const bools = [true, false, true, false, true];

const isEvenLength = names.some((name) => name.length % 2 === 0);
console.log("Is at least one name even length?", isEvenLength);
// Output: true (at least one name has an even length)

const startsWithA = names.some((name) => name.startsWith("A"));
console.log("Is at least one name starting with 'A'?", startsWithA);
// Output: true (at least one name starts with 'A')

const areAllStrings = names.some((name) => typeof name === "string");
console.log("Are all names strings?", areAllStrings);
// Output: true (all names are strings)

const allTrue = bools.some((bool) => bool);
console.log("Are all booleans true?", allTrue);
