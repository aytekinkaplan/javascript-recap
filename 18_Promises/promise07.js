const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Process completed!");
  }, 3000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(promise);
