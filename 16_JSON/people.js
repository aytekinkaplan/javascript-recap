const people = require("./people.json");

// Listing all users
console.log("All users:");
for (let user in people) {
  // Use for...in for object iteration
  console.log(`${user}: ${people[user].email}`);

  console.log(`${user}'s Skills:`);
  people[user].skills.forEach((skill) => {
    // Assuming skills is an array
    console.log(`- ${skill}`);
  });

  console.log(`${user}: ${people[user].age}\n
  ${user}: ${people[user].isLoggedIn}\n
  ${user}: ${people[user].points}\n
  ${user}: ${people[user].country}\n
  `);
}
