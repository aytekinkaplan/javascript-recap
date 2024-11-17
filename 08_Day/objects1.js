// Rectangle Object - Represents a rectangle with methods to calculate area and perimeter
const rectangle = {
  length: 10,
  width: 5,
  area: function () {
    return this.length * this.width; // Area = length * width
  },
  perimeter: function () {
    return 2 * (this.length + this.width); // Perimeter = 2 * (length + width)
  },
};

console.log(rectangle.area()); // Output: 50
console.log(rectangle.perimeter()); // Output: 30

// Circle Object - Represents a circle with methods to calculate area and circumference
const circle = {
  radius: 5,
  area: function () {
    return Math.PI * this.radius ** 2; // Area = π * radius²
  },
  circumference: function () {
    return 2 * Math.PI * this.radius; // Circumference = 2 * π * radius
  },
};

console.log(circle.area()); // Output: 78.53981633974483
console.log(circle.circumference()); // Output: 31.41592653589793

// Student Object - Represents a student's basic information
const student = {
  name: "John Doe",
  age: 20,
  grade: "A",
  address: "123 Main Street, City, Country",
};

console.log(student.name); // Output: John Doe
console.log(student.age); // Output: 20
console.log(student.grade); // Output: A
console.log(student.address); // Output: 123 Main Street, City, Country

// Book Object - Represents a book with title, author, genre, and publication year
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genre: "Classic",
  publicationYear: 1925,
};

console.log(book.title); // Output: The Great Gatsby
console.log(book.author); // Output: F. Scott Fitzgerald
console.log(book.genre); // Output: Classic
console.log(book.publicationYear); // Output: 1925

// Car Object - Represents a car's details
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Blue",
  mileage: 0, // Starting mileage
};

console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2022
console.log(car.color); // Output: Blue
console.log(car.mileage); // Output: 0

// Person Object - Represents a person's details including nested address and skills
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  skills: ["HTML", "CSS", "JavaScript"],
};

console.log(person.firstName); // Output: John
console.log(person.lastName); // Output: Doe
console.log(person.age); // Output: 30
console.log(person.address.street); // Output: 123 Main Street
console.log(person.address.city); // Output: New York
console.log(person.address.state); // Output: NY
console.log(person.address.zipCode); // Output: 10001
console.log(person.skills); // Output: ["HTML", "CSS", "JavaScript"]

// Adding more details to the person object
person.title = "Software Engineer";
person.company = "ABC Company";
person.salary = 80000;
person.hireDate = "2022-01-01";
person.resignDate = "2023-01-01";
console.log(person.title); // Output: Software Engineer
console.log(person.company); // Output: ABC Company
console.log(person.salary); // Output: 80000
console.log(person.hireDate); // Output: 2022-01-01
console.log(person.resignDate); // Output: 2023-01-01

// Updating skills
person.skills.push(
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Express",
  "Angular",
  "Vue",
  "React Native",
  "Flutter",
  "Python"
);
console.log(person.skills); // Updated skills array

// Employee Object - Represents an employee's basic information
const employee = {
  name: "John Doe",
  department: "Sales",
  salary: 50000,
  hireDate: "2022-01-01",
};

console.log(employee.name); // Output: John Doe
console.log(employee.department); // Output: Sales
console.log(employee.salary); // Output: 50000
console.log(employee.hireDate); // Output: 2022-01-01

// Product Object - Represents a product's details
const product = {
  name: "Laptop",
  price: 1000,
  quantity: 10,
  description: "A high-performance laptop",
};

console.log(product.name); // Output: Laptop
console.log(product.price); // Output: 1000
console.log(product.quantity); // Output: 10
console.log(product.description); // Output: A high-performance laptop

// Student Object - Similar to the earlier example
const student1 = {
  name: "John Doe",
  age: 20,
  grade: "A",
  address: "123 Main Street, City, Country",
};

console.log(student1.name); // Output: John Doe
console.log(student1.age); // Output: 20
console.log(student1.grade); // Output: A
console.log(student1.address); // Output: 123 Main Street, City, Country
