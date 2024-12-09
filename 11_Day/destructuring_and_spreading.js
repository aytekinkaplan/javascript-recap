const e = require("cors");

// Destructing Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5, 6, 7, 8, 9, 10]

// Destructing Objects
const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;
console.log(name); // "John"
console.log(age); // 30
console.log(city); // "New York"

// Spreading Objects
const person1 = { name: "John", age: 30 };
const person2 = { ...person1, city: "New York" };
console.log(person2); // { name: "John", age: 30, city: "New York" }

const frontend = ["HTML", "CSS", "JavaScript", "React"];
const backend = ["Node.js", "Express.js", "MongoDB", "MySQL"];
const fullStack = [...frontend, ...backend];
console.log(fullStack); // ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "MySQL"]

// Object parameter without destructuring
function printPerson(person) {
  console.log(person.name);
  console.log(person.age);
  console.log(person.city);
}

// Object parameter with destructuring
function printPerson({ name, age, city }) {
  console.log(name);
  console.log(age);
  console.log(city);
}

// Object parameter with destructuring and default values
function printPerson({ name = "John", age = 30, city = "New York" }) {
  console.log(name);
  console.log(age);
  console.log(city);
}

const rect = {
  width: 20,
  height: 10,
};

const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect));

const calculateArea = (rectangle) => {
  return rectangle.width * rectangle.height;
};

console.log(calculateArea(rect));

const calculateDiagonal = (rectangle) => {
  return Math.sqrt(
    rectangle.width * rectangle.width + rectangle.height * rectangle.height
  );
};

console.log(calculateDiagonal(rect));

const calculateCircumference = (circle) => {
  return 2 * Math.PI * circle.radius;
};

console.log(calculateCircumference(rect));

const calculateAreaOfCircle = (circle) => {
  return Math.PI * circle.radius * circle.radius;
};

console.log(calculateAreaOfCircle(rect));

const calculateCircumferenceOfCircle = (circle) => {
  return 2 * Math.PI * circle.radius;
};

console.log(calculateCircumferenceOfCircle(rect));

const calculateAreaOfRectangle = (rectangle) => {
  return rectangle.width * rectangle.height;
};

console.log(calculateAreaOfRectangle(rect));

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

const famousCountries = [
  "Jamaica",
  "Panama",
  "Costa Rica",
  "El Salvador",
  "Honduras",
  "Nicaragua",
  "Panama",
  "Costa Rica",
  "El Salvador",
  "Honduras",
  "Nicaragua",
  "Panama",
  "Costa Rica",
  "El Salvador",
  "Honduras",
  "Nicaragua",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Portugal",
];

for (const country of famousCountries) {
  console.log(country);
}

const uniqueCountries = new Set(famousCountries);
for (const country of uniqueCountries) {
  console.log(country);
}

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = [...evenNumbers, ...oddNumbers];
console.log(allNumbers.sort((a, b) => a - b));
