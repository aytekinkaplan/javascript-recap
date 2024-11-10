// Creating an empty array
const anEmptyArray = Array();
console.log("An empty array:", anEmptyArray); // Logging empty array

// Creating an array with more than 5 elements (all undefined)
const moreThanFive = Array(6);
console.log("Array with more than 5 elements:", moreThanFive); // Logs array with undefined elements
console.log(moreThanFive.length); // Logs length of the array (6)

// Initializing values for each index in moreThanFive
moreThanFive[0] = 1;
moreThanFive[1] = 2;
moreThanFive[2] = 3;
moreThanFive[3] = 4;
moreThanFive[4] = 5;
moreThanFive[5] = 6;
console.log(moreThanFive); // Logs array with initialized values

// Adding an element to the end of the array
moreThanFive.push(7);

// Accessing first, middle, and last elements in the array
const first = moreThanFive[0];
const middle = moreThanFive[Math.floor(moreThanFive.length / 2)];
const last = moreThanFive[moreThanFive.length - 1];

console.log("First element:", first); // Logs first element
console.log("Middle element:", middle); // Logs middle element
console.log("Last element:", last); // Logs last element

// Creating an array with mixed data types
const mixedDataTypes = [
  1,
  "Hello",
  true,
  { name: "Aytekin", age: 34 },
  [1, 2, 3],
];
console.log("Mixed data types array:", mixedDataTypes); // Logs array with various data types
console.log(mixedDataTypes.length); // Logs length of mixed data array

// Creating a nested array
const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Nested array:", nestedArray); // Logs nested array
console.log(nestedArray.length); // Logs number of arrays within nested array

// Creating an array of IT companies
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log("IT Companies:", itCompanies); // Logs IT companies array
console.log(itCompanies.length); // Logs number of IT companies

// Accessing first, middle, and last companies
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];

console.log("First Company:", firstCompany); // Logs first company
console.log("Middle Company:", middleCompany); // Logs middle company
console.log("Last Company:", lastCompany); // Logs last company

// Adding a new company to the array
itCompanies.push("Twitter");
console.log("Updated IT Companies:", itCompanies); // Logs updated array with Twitter

// Logging each company using forEach
itCompanies.forEach((company) => {
  console.log(company);
});

// Sorting IT companies alphabetically
itCompanies.sort();
console.log("Sorted IT Companies:", itCompanies); // Logs sorted array

// Reversing the sorted IT companies array
itCompanies.reverse();
console.log("Reversed IT Companies:", itCompanies); // Logs reversed array

// Removing one company from the array (at index 3)
itCompanies.splice(3, 1);
console.log("Updated IT Companies:", itCompanies); // Logs array with one company removed
console.log(itCompanies.length); // Logs new length of array

// Removing three companies starting from index 1
itCompanies.splice(1, 3);
console.log("Updated IT Companies:", itCompanies); // Logs array with three companies removed
console.log(itCompanies.length); // Logs new length of array

// Removing the first company from the array
itCompanies.splice(0, 1);
console.log("Updated IT Companies:", itCompanies); // Logs array with first company removed
console.log(itCompanies.length); // Logs new length of array

// Checking if certain companies are in the array
const isThereGoogle = itCompanies.includes("Google");
console.log("IT Companies includes Google:", isThereGoogle); // Logs true if Google exists

const isThereMicrosoft = itCompanies.includes("Microsoft");
console.log("IT Companies includes Microsoft:", isThereMicrosoft); // Logs true if Microsoft exists

// Converting fruit names to uppercase
const fruits = ["watermelon", "peach", "strawberry", "kiwi", "mango", "lemon"];
const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercase fruits:", uppercaseFruits); // Logs fruits in uppercase

// Slicing a portion of companies array
const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
const slicedCompanies = companies.slice(1, 4);
console.log("Sliced companies:", slicedCompanies); // Logs sliced array (from index 1 to 4)

// Finding the minimum and maximum ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
console.log("Minimum age:", minAge); // Logs minimum age
console.log("Maximum age:", maxAge); // Logs maximum age
