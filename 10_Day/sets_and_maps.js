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
console.log(companies.size);

companies.add("Twitter");
console.log(companies);

companies.delete("Oracle");
console.log(companies);

console.log(companies.has("Facebook"));

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
const itCompaniesSet = new Set(itCompanies);
console.log(itCompaniesSet);

const itCompaniesArray = [...itCompaniesSet];
console.log(itCompaniesArray);
