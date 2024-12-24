const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise
  .then((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("Promise completed!");
  });

console.log(promise);
