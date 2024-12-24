const promise = new Promise((resolve) => {
  resolve(10);
});
promise
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => num * 4)
  .then((num) => console.log(num))
  .catch((error) => console.log(error));
console.log(promise);
