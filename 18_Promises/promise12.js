const step1 = () => Promise.resolve("Data from Step 1");
const step2 = () => Promise.resolve("Data from Step 2");
const step3 = (data) => Promise.resolve(`Step 3 completed: ${data}`);

step1()
  .then(step2)
  .then(step3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(step1());
