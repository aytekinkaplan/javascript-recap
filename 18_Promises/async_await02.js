const fetchData = async () => {
  const success = true; // Simulate success or failure

  if (success) {
    return "Data retrieved successfully!";
  } else {
    throw new Error("An error occurred while fetching data!");
  }
};

const processData = async () => {
  try {
    const data = await fetchData();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

processData();
