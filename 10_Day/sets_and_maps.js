const companies = new Set([
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
]);
console.log(companies);

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
console.log(uniqueLanguages);
console.log(typeof uniqueLanguages);

const uniqueLanguagesArray = Array.from(uniqueLanguages);
console.log(uniqueLanguagesArray);
console.log(typeof uniqueLanguagesArray);

// Adding elements to a set
companies.add("Twitter");
console.log(companies);

// Removing elements from a set
companies.delete("Twitter");
console.log(companies);

// Checking if an element exists in a set
const hasGoogle = companies.has("Google");
console.log("Does Google exist in the set?", hasGoogle);

// Iterating over a set
for (const company of companies) {
  console.log(company);
}

// Converting a set to an array
const companiesArray = Array.from(companies);
console.log(companiesArray);

// Converting an array to a set
const companiesSet = new Set(companiesArray);
console.log(companiesSet);

// Finding the size of a set
const size = companies.size;
console.log("Size of the set:", size);

// Clearing a set
companies.clear();
console.log(companies);

// Creating a map
const languages = new Map([
  ["English", 1],
  ["Spanish", 2],
  ["French", 3],
  ["German", 4],
  ["English", 5],
  ["Spanish", 6],
  ["French", 7],
  ["German", 8],
  ["Arabic", 9],
  ["Portuguese", 10],
  ["Italian", 11],
  ["Chinese", 12],
  ["Japanese", 13],
  ["Korean", 14],
  ["Arabic", 15],
  ["Portuguese", 16],
  ["Italian", 17],
  ["Chinese", 18],
  ["Japanese", 19],
  ["Korean", 20],
  ["Arabic", 21],
  ["Portuguese", 22],
  ["Italian", 23],
  ["Chinese", 24],
  ["Japanese", 25],
  ["Korean", 26],
]);
console.log(languages);
