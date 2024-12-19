const max_speed = 100;
const min_speed = 0;
const current_speed = 10;
const speed = 50;
const speed_limit = 50;

let speed_status = "OK";
let speed_message = "You are driving at a safe speed";

if (current_speed > speed_limit) {
  speed_status = "OVER";
  speed_message = "You are driving over the speed limit";
}

console.log(speed_message);

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName);

let country = "United States";
let city = "New York";
let state = "NY";
let street = "Broadway";
let address = street + ", " + city + ", " + state + ", " + country;

console.log(address);

let age = 25;
let isMarried = true;
let hasChildren = false;

console.log(age);
console.log(isMarried);
console.log(hasChildren);

let year = 2021;
let month = 8;
let day = 22;

console.log(year + "-" + month + "-" + day);

let date = new Date();
console.log(date);

let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
console.log(time);

let first_var = "Hello",
  second_var = "World",
  third_var = "!",
  fourth_var = "Goodbye",
  fifth_var = "World";
console.log(first_var, second_var, third_var, fourth_var, fifth_var);
