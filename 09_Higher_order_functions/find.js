const names = ["Alice", "Bob", "Charlie", "Debbie"];
const found = names.find((name) => name.toLowerCase().includes("e"));
console.log(found); // Output: Alice

const ages = [24, 22, 25, 32, 35, 18];
const oldest = ages.find((age) => age > 30);
console.log(oldest); // Output: 32

const users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 },
  { name: "Debbie", age: 32 },
  { name: "Eve", age: 35 },
  { name: "Frank", age: 18 },
];
const oldestUser = users.find((user) => user.age > 30);
console.log(oldestUser); // Output: { name: "Debbie", age: 32 }

const names2 = ["Alice", "Bob", "Charlie", "Debbie"];
const found2 = names2.find((name) => name.toLowerCase().includes("e"));
console.log(found2); // Output: Alice

const ages2 = [24, 22, 25, 32, 35, 18];
const oldest2 = ages2.find((age) => age > 30);
console.log(oldest2); // Output: 32
