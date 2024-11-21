const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const index = names.findIndex((name) => name === "Charlie");
console.log(index);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(evenIndex);

const colors = ["red", "green", "blue", "yellow", "purple"];
const colorIndex = colors.findIndex((color) => color === "blue");
console.log(colorIndex);

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];
const bookIndex = books.findIndex(
  (book) => book.title === "To Kill a Mockingbird"
);
console.log(bookIndex);

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" },
  { name: "David", grade: "D" },
  { name: "Eve", grade: "E" },
];
const studentIndex = students.findIndex((student) => student.name === "Bob");
console.log(studentIndex);

const products = [
  { name: "Laptop", price: 1500 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 1200 },
  { name: "Headphones", price: 300 },
  { name: "Camera", price: 600 },
];
const productIndex = products.findIndex((product) => product.price > 1000);
console.log(productIndex);

const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 70 },
  { name: "David", score: 60 },
  { name: "Eve", score: 50 },
];
const highestScoreIndex = scores.findIndex((score) => score.score === 90);
console.log(highestScoreIndex);

const cities = [
  { name: "New York", population: 8000000 },
  { name: "Los Angeles", population: 3900000 },
  { name: "Chicago", population: 2700000 },
  { name: "Houston", population: 2100000 },
  { name: "Philadelphia", population: 1500000 },
];
const cityIndex = cities.findIndex((city) => city.population > 3000000);
console.log(cityIndex);

const countries = [
  { name: "United States", capital: "Washington, D.C." },
  { name: "Canada", capital: "Ottawa" },
  { name: "United Kingdom", capital: "London" },
  { name: "France", capital: "Paris" },
  { name: "Germany", capital: "Berlin" },
];
const countryIndex = countries.findIndex(
  (country) => country.name === "France"
);
console.log(countryIndex);
