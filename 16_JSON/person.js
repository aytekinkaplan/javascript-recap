const person = require("./person.json");

person.users.forEach((user) => {
  console.log("Name: ", user.firstName);
});

person.users.forEach((user) => {
  console.log("User email: ", user.email);
});

person.users.forEach((user) => {
  if (user.isMarried) {
    console.log("User is married: ", user.firstName);
  }
});

person.users.forEach((user) => {
  if (user.age > 30) {
    console.log("User is over 30: ", user.firstName);
  }
});
