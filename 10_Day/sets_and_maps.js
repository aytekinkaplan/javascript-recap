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
