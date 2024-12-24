const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

timeout(1000).then(() => console.log("1 sec passed"));
