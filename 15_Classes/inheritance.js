// Inheritance
class Person {
  constructor(name, age, country, city, state) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.city = city;
    this.state = state;
  }

  fullName() {
    return this.name + " " + this.lastName;
  }

  address() {
    return this.city + ", " + this.state + ", " + this.country;
  }
}

class Student extends Person {
  constructor(name, age, country, city, state, major) {
    super(name, age, country, city, state);
    this.major = major;
  }
}

const student1 = new Student(
  "John",
  30,
  "USA",
  "New York",
  "NY",
  "Computer Science"
);
console.log(student1.fullName()); // "John Doe"
console.log(student1.address()); // "New York, NY, USA"
console.log(student1.major); // "Computer Science"

console.log(student1 instanceof Person); // true
console.log(student1 instanceof Student); // true

class Teacher extends Person {
  constructor(name, age, country, city, state, subject) {
    super(name, age, country, city, state);
    this.subject = subject;
  }
}

const teacher1 = new Teacher("Jane", 35, "USA", "New York", "NY", "Math");
console.log(teacher1.fullName()); // "Jane Doe"
console.log(teacher1.address()); // "New York, NY, USA"
console.log(teacher1.subject); // "Math"

console.log(teacher1 instanceof Person); // true
console.log(teacher1 instanceof Teacher); // true

console.log(teacher1 instanceof Student); // false

// Multiple Inheritance
class Engineer extends Person {
  constructor(name, age, country, city, state, specialization) {
    super(name, age, country, city, state);
    this.specialization = specialization;
  }
}

const engineer1 = new Engineer(
  "John",
  30,
  "USA",
  "New York",
  "NY",
  "Computer Science"
);
console.log(engineer1.fullName()); // "John Doe"
console.log(engineer1.address()); // "New York, NY, USA"
console.log(engineer1.specialization); // "Computer Science"

console.log(engineer1 instanceof Person); // true
console.log(engineer1 instanceof Engineer); // true
