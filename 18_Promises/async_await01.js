const fetchData = async () => {
  return "Data retrieved successfully";
};

const processData = async () => {
  const data = await fetchData();
  console.log(data);
};

processData();
