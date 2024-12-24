const numbers = [1, 2, 3, 4, 5];

Promise.all(numbers.map((num) => Promise.resolve(num * 2))).then((result) =>
  console.log(result)
);

console.log(Promise.all(numbers.map((num) => Promise.resolve(num * 2))));
