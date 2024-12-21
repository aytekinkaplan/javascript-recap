// Base Class: Person
class Person {
  constructor(firstName, lastName, age, job, isMarried) {
    this.firstName = firstName || "Unknown";
    this.lastName = lastName || "Unknown";
    this.age = age || "Unknown";
    this.job = job || "Unknown";
    this.isMarried = isMarried || false;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  fullInfo() {
    return `Name: ${this.fullName()}, Age: ${this.age}, Job: ${
      this.job
    }, Is Married: ${this.isMarried}`;
  }
}

// Derived Class: Teacher
class Teacher extends Person {
  constructor(firstName, lastName, age, job, isMarried, subject) {
    super(firstName, lastName, age, job, isMarried);
    this.subject = subject || "Unknown";
  }

  fullInfo() {
    return `${super.fullInfo()}, Subject: ${this.subject}`;
  }
}

// Example Usage
const teacher1 = new Teacher("Jane", "Doe", 35, "Developer", true, "Math");
console.log(teacher1.fullInfo());

const teacher2 = new Teacher(); // Eksik veri ile oluşturuldu
console.log(teacher2.fullInfo());
