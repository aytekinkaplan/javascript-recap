let weather = "rainy";

if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("It's a rainy day!");
} else {
  console.log("The weather is unknown.");
}

// Output: It's a rainy day!

// Switch Statement
// The switch statement is another way to write conditional statements. It is useful when you have multiple conditions to check.

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
    console.log("It's Wednesday!");
    break;
  case "Thursday":
    console.log("It's Thursday!");
    break;
  case "Friday":
    console.log("It's Friday!");
    break;
  case "Saturday":
    console.log("It's Saturday!");
    break;
  case "Sunday":
    console.log("It's Sunday!");
    break;
  default:
    console.log("The day is unknown.");
}

// Output: It's Monday!

let weather_now = "sunny";

switch (weather_now) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("It's a rainy day!");
    break;
  default:
    console.log("The weather is unknown.");
}

// Output: It's a beautiful day!

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); // Output: Yes
