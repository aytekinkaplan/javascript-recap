const fetchData = async () => {
  return Math.random() > 0.5
    ? "Data retrieved successfully"
    : Promise.reject(new Error("An error occurred while fetching data"));
};

const retry = async () => {
  for (let i = 0; i < 3; i++) {
    try {
      const data = await fetchData();
      console.log("Data:", data);
      return data; // Exit the function upon success
    } catch (error) {
      console.error(`Attempt ${i + 1}:`, error.message);
    }
  }
  throw new Error("All retry attempts failed.");
};

retry()
  .then((result) => console.log("Final Result:", result))
  .catch((error) => console.error("Final Error:", error.message));
