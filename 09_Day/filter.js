const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesWithLand);

