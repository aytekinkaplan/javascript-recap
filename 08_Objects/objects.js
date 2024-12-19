"use strict";

// Object with a method to return full details of the person
const person = {
  fullId: function () {
    return (
      this.name +
      " " +
      this.lastName +
      " is " +
      this.age +
      " years old. He lives in " +
      this.address.city +
      ", " +
      this.address.state +
      ", " +
      this.address.country +
      ". His address is " +
      this.address.street +
      ", " +
      this.address.zipCode +
      ". He is married: " +
      this.isMarried +
      ". He knows " +
      this.skills.join(", ") +
      "."
    );
  },
};

// Adding properties to the person object
person.name = "John";
person.lastName = "Doe";
person.age = 30;
person.isMarried = true;
person.skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
person.address = {
  country: "United States",
  city: "New York",
  state: "NY",
  street: "123 Main Street",
  zipCode: "10001",
};

// Display the person object
console.log(person);

// Looping through object properties using for-in
for (const key in person) {
  console.log(key, person[key]);
}

// Detailed logging of object properties
console.log(
  "Name:",
  person.name + "\n",
  "Last Name:",
  person.lastName + "\n",
  "Age:",
  person.age + "\n",
  "Married:",
  person.isMarried + "\n",
  "Skills:",
  person.skills + "\n",
  "Address:",
  person.address
);

// Calling the fullId method
console.log(person.fullId());

// Adding new properties to the person object
person.nationality = "British";
person.title = "Software Developer";
person.company = "ABC Company";
person.salary = 80000;
person.currency = "$";

// Updating the skills array
person.skills.push("MongoDB", "Express", "Angular");

// Display the updated person object
console.log(person);

// Creating shallow copies of the person object
const copyPerson = Object.assign({}, person); // Using Object.assign
console.log(copyPerson);

const copyPerson2 = { ...person }; // Using the spread operator
console.log(copyPerson2);

// Extracting keys, values, and entries from the object
const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);

// Converting the object to a JSON string and parsing it back
const string = JSON.stringify(person);
console.log(string);

const parsed = JSON.parse(string);
console.log(parsed);

// Checking if specific properties exist using hasOwnProperty
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("fullName")); // false
console.log(person.hasOwnProperty("skills")); // true
console.log(person.hasOwnProperty("salary")); // true
console.log(person.hasOwnProperty("company")); // true
console.log(person.hasOwnProperty("title")); // true
console.log(person.hasOwnProperty("currency")); // true
console.log(person.hasOwnProperty("country")); // false (Nested property in 'address')
console.log(person.hasOwnProperty("address")); // true
console.log(person.hasOwnProperty("city")); // false (Nested property in 'address')
console.log(person.hasOwnProperty("state")); // false (Nested property in 'address')
console.log(person.hasOwnProperty("zipCode")); // false (Nested property in 'address')
console.log(person.hasOwnProperty("street")); // false (Nested property in 'address')
console.log(person.hasOwnProperty("isMarried")); // true
console.log(person.hasOwnProperty("nationality")); // true
console.log(person.hasOwnProperty("age")); // true
console.log(person.hasOwnProperty("lastName")); // true
console.log(person.hasOwnProperty("fullId")); // true (Method in the object)
