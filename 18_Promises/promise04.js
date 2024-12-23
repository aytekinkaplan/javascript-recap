const task1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 completed"), 1000)
);

const task2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 completed"), 2000)
);
const task3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3 completed"), 1500)
);

Promise.all([task1, task2, task3])
  .then((results) => {
    console.log("All tasks completed:", results);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
