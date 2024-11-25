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
