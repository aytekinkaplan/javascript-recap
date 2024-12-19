const names = ["Alice", "Bob", "Charlie", "Debbie"];
const allNamesAreLong = names.every((name) => name.length > 5);

console.log(allNamesAreLong); // Output: false
const allNamesHaveE = names.every((name) => name.toLowerCase().includes("e"));
console.log(allNamesHaveE); // Output: true

const capitals = ["Helsinki", "Stockholm", "Oslo", "Copenhagen"];
const isString = capitals.every((capital) => typeof capital === "string");
console.log(isString); // Output: true

const longCapitals = capitals.every((capital) => capital.length > 6);
console.log(longCapitals); // Output: false

const bools = [true, true, true, true];
const allBoolsAreTrue = bools.every((bool) => bool === true);
console.log(allBoolsAreTrue); // Output: true

const nums = [1, 2, 3, 4, 5];
const allNumsAreEven = nums.every((num) => num % 2 === 0);
console.log(allNumsAreEven); // Output: false
