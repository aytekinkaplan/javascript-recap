// Demonstrating the use of map method

// Example 1: Doubling elements in an array
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((element) => element * 2);
console.log(arr2); // Output: [2, 4, 6, 8, 10]

// Example 2: Converting country names to uppercase
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const countries2 = countries.map((country) => country.toUpperCase());
console.log(countries2); // Output: ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// Example 3: Combining countries and their capitals
const capitals = ["Helsinki", "Stockholm", "Oslo", "Copenhagen", "Reykjavik"];
const countriesAndCapitals = countries.map(
  (country, index) => `${country} - ${capitals[index]}`
);
console.log(countriesAndCapitals); // Output: ["Finland - Helsinki", "Sweden - Stockholm", "Norway - Oslo", "Denmark - Copenhagen", "Iceland - Reykjavik"]

// Example 4: Squaring numbers in an array
const numbers = [1, 2, 3, 4, 5];
const numbers2 = numbers.map((number) => number * number);
console.log(numbers2); // Output: [1, 4, 9, 16, 25]
