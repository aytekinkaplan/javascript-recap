// findIndex
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

// findIndex(callback(element, index, array), thisArg)
// callback: It is the function that produces an element of the new array.
// thisArg: It is the value to use as this when executing callback.

const arr = [1, 2, 3, 4, 5];
const index = arr.findIndex((element) => element === 3);
console.log(index); // Output: 2

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const index2 = countries.findIndex((country) => country.length > 6);
console.log(index2); // Output: 0

const numbers = [1, 2, 3, 4, 5];
const index3 = numbers.findIndex((number) => number > 3);
console.log(index3); // Output: 3

const countriesContainingLand = countries.findIndex((country) =>
  country.includes("land")
);
console.log(countriesContainingLand); // Output: 0

const countriesEndsWithLand = countries.findIndex((country) =>
  country.endsWith("land")
);
console.log(countriesEndsWithLand); // Output: 0

const countriesStartsWithN = countries.findIndex((country) =>
  country.startsWith("N")
);
console.log(countriesStartsWithN); // Output: 2
