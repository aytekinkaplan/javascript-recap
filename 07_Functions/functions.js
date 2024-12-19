"use strict";
const arr = Array(3);
console.log(arr); // [ <3 empty items> ]
console.log(arr.length); // 3
console.log(arr[0]); // undefined
console.log(arr[1]); // undefined
console.log(arr[2]); // undefined

const arr2 = Array.of(3);
console.log(arr2); // [ 3 ]
console.log(arr2.length); // 1
console.log(arr2[0]); // 3

const arr3 = Array(3).fill(3);
console.log(arr3); // [ 3, 3, 3 ]
console.log(arr3.length); // 3

const arr4 = [1, 2, 3];
console.log(arr4); // [ 1, 2, 3 ]
console.log(arr4.length); // 3
console.log(arr4[0]); // 1
console.log(arr4[1]); // 2
console.log(arr4[2]); // 3

const arr5 = Array.from("hello");
console.log(arr5); // [ 'h', 'e', 'l', 'l', 'o' ]

const arr6 = Array.from([1, 2, 3], (x) => x * 2);
console.log(arr6); // [ 2, 4, 6 ]

const arr7 = Array.from({ length: 3 }, (_, i) => i + 1);
console.log(arr7); // [ 1, 2, 3 ]

const arr8 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10));
console.log(arr8); // Rastgele sayı içeren bir dizi, örneğin [ 7, 4, 9 ]

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const max = Math.max(...numbers);
console.log(max); // 100

const min = Math.min(...numbers);
console.log(min); // 0

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 248.55

const fruits = ["apple", "banana", "orange", "watermelon", "kiwi", "mango"];
const firstTwo = fruits.slice(0, 2);
console.log(firstTwo); // [ 'apple', 'banana' ]

const lastTwo = fruits.slice(-2);
console.log(lastTwo); // [ 'kiwi', 'mango' ]

const vegetables = [
  "carrot",
  "potato",
  "tomato",
  "onion",
  "cucumber",
  "lettuce",
];
const firstThree = vegetables.slice(0, 3);
console.log(firstThree); // [ 'carrot', 'potato', 'tomato' ]

const lastThree = vegetables.slice(-3);
console.log(lastThree); // [ 'tomato', 'onion', 'cucumber' ]
