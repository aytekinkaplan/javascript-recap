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

// Additional Examples with complex data types

// Example: Different data types array, demonstrating nested structures
const differentDataTypes = [
  "Aytekin",
  34,
  true,
  { country: "Holland", city: "Amsterdam" },
  {
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "Python",
      "Django",
      "Java",
    ],
  },
];
console.log("Different Data Types:", differentDataTypes); // Logging an array with mixed data types

// Accessing and logging nested skills array
const skills = differentDataTypes[4].skills;
console.log("Skills:", skills); // Logging the skills array from the nested object

// Accessing first, last, and middle skill
const firstSkill = skills[0];
console.log("First Skill:", firstSkill); // Logging the first skill in skills array

const lastSkill = skills[skills.length - 1];
console.log("Last Skill:", lastSkill); // Logging the last skill in skills array

const middleSkill = skills[Math.floor((skills.length - 1) / 2)];
console.log("Middle Skill:", middleSkill); // Logging the middle skill in skills array

// Calculating and logging the length of skills array
const skillsLength = skills.length;
console.log("Number of Skills:", skillsLength); // Logging the count of skills

// Creating a new array using the spread operator
const newSkills = [...skills];
console.log("New Skills:", newSkills); // Logging the copy of skills array

// Adding a new skill to the end of the array
newSkills.push("GraphQL");
console.log("Updated New Skills:", newSkills); // Logging new skills after adding an element

// Creating an array using the slice method
const updatedSkills = newSkills.slice(0, 3);
console.log("Updated Skills:", updatedSkills); // Logging the sliced portion of skills

// Mapping to create an uppercase version of skills
const mappedSkills = updatedSkills.map((skill) => skill.toUpperCase());
console.log("Mapped Skills:", mappedSkills); // Logging skills array in uppercase

// Splitting a string into an array of skills
const splitSkills = "HTML,CSS,JavaScript".split(",");
console.log("Split Skills:", splitSkills); // Logging array created by splitting a string

// Splitting a string into characters
const js = "JavaScript";
const charsInJs = js.split("");
console.log("Characters in JavaScript:", charsInJs); // Logging array of characters in 'JavaScript'

const charsInJsLength = charsInJs.length;
console.log("Number of Characters in JavaScript:", charsInJsLength); // Logging length of characters in 'JavaScript'

// Additional array examples with companies

let companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let companiesLength = companies.length;
let firstCompany = companies[0];
let middleCompany = companies[Math.floor((companiesLength - 1) / 2)];
let lastCompany = companies[companiesLength - 1];
let newCompanies = [...companies];
let updatedCompanies = newCompanies.slice(0, 3);
let mappedCompanies = updatedCompanies.map((company) => company.toUpperCase());
let splitCompanies = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon".split(
  ","
);

console.log("Companies:", companies); // Logging array of company names
console.log("Companies Length:", companiesLength); // Logging length of companies array
console.log("First Company:", firstCompany); // Logging first company name
console.log("Middle Company:", middleCompany); // Logging middle company name
console.log("Last Company:", lastCompany); // Logging last company name
console.log("Updated Companies:", updatedCompanies); // Logging sliced companies array
console.log("Mapped Companies:", mappedCompanies); // Logging uppercase companies array
console.log("Split Companies:", splitCompanies); // Logging split string as array of companies

// Filling arrays with repeated values
const charactersFilling = Array(8).fill("x".toUpperCase());
console.log(charactersFilling); // Logs array of 8 "X" characters

const charactersFilling2 = Array(8).fill(0);
console.log(charactersFilling2); // Logs array of 8 zeroes

// Concatenating two arrays
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const combinedList = firstList.concat(secondList);
console.log(combinedList); // Logs combined array [1, 2, 3, 4, 5, 6]

// Adding additional fruits to the array using spread operator
const newFruits = [
  ...fruits,
  "watermelon",
  "peach",
  "strawberry",
  "kiwi",
  "mango",
  "lemon",
];
console.log(newFruits); // Logs extended fruits array

// Finding index of "kiwi" - first and last occurrence
console.log(newFruits.indexOf("kiwi")); // Logs first index of "kiwi"
console.log(newFruits.lastIndexOf("kiwi")); // Logs last index of "kiwi"

// Finding index of specific fruits
console.log(newFruits.indexOf("banana")); // Logs index of "banana"
console.log(newFruits.indexOf("lemon")); // Logs index of "lemon"

// Filtering even and odd numbers from numbers array
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers2.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Logs array of even numbers [2, 4, 6, 8, 10]

const oddNumbers = numbers2.filter((number) => number % 2 !== 0);
console.log(oddNumbers); // Logs array of odd numbers [1, 3, 5, 7, 9]

// Mapping fruits array to check existence and log results
const checkingFruits = newFruits.map((fruit) =>
  newFruits.includes(fruit)
    ? `${fruit} is in the list`
    : `${fruit} is not in the list`
);
console.log(checkingFruits); // Logs messages for each fruit's presence

// Checking the presence of specific values in an array
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers4.includes(5)); // Logs true
console.log(numbers4.includes(20)); // Logs false

// Checking if different data types are arrays
console.log(Array.isArray(numbers4)); // Logs true if array
console.log(Array.isArray("Hello World")); // Logs false if not an array

// Sorting numbers in ascending and descending order
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers5.sort((a, b) => a - b)); // Logs sorted array ascending
console.log(numbers5.sort((a, b) => b - a)); // Logs sorted array descending

// Reversing and converting arrays to strings
console.log(numbers5.reverse()); // Logs reversed array
console.log(numbers5.join("-")); // Logs string of numbers joined by '-'

// Slicing and splicing arrays
const numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers11.slice(2, 5)); // Logs sliced part of array from index 2 to 5

// Pushing and unshifting elements into an array
numbers11.push(11);
numbers11.unshift(0);
console.log(numbers11); // Logs array with added elements

// Removing elements using pop and shift
numbers11.pop();
numbers11.shift();
console.log(numbers11); // Logs array with removed elements
