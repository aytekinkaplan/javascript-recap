// Creating a set of companies
const companies = new Set([
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
]);
console.log("Companies Set:", companies);

// Creating a set of unique languages
const allLanguages = [
  "English",
  "Spanish",
  "French",
  "German",
  "English",
  "Spanish",
  "French",
  "German",
  "Arabic",
  "Portuguese",
  "Italian",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Portuguese",
  "Italian",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Portuguese",
  "Italian",
  "Chinese",
  "Japanese",
  "Korean",
];
const uniqueLanguages = new Set(allLanguages);
console.log("Unique Languages Set:", uniqueLanguages);
console.log("Type of uniqueLanguages:", typeof uniqueLanguages);

// Converting the set to an array
const uniqueLanguagesArray = Array.from(uniqueLanguages);
console.log("Unique Languages Array:", uniqueLanguagesArray);
console.log("Type of uniqueLanguagesArray:", typeof uniqueLanguagesArray);

// Adding elements to a set
companies.add("Twitter");
console.log("After adding Twitter:", companies);

// Removing elements from a set
companies.delete("Twitter");
console.log("After removing Twitter:", companies);

// Checking if an element exists in a set
const hasGoogle = companies.has("Google");
console.log("Does Google exist in the set?", hasGoogle);

// Iterating over a set
console.log("Iterating over Companies Set:");
for (const company of companies) {
  console.log(company);
}

// Converting a set to an array
const companiesArray = Array.from(companies);
console.log("Companies Array:", companiesArray);

// Converting an array to a set
const companiesSet = new Set(companiesArray);
console.log("Recreated Companies Set:", companiesSet);

// Finding the size of a set
const size = companies.size;
console.log("Size of the Companies Set:", size);

// Clearing a set
companies.clear();
console.log("After clearing the Companies Set:", companies);

// Creating a map of languages with unique values
const languages = new Map([
  ["English", 1],
  ["Spanish", 2],
  ["French", 3],
  ["German", 4],
  ["Arabic", 5],
  ["Portuguese", 6],
  ["Italian", 7],
  ["Chinese", 8],
  ["Japanese", 9],
  ["Korean", 10],
]);
console.log("Languages Map:", languages);

// Creating a map of countries and capitals
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
  ["Denmark", "Copenhagen"],
  ["Iceland", "Reykjavik"],
  ["Estonia", "Tallinn"],
  ["Latvia", "Riga"],
  ["Lithuania", "Vilnius"],
  ["Poland", "Warsaw"],
  ["Slovakia", "Bratislava"],
  ["Slovenia", "Ljubljana"],
  ["Ukraine", "Kyiv"],
  ["Belarus", "Minsk"],
  ["Belgium", "Brussels"],
  ["Bosnia and Herzegovina", "Sarajevo"],
  ["Bulgaria", "Sofia"],
  ["Croatia", "Zagreb"],
  ["Cyprus", "Nicosia"],
  ["Czechia", "Prague"],
  ["Faroe Islands", "Torshavn"],
  ["France", "Paris"],
  ["Germany", "Berlin"],
  ["Greece", "Athens"],
  ["Ireland", "Dublin"],
  ["Italy", "Rome"],
  ["Luxembourg", "Luxembourg"],
  ["Malta", "Valletta"],
  ["Netherlands", "Amsterdam"],
  ["Portugal", "Lisbon"],
  ["Romania", "Bucharest"],
  ["Spain", "Madrid"],
];
const countriesMap = new Map(countries);
console.log("Countries Map:", countriesMap);

// Accessing elements in a map
const finland = countriesMap.get("Finland");
console.log("Finland's Capital:", finland);

// Adding elements to a map
countriesMap.set("Austria", "Vienna");
console.log("After adding Austria:", countriesMap);

// Removing elements from a map
countriesMap.delete("Sweden");
console.log("After removing Sweden:", countriesMap);

// Checking if an element exists in a map
const hasPoland = countriesMap.has("Poland");
console.log("Does Poland exist in the map?", hasPoland);

// Iterating over a map
console.log("Iterating over Countries Map:");
for (const [country, capital] of countriesMap) {
  console.log("Country:", country, "Capital:", capital);
}

// Converting a map to an array
const countriesArray = Array.from(countriesMap);
console.log("Countries Array from Map:", countriesArray);

// Converting an array to a map
const countriesMap2 = new Map(countriesArray);
console.log("Recreated Countries Map from Array:", countriesMap2);

// Finding the size of a map
const mapSize = countriesMap.size;
console.log("Size of the Countries Map:", mapSize);
