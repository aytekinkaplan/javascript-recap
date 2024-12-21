// Object parameter without destructuring

const rect = {
  width: 10,
  height: 20,
};

const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect));

const calculateArea = (rectangle) => {
  return rectangle.width * rectangle.height;
};

console.log(calculateArea(rect));

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  job: "Developer",
  address: {
    street: "123 Main Street",
    country: "Holland",
    city: "Amsterdam",
    zipCode: "12345",
  },
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
  languages: [
    "English",
    "Dutch",
    "French",
    "German",
    "Spanish",
    "Italian",
    "Arabic",
  ],
  isMarried: true,
  isProgrammer: true,
  isStudent: false,
};

const getPersonInfo = (aPerson) => {
  const skills = aPerson.skills;
  const formattedSkills =
    skills.slice(0, -1).join(", ") + ", and " + skills[skills.length - 1];
  const languages = aPerson.languages;
  const formattedLanguages =
    languages.slice(0, -1).join(", ") +
    ", and " +
    languages[languages.length - 1];

  const personInfo = `Name: ${aPerson.firstName} ${aPerson.lastName} lives in ${aPerson.address.city}, ${aPerson.address.country}. He knows ${formattedSkills} and speaks ${formattedLanguages}.`;

  return personInfo;
};

console.log(getPersonInfo(person));

// Object parameter with destructuring

const calculateAreaAndPerimeter = ({ width, height }) => {
  const area = width * height;
  const perimeter = 2 * (width + height);
  return { area, perimeter };
};

console.log(calculateAreaAndPerimeter(rect));

const rect1 = {
  width: 23,
  height: 25,
};

console.log(calculateAreaAndPerimeter(rect1));

const getPersonInformation = ({
  firstName,
  lastName,
  address: { city, country },
  skills,
  languages,
  isMarried,
  isProgrammer,
  isStudent,
}) => {
  const personInfo = `Name: ${firstName} ${lastName} lives in ${city}, ${country}. He knows ${skills.join(
    ", "
  )} and speaks ${languages.join(", ")}.`;

  return personInfo;
};

console.log(getPersonInformation(person));

// Destructuring object during iteration

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/12/2022 10:00",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/12/2022 12:00",
    completed: false,
  },
  {
    task: "Go to office",
    time: "5/12/2022 9:00",
    completed: false,
  },
  {
    task: "Go to gym",
    time: "5/12/2022 8:00",
    completed: true,
  },
  {
    task: "Go to work",
    time: "6/12/2022 7:00",
    completed: false,
  },
  {
    task: "Go to sleep",
    time: "6/12/2022 11:00",
    completed: true,
  },
  {
    task: "Assess test result",
    time: "7/12/2022 12:00",
    completed: true,
  },
  {
    task: "Go to gym",
    time: "7/12/2022 8:00",
    completed: true,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(`Task: ${task}, Time: ${time}, Completed: ${completed}`);
}

// Spread or rest operator

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = numbers;
console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 3
console.log(rest); // [4, 5, 6, 7, 8, 9, 10]

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "Chile",
  "Germany",
  "Austria",
  "Switzerland",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
]; // 16 countries

let [US, CA, MX, ...otherCountries] = countries;
console.log(US); // "United States"
console.log(CA); // "Canada"
console.log(MX); // "Mexico"
console.log(otherCountries); // ["Brazil", "Argentina", "Chile","Germany","Austria","Switzerland", "Finland",
// "Sweden", "Norway", "Denmark", "Iceland"]

// Spread operator to copy an array

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = [...evenNumbers, ...oddNumbers].sort();

console.log(allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
allNumbers.push(11);
console.log(allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const allNumbersCopy = [...allNumbers];
allNumbersCopy.push(12);
console.log(allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(allNumbersCopy); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Spread operator to copy an object

const person1 = {
  name: "John",
  age: 30,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
  address: {
    city: "New York",
    country: "USA",
  },
};

const copiedPerson = { ...person1 };
console.log(person1); // { name: "John", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'New York', country: 'USA' } }
console.log(copiedPerson); // { name: "John", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'New York', country: 'USA' } }

copiedPerson.name = "Jane";
console.log(person1); // { name: "John", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'New York', country: 'USA' } }
console.log(copiedPerson); // { name: "Jane", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'New York', country: 'USA' } }

copiedPerson.address.city = "San Francisco";
console.log(person1); // { name: "John", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'San Francisco', country: 'USA' } }
console.log(copiedPerson); // { name: "Jane", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'San Francisco', country: 'USA' } }

copiedPerson.address.country = "Canada";
console.log(person1); // { name: "John", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'San Francisco', country: 'Canada' } }
console.log(copiedPerson); // { name: "Jane", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'San Francisco', country: 'Canada' } }

const copiedPerson1 = { ...person1, title: "Software Engineer" };
console.log(person1); // { name: "John", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'San Francisco', country: 'Canada' } }
console.log(copiedPerson1); // { name: "Jane", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'San Francisco', country: 'Canada' }, title: "Software Engineer" }

const copiedPerson2 = {
  ...person1,
  address: { ...person1.address, zipCode: "12345" },
};
console.log(person1); // { name: "John", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'San Francisco', country: 'Canada' } }
console.log(copiedPerson2); // { name: "Jane", age: 30, skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ], address: { city: 'San Francisco', country: 'Canada', zipCode: '12345' } }

// Spread operator with arrow functions

const sumAllNumbers = (...numbers) =>
  numbers.reduce((acc, num) => acc + num, 0);
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // 15

const multiplyAllNumbers = (...numbers) =>
  numbers.reduce((acc, num) => acc * num, 1);
console.log(multiplyAllNumbers(1, 2, 3, 4, 5)); // 120

const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
console.log(getFullName({ firstName: "John", lastName: "Doe" })); // John Doe
