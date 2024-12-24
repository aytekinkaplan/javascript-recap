const fetchUser = async (id) => {
  return { id, name: "John Doe" };
};
fetchUser(1)
  .then((user) => console.log(user))
  .catch((error) => console.error(error));

console.log(fetchUser(1));
