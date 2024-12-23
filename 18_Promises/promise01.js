// Function that fetches data from an API and returns a Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { name: "John Doe", age: 30, city: "New York" },
        { name: "Jane Smith", age: 25, city: "Los Angeles" },
        { name: "Bob Johnson", age: 40, city: "Chicago" },
        { name: "Alice Brown", age: 35, city: "Houston" },
        { name: "Charlie Davis", age: 45, city: "Miami" },
      ];

      // Error simulation (e.g., network failure)
      const error = false; // Set to true to simulate an error

      if (error) {
        reject("An error occurred while fetching data!");
      } else {
        resolve(data); // Data fetched successfully
      }
    }, 1000); // 1-second delay to simulate an API call
  });
};

// Handling the Promise
fetchData()
  .then((data) => {
    data.forEach((element) => {
      console.log(
        `Name: ${element.name}, Age: ${element.age}, City: ${element.city}`
      );
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
