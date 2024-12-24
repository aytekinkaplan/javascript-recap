const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ name: "John Doe", age: 30 });
      } else {
        reject("An error occurred while fetching data!");
      }
    }, 2000); // 2-second delay
  });
};

fetchData()
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Promise completed!");
  });

console.log(fetchData());

// Output:
// Promise {<pending>}
// Data fetched: {name: 'John Doe', age: 30}
// Promise completed!
