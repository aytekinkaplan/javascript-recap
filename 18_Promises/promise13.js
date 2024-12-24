const step1 = () => Promise.resolve(10);
const step2 = (num) => Promise.resolve(num * 2);
const step3 = (num) => Promise.resolve(num * 3);
const step4 = (num) => Promise.resolve(num * 4);
const step5 = (num) => Promise.resolve(num * 5);

step1()
  .then(step2)
  .then(step3)
  .then(step4)
  .then(step5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(step1());
