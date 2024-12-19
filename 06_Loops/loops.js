// for Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// Output: 5 4 3 2 1 0

const countriesInEurope = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

for (let i = 0; i < countriesInEurope.length; i++) {
  console.log(countriesInEurope[i].toUpperCase());
}
// Output: FINLAND SWEDEN DENMARK NORWAY ICELAND

for (let i = 0; i < countriesInEurope.length; i++) {
  console.log(countriesInEurope[i].length);
}

// Output: 8 6 7 6 7

for (let i = 0; i < countriesInEurope.length; i++) {
  console.log(countriesInEurope[i].substring(0, 3).toUpperCase());
}

// Output: FIN SWD DEN NOR ICE

// for...of Loop
for (const country of countriesInEurope) {
  console.log(country);
}

// Output: Finland Sweden Denmark Norway Iceland

for (const country of countriesInEurope) {
  console.log(country.toUpperCase());
}

// Output: FINLAND SWEDEN DENMARK NORWAY ICELAND

for (const country of countriesInEurope) {
  console.log(country.length);
}

// Output: 8 6 7 6 7

for (const country of countriesInEurope) {
  console.log(country.substring(0, 3).toUpperCase());
}

// Output: FIN SWD DEN NOR ICE

// forEach Method
countriesInEurope.forEach((country) => {
  console.log(country);
});

// Output: Finland Sweden Denmark Norway Iceland

countriesInEurope.forEach((country) => {
  console.log(country.toUpperCase());
});

// Output: FINLAND SWEDEN DENMARK NORWAY ICELAND

countriesInEurope.forEach((country) => {
  console.log(country.length);
});

// Output: 8 6 7 6 7

countriesInEurope.forEach((country) => {
  console.log(country.substring(0, 3).toUpperCase());
});

// Output: FIN SWD DEN NOR ICE

// Adding elements to an array using for loop
const numbers = new Array(10);
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = i + 1;
}
console.log(numbers);

// Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Adding elements to an array using for...of loop
const numbers2 = new Array(10);
for (const number of numbers2) {
  numbers2[number] = number + 1;
}
console.log(numbers2);

// Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Adding elements to an array using forEach method
const numbers3 = new Array(numbers2.length);
numbers3.forEach((number, index) => {
  numbers3[index] = 2 * number + 1;
});
console.log(numbers3);

// Output: [ 3, 5, 7, 9, 11, 13, 15, 17, 19, 21 ]

// While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Output: 0 1 2 3 4

// Do...While Loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// Output: 0 1 2 3 4

// Break Statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Output: 0 1 2 3 4

// Continue Statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Output: 0 1 2 3 4 6 7 8 9

// Nested Loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// Output: i: 0, j: 0 i: 0, j: 1 i: 0, j: 2 i: 1, j: 0 i: 1, j: 1 i: 1, j: 2 i: 2, j: 0 i: 2, j: 1 i: 2, j: 2

// Labelled Loops
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
    if (i === 1 && j === 1) {
      break outer;
    }
  }
}

// Output: i: 0, j: 0 i: 0, j: 1 i: 0, j: 2 i: 1, j: 0 i: 1, j: 1
