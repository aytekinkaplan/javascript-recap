// Creating an empty set
const mySet = new Set();
console.log(mySet); // Set {}

// Adding elements to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet); // Set { 1, 2, 3 }

// Checking if an element exists in the set
console.log(mySet.has(2)); // true

// Removing an element from the set
mySet.delete(2);
console.log(mySet); // Set { 1, 3 }

// Iterating over the set
for (const value of mySet) {
  console.log(value); // 1, 3
}

// Getting the size of the set
console.log(mySet.size); // 2

// Clearing the set
mySet.clear();
console.log(mySet); // Set {}

// Creating a set from an array
const languages = [
  "English",
  "Spanish",
  "French",
  "English",
  "Spanish",
  "German",
  "English",
];
const uniqueLanguages = new Set(languages);
console.log("Array length:", languages.length); // 6
console.log("Set size:", uniqueLanguages.size); // 4
console.log(uniqueLanguages); // Set { "English", "Spanish", "French", "German" }

// Creating a set from a string
const uniqueChars = new Set("hello");
console.log(uniqueChars); // Set { "h", "e", "l", "o" }

// Creating a set from an object
const obj = { a: 1, b: 2, c: 3 };
const uniqueKeys = new Set(Object.keys(obj));
console.log(uniqueKeys); // Set { "a", "b", "c" }

const companies = new Array();
companies.push("Google");
companies.push("Amazon");
companies.push("Microsoft");
companies.push("Google");
const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies); // Set { "Google", "Amazon", "Microsoft" }

uniqueCompanies.add("Apple");
uniqueCompanies.add("Apple");
console.log(uniqueCompanies); // Set { "Google", "Amazon", "Microsoft", "Apple" }

uniqueCompanies.delete("Google");
console.log(uniqueCompanies); // Set { "Amazon", "Microsoft", "Apple" }

console.log(uniqueCompanies.has("Google")); // false

console.log(uniqueCompanies.has("Amazon")); // true

console.log(uniqueCompanies.size); // 3

uniqueCompanies.clear();
console.log(uniqueCompanies); // Set {}

console.log(uniqueCompanies.size); // 0

// Union of sets
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);
const union = new Set([...set1, ...set2]);
console.log(union); // Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersection of sets
const intersection = new Set([...set1].filter((x) => set2.has(x)));
console.log(intersection); // Set { 4, 5 })

// Difference of sets
const difference = new Set([...set1].filter((x) => !set2.has(x)));
console.log(difference); // Set { 1, 2, 3 }

// Symmetric difference of sets
const symmetricDifference = new Set(
  [...set1, ...set2].filter((x) => !set1.has(x) || !set2.has(x))
);
console.log(symmetricDifference); // Set { 1, 2, 3, 6, 7, 8 }

// Check if a set is a subset of another set
const subset = new Set([...set1].filter((x) => set2.has(x)));
console.log(subset); // Set { 4, 5 }
