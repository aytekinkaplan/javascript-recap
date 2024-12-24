const promise = new Promise((resolve, reject) => {
  reject("An error occurred!");
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(promise);
