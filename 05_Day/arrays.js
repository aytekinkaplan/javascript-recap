import Country from "./countries.js";

console.log(Country);

// Eğer Country bir nesne ise diziye dönüştürmek için
const arr = Object.values(Country);
console.log(arr);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log("numbers", numbers);

const fruits = ["apple", "orange", "banana", "kiwi"];
console.log("fruits", fruits);

const vegetables = ["tomato", "potato", "cabbage", "onion", "carrot"];
console.log("vegetables", vegetables);

const animalProducts = ["milk", "meat", "butter", "yoghurt", "honey"];
console.log("animalProducts", animalProducts);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
console.log("webTechs", webTechs);

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
console.log("countries", countries);

console.log("Length of countries array:", countries.length);

const countriesLengths = countries.map((country) => country.length);
console.log("countriesLengths", countriesLengths);

const bigCountries = countries.filter((country) => country.length > 7);
console.log("bigCountries", bigCountries);

const smallCountries = countries.filter((country) => country.length < 7);
console.log("smallCountries", smallCountries);

const sortedCountries = countries.sort((a, b) => a.localeCompare(b));
console.log("sortedCountries", sortedCountries);

const webTechsLengths = webTechs.map((webTech) => webTech.length);
console.log("webTechsLengths", webTechsLengths);

const sortedWebTechs = webTechs.sort((a, b) => a.localeCompare(b));
console.log("sortedWebTechs", sortedWebTechs);

const sortedWebTechsReversed = webTechs.sort((a, b) => b.localeCompare(a));
console.log("sortedWebTechsReversed", sortedWebTechsReversed);
