// Array of countries (contains duplicates)
const countries = [
  "Finland",
  "Denmark",
  "Sweden",
  "Norway",
  "Iceland",
  "Estonia",
  "Greece",
  "Ireland",
  "Latvia",
  "Lithuania",
  "Poland",
  "Slovakia",
  "Slovenia",
  "Ukraine",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Estonia",
  "Faroe Islands",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

// Filter countries that include "land"
const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
console.log("Countries with 'land':", countriesWithLand);

// Filter countries that include "ia" (case insensitive)
const countriesWithIa = countries.filter((country) =>
  country.toLowerCase().includes("ia")
);
console.log("Countries with 'ia':", countriesWithIa);

// Remove duplicates from the 'countriesWithLand' array
const uniqueCountriesWithLand = [...new Set(countriesWithLand)];
console.log("Unique countries with 'land':", uniqueCountriesWithLand);

// Remove duplicates from the 'countriesWithIa' array
const uniqueCountriesWithIa = [...new Set(countriesWithIa)];
console.log("Unique countries with 'ia':", uniqueCountriesWithIa);
