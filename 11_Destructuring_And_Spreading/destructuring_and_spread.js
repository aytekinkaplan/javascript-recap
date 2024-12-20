// Destructuring
const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York

// Spreading
const person2 = { name: "John", age: 30, city: "New York" };
const person3 = { ...person2, country: "USA" };
console.log(person3); // { name: "John", age: 30, city: "New York", country: "USA" }

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4
console.log(fifth); // 5

// Array spreading
const numbers2 = [1, 2, 3, 4, 5];
const numbers3 = [...numbers2, 6, 7, 8];
console.log(numbers3); // [1, 2, 3, 4, 5, 6, 7, 8]

// Object destructuring
const person4 = { name: "John", age: 30, city: "New York" };
const { name: personName, age: personAge, city: personCity } = person4;
console.log(personName); // John
console.log(personAge); // 30
console.log(personCity); // New York

// Object spreading
const person5 = { name: "John", age: 30, city: "New York" };
const person6 = { ...person5, country: "USA" };
console.log(person6); // { name: "John", age: 30, city: "New York", country: "USA" }

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB", "Python", "Django"],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd); // ["HTML", "CSS", "JS", "React"]
console.log(backEnd); // ["Node", "Express", "MongoDB", "Python", "Django"]

const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
  (number) => number % 2 === 0
);
const oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
  (number) => number % 2 !== 0
);

const [firstEven, , thirdEven] = evenNumbers;
const [firstOdd, , thirdOdd] = oddNumbers;
console.log(firstEven); // 2
console.log(thirdEven); // 8
console.log(firstOdd); // 1
console.log(thirdOdd); // 9

// Destructuring during iteration
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Denmark", "Copenhagen"],
  ["Iceland", "Reykjavik"],
];

for (const [country, capital] of countries) {
  console.log(`${country} - ${capital}`);
}

// Destructuring Object
const rectangle = {
  width: 10,
  height: 5,
  area: width * height,
  perimeter: 2 * (width + height),
};

const { width, height, area, perimeter } = rectangle;
console.log(width); // 10
console.log(height); // 5
console.log(area); // 50
console.log(perimeter); // 30

// Renaming destructured variables
const { width: w, height: h } = rectangle;
console.log(w); // 10
console.log(h); // 5
console.log("Area: " + area); // 50
console.log("Perimeter: " + perimeter); // 30

// Object parameter without destructuring
function calculateAreaAndPerimeter(rectangle) {
  const area = rectangle.width * rectangle.height;
  const perimeter = 2 * (rectangle.width + rectangle.height);
  return { area, perimeter };
}

const rectangle2 = { width: 10, height: 5 };

const calculatePerimeter = (rectangle2) => {
  const perimeter1 = 2 * (rectangle2.width + rectangle2.height);
  return perimeter1;
};

const calculateArea = (rectangle2) => {
  const area1 = rectangle2.width * rectangle2.height;
  return area1;
};

const { area1, perimeter1 } = calculateAreaAndPerimeter(rectangle2);
console.log("Area: " + area1); // 50
console.log("Perimeter: " + perimeter1); // 30
