// Importing the Country module from "countries.js" file
import Country from "./countries.js";

// Logging the imported Country module to check its structure
console.log("Country module:", Country);

// If Country is an object, converting its values to an array
const arr = Object.values(Country);
console.log("Country values array:", arr); // Logging the converted array from Country values

// Example 1: Array of numbers
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log("Numbers:", numbers); // Logging numbers array

// Example 2: Array of fruits
const fruits = ["apple", "orange", "banana", "kiwi"];
console.log("Fruits:", fruits); // Logging fruits array

// Example 3: Array of vegetables
const vegetables = ["tomato", "potato", "cabbage", "onion", "carrot"];
console.log("Vegetables:", vegetables); // Logging vegetables array

// Example 4: Array of animal products
const animalProducts = ["milk", "meat", "butter", "yoghurt", "honey"];
console.log("Animal Products:", animalProducts); // Logging animalProducts array

// Example 5: Array of web technologies
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
console.log("Web Technologies:", webTechs); // Logging webTechs array

// Example 6: Array of country names
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
console.log(`Countries (${countries.length} items):`, countries); // Logging countries array with length

// Example 7: Lengths of each country's name
const countriesLengths = countries.map((country) => country.length);
console.log("Country name lengths:", countriesLengths); // Logging array of country name lengths

// Example 8: Countries with names longer than 7 characters
const bigCountries = countries.filter((country) => country.length > 7);
console.log("Countries with names longer than 7 characters:", bigCountries); // Logging bigCountries array

// Example 9: Countries with names shorter than 7 characters
const smallCountries = countries.filter((country) => country.length < 7);
console.log("Countries with names shorter than 7 characters:", smallCountries); // Logging smallCountries array

// Example 10: Sorting countries alphabetically
const sortedCountries = [...countries].sort((a, b) => a.localeCompare(b));
console.log("Alphabetically sorted countries:", sortedCountries); // Logging sorted countries

// Additional Example 1: Capitalizing each country name
const capitalizedCountries = countries.map((country) => country.toUpperCase());
console.log("Capitalized country names:", capitalizedCountries); // Logging capitalized country names

// Additional Example 2: Finding countries that contain the letter 'a'
const countriesWithA = countries.filter((country) => country.includes("a"));
console.log("Countries containing 'a':", countriesWithA); // Logging countries that contain 'a'

// Additional Example 3: Checking if all countries have names longer than 5 characters
const allCountriesLongerThan5 = countries.every(
  (country) => country.length > 5
);
console.log(
  "Are all countries longer than 5 characters?",
  allCountriesLongerThan5
); // Logging boolean result

// Additional Example 4: Finding the longest country name
const longestCountry = countries.reduce((a, b) =>
  a.length > b.length ? a : b
);
console.log("Longest country name:", longestCountry); // Logging longest country name

// Additional Example 5: Reversing the countries array
const reversedCountries = [...countries].reverse();
console.log("Reversed countries:", reversedCountries); // Logging reversed countries array

// Additional Example 6: Creating an array of numbers squared
const squaredNumbers = numbers.map((num) => num ** 2);
console.log("Squared numbers:", squaredNumbers); // Logging squared numbers array

// Additional Example 7: Calculating the total sum of the numbers array
const totalSum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Total sum of numbers:", totalSum); // Logging the total sum of numbers

// Additional Example 8: Filtering numbers greater than 10
const largeNumbers = numbers.filter((num) => num > 10);
console.log("Numbers greater than 10:", largeNumbers); // Logging large numbers

// Additional Example 9: Sorting fruits alphabetically in reverse
const sortedFruits = [...fruits].sort((a, b) => b.localeCompare(a));
console.log("Fruits in reverse alphabetical order:", sortedFruits); // Logging sorted fruits in reverse

// Additional Example 10: Checking if 'React' is in webTechs array
const hasReact = webTechs.includes("React");
console.log("Is React in webTechs?", hasReact); // Logging boolean result

// Logging the length of the numbers array
console.log(`Numbers array length: ${numbers.length}`, numbers);

// Counting the number of digits in each number by converting to string and measuring length
const numbersDigits = numbers.map((number) => number.toString().length);
console.log("Number of digits in each number:", numbersDigits); // Logging the array of digit counts
