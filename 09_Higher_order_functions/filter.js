// filter

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.filter((element) => element % 2 === 0);
console.log(arr2); // Output: [2, 4]

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const countries2 = countries.filter((country) => country.length > 6);
console.log(countries2); // Output: ["Finland", "Sweden", "Denmark"]

const numbers = [1, 2, 3, 4, 5];
const numbers2 = numbers.filter((number) => number > 3);
console.log(numbers2); // Output: [4, 5]