const step1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve("Data from Step 1");
    }, 1000);
  });
};

const step2 = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed:", data);
      resolve("Data from Step 2");
    }, 1000);
  });
};

const step3 = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed:", data);
      resolve("All steps completed!");
    }, 1000);
  });
};

// Promise Chain
step1()
  .then(step2)
  .then(step3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
