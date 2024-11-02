// Array Declaration using Literal Syntax
let nums = [1, 2, 3, 4, 5];
console.log("First element in nums:", nums[0]); // Accessing first element, should print 1
console.log("Array nums:", nums); // Prints the entire array [1, 2, 3, 4, 5]

// Array Declaration using Constructor Syntax
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Array numbers:", numbers); // Prints the array [1, 2, 3, 4, 5]

// Comparing two arrays - even if they have the same elements, they are different objects in memory
console.log("Are nums and numbers the same?", nums === numbers); // false

// Creating an Object using Literal Syntax
let userOne = {
  name: "Murat",
  surname: "Melek",
  age: 32,
  married: true,
  address: {
    city: "Amsterdam",
    country: "Holland",
  },
};

console.log("User One Object:", userOne); // Print entire userOne object

// Accessing Properties of an Object
console.log("Name:", userOne.name); // Murat
console.log("Surname:", userOne.surname); // Melek
console.log("Age:", userOne.age); // 32
console.log("Marital Status:", userOne.married); // true
console.log("Address:", userOne.address); // Prints the nested address object { city: "Amsterdam", country: "Holland" }
console.log("City:", userOne.address.city); // Amsterdam
console.log("Country:", userOne.address.country); // Holland

// Creating an Object using Constructor Syntax
let userTwo = new Object();
userTwo.name = "John";
userTwo.surname = "Doe";
userTwo.age = 30;
userTwo.married = false;
userTwo.address = {
  city: "New York",
  country: "USA",
};

console.log("User Two Object:", userTwo); // Print the entire userTwo object

// Explanation:
// 1. Array literal syntax ([ ]) is simpler and preferred for creating arrays, while `new Array()` is rarely needed.
// 2. Object literal syntax ({ }) is also simpler and more readable, whereas `new Object()` is used less often.
// 3. Objects and arrays created separately hold unique references in memory. Even if `nums` and `numbers` contain identical elements, they are different objects, so `nums === numbers` returns `false`.
// 4. Nested objects can be accessed with dot notation, as seen with `userOne.address.city`.

// Additional Examples

// Adding new properties to an existing object
userTwo.email = "johndoe@example.com";
console.log("Updated userTwo with email:", userTwo); // Includes email property

// Updating an existing property
userOne.age = 33; // Updates age to 33
console.log("Updated age in userOne:", userOne.age); // 33

// Deleting a property
delete userOne.married;
console.log("UserOne after deleting 'married' property:", userOne); // 'married' property is removed

// Merging objects
let additionalInfo = { hobby: "photography", language: "English" };
Object.assign(userOne, additionalInfo);
console.log("UserOne after merging additionalInfo:", userOne); // Now includes hobby and language

// Summary:
// - Arrays and objects can be created using literal syntax or constructors.
// - Properties of objects can be added, updated, or deleted after creation.
// - The `Object.assign()` method allows merging two objects, adding all properties from the source object(s) to the target.
