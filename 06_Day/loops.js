// Loop from 0 to 9 and log each number
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Attempt to loop from 9 down to 0, but this loop will not run
// because the condition i <= 0 is never true for i starting at 9.
// Correct condition would be i >= 0
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

// Loop from 0 to 9 and log even numbers only
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Loop from 0 to 9 and log odd numbers only
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Loop from 0 to 9, log "Odd" for odd numbers and the number itself for even numbers
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    console.log("Odd");
  }
}

// Loop from 0 to 9, calculate and log each number squared in the format "i*i=result"
for (let i = 0; i < 10; i++) {
  console.log(`${i}*${i}=${i * i}`);
}

// Loop through the list of countries and log each country name
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// Sum all numbers in the array and log the result
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// Create a new array with squares of each number in 'numbers' array and log it
const newArray = [];
for (let i = 0; i < numbers.length; i++) {
  newArray.push(numbers[i] ** 2);
}
console.log(newArray);

// Loop through the countries array and log countries containing "land" in their names
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    console.log(countries[i]);
  }
}

// Using filter to get countries containing "land" in their names
const landCountries = countries.filter((country) => country.includes("land"));
console.log(landCountries);

// Map each country name to its length and log the resulting array
const countriesLengths = countries.map((country) => country.length);
console.log(countriesLengths);

// Filter and log countries with names longer than 7 characters
const bigCountries = countries.filter((country) => country.length > 7);
console.log(bigCountries);

// List of web technologies
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Loop through webTechs and log each tech in lowercase
for (const tech of webTechs) {
  console.log(tech.toLowerCase());
}

// Loop through webTechs and log each tech in uppercase
for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

// Loop through webTechs and log each tech with the first letter capitalized
for (const tech of webTechs) {
  console.log(tech[0].toUpperCase() + tech.slice(1).toLowerCase());
}

// Loop through webTechs and log only the first letter of each tech in uppercase
for (const tech of webTechs) {
  console.log(tech[0].toUpperCase());
}

// Loop through numbers array, log "Found" when the number 3 is encountered and exit the loop
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    console.log("Found");
    break;
  }
  console.log("Not found");
}

// Loop through numbers array, log "Found" when the number 3 is encountered and continue to the next iteration
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    console.log("Found");
    continue;
  }
  console.log("Not found");
}
