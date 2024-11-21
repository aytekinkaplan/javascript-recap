const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubledNumbers);

const squaredNumbers = numbers.map((num) => num ** 2);
console.log("Squared numbers:", squaredNumbers);

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const capitalizedNames = names.map((name) => name.toUpperCase());
console.log("Capitalized names:", capitalizedNames);
