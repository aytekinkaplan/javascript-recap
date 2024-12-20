// Creating an empty map
const myMap = new Map();
console.log(myMap); // Map {}

// Adding key-value pairs to the map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");
myMap.set("name", "Jane");
console.log(myMap); // Map { "name" => "Jane", "age" => 30, "city" => "New York" }

// Getting the value associated with a key
console.log(myMap.get("name")); // "Jane"

// Checking if a key exists in the map
console.log(myMap.has("name")); // true

// Removing a key-value pair from the map
myMap.delete("age");
console.log(myMap); // Map { "name" => "Jane", "city" => "New York" }

// Iterating over the map
for (const [key, value] of myMap) {
  console.log(key, value); // "name" "Jane", "city" "New York"
}

// Getting the size of the map
console.log(myMap.size); // 2

// Clearing the map
myMap.clear();
console.log(myMap); // Map {}

// Checking if the map is empty
console.log(myMap.size === 0); // true

// Creating a map from an array of key-value pairs
const myMap2 = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);
console.log(myMap2); // Map { "name" => "John", "age" => 30, "city" => "New York" }

// Creating a map from an array of key-value pairs
const myMap3 = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);
console.log(myMap3); // Map { "name" => "John", "age" => 30, "city" => "New York" }

// Creating a map from an object
const myMap4 = new Map(
  Object.entries({ name: "John", age: 30, city: "New York" })
);
console.log(myMap4); // Map { "name" => "John", "age" => 30, "city" => "New York" }

// Adding a new key-value pair to the map
myMap4.set("country", "USA");
console.log(myMap4); // Map { "name" => "John", "age" => 30, "city" => "New York", "country" => "USA" }

// Getting the value associated with a key
console.log(myMap4.get("name")); // "John"

// Checking key in Map
console.log(myMap4.has("name")); // true

// Removing a key-value pair from the map
myMap4.delete("age");
console.log(myMap4); // Map { "name" => "John", "city" => "New York", "country" => "USA" }

// Iterating over the map
for (const [key, value] of myMap4) {
  console.log(key, value); // "name" "John", "city" "New York", "country" "USA"
}

// Getting the size of the map
console.log(myMap4.size); // 3

// Clearing the map
myMap4.clear();
console.log(myMap4); // Map {}
