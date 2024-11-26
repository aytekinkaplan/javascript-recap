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
