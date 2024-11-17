const rectangle = {
  length: 10,
  width: 5,
  area: function () {
    return this.length * this.width;
  },
  perimeter: function () {
    return 2 * (this.length + this.width);
  },
};

console.log(rectangle.area()); // Output: 50
console.log(rectangle.perimeter()); // Output: 30

const circle = {
  radius: 5,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
  circumference: function () {
    return 2 * Math.PI * this.radius;
  },
};

console.log(circle.area()); // Output: 78.53981633974483
console.log(circle.circumference()); // Output: 31.41592653589793

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

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Blue",
  mileage: 0,
};

console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2022
console.log(car.color); // Output: Blue
console.log(car.mileage); // Output: 0
