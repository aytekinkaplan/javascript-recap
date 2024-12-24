// Fundamentals of Promises
const promise = new Promise((resolve, reject) => {
  resolve("Process completed!");
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(promise);

// Output:
// Process completed!
// Promise { <pending> }

const newPromise = new Promise((resolve, reject) => {
  resolve("My name is John Doe!");
});

newPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(newPromise);
