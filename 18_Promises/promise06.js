const promise = new Promise((resolve, reject) => {
  let num = 11;
  if (num === 10) {
    resolve("Success");
  } else {
    reject("Fail");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(promise);
