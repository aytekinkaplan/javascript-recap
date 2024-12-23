// Fundamentals of Promises
const promise = new Promise((resolve, reject) => {
  resolve("Process completed!");
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(promise);
