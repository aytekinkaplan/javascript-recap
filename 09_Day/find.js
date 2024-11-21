const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const age = ages.find((age) => age < 20);
console.log(age);

const names = ["Martin", "Bob", "Charlie", "David", "Alice"];
const result = names.find((name) => name.startsWith("A"));
console.log(result);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = numbers.find((num) => num % 2 === 0);
console.log(evenNumber);

const colors = ["red", "green", "blue", "yellow", "purple"];
const color = colors.find((color) => color === "blue");
console.log(color);

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];
const book = books.find((book) => book.title === "To Kill a Mockingbird");
console.log(book);

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" },
  { name: "David", grade: "A" },
  { name: "Eve", grade: "B" },
];
const student = students.find((student) => student.name === "Charlie");
console.log(student);

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 800 },
  { name: "Monitor", price: 1200 },
  { name: "Keyboard", price: 150 },
];
const product = products.find((product) => product.price > 1000);
console.log(product);

const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 70 },
  { name: "David", score: 60 },
  { name: "Eve", score: 50 },
];
const highestScore = scores.find((score) => score.score === 90);
console.log(highestScore);

const cities = [
  { name: "New York", population: 8000000 },
  { name: "Los Angeles", population: 3900000 },
  { name: "Chicago", population: 2700000 },
  { name: "Houston", population: 2100000 },
  { name: "Philadelphia", population: 1500000 },
];
const city = cities.find((city) => city.population > 3000000);
console.log(city);

const countries = [
  { name: "United States", capital: "Washington, D.C." },
  { name: "Canada", capital: "Ottawa" },
  { name: "United Kingdom", capital: "London" },
  { name: "France", capital: "Paris" },
  { name: "Germany", capital: "Berlin" },
];
const country = countries.find((country) => country.name === "United States");
console.log(country);

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const firstFruit = fruits.find((fruit) => fruit.startsWith("a"));
console.log(firstFruit);
