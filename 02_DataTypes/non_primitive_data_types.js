let nums = [1, 2, 3, 4, 5];
let str = "Hello, world!";
let bool = true;
let obj = { name: "John", age: 30 };
let arr = [1, 2, 3];
let func = function () {};
let und = undefined;
let nul = null;
let nan = NaN;
let inf = Infinity;
let negInf = -Infinity;
let bigInt = 9007199254740991n;
let sym = Symbol("symbol");
let map = new Map();
let set = new Set();
let weakMap = new WeakMap();
let weakSet = new WeakSet();

let userOne = {
  name: "John",
  role: "admin",
  country: "USA",
  age: 30,
  isAdmin: true,
};

let userTwo = {
  name: "Jane",
  role: "user",
  country: "Canada",
  age: 25,
  isAdmin: false,
};

console.log(userOne === userTwo);
console.log(userOne !== userTwo);

console.log(userOne.name === userTwo.name);
console.log(userOne.name !== userTwo.name);

console.log(userOne.role === userTwo.role);
console.log(userOne.role !== userTwo.role);

console.log(userOne.country === userTwo.country);
console.log(userOne.country !== userTwo.country);

console.log(userOne.age === userTwo.age);
console.log(userOne.age !== userTwo.age);

console.log(userOne.isAdmin === userTwo.isAdmin);
console.log(userOne.isAdmin !== userTwo.isAdmin);

console.log(userOne.name === userTwo.name && userOne.role === userTwo.role);
console.log(userOne.name === userTwo.name || userOne.role === userTwo.role);

for (let key in userOne) {
  console.log(key, userOne[key]);
}

for (let key in userTwo) {
  console.log(" " + " " + key, userTwo[key]);
}
