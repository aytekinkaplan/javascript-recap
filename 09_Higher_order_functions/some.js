// some
const names = ["Alice", "Bob", "Charlie", "Debbie"];
const hasE = names.some((name) => name.toLowerCase().includes("e"));
console.log(hasE); // Output: true

const ages = [24, 22, 25, 32, 35, 18];
const isOver30 = ages.some((age) => age > 30);
console.log(isOver30); // Output: true

const users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 },
  { name: "Debbie", age: 32 },
  { name: "Eve", age: 35 },
  { name: "Frank", age: 18 },
];
const isUserOver30 = users.some((user) => user.age > 30);
console.log(isUserOver30); // Output: true
