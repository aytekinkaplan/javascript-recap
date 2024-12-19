// sort

names = ["Alice", "Bob", "Charlie", "Debbie"];
names.sort();
console.log(names); // Output: [ 'Alice', 'Bob', 'Charlie', 'Debbie' ]

ages = [24, 22, 25, 32, 35, 18];
ages.sort();
console.log(ages); // Output: [ 18, 22, 24, 25, 32, 35 ]

users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 },
  { name: "Debbie", age: 32 },
  { name: "Eve", age: 35 },
  { name: "Frank", age: 18 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);
