let firstName = "Murat";
let lastName = "Melek";
let country = "Holland";
let city = "Amsterdam";
let age = 32;
let isMarried = true;
let job = "Software Developer"; // job değişkeni tanımlandı

let sentence = `I am ${firstName} ${lastName}. I am from ${country}. I live in ${city}. I am ${age} years old. I am ${job}. I am married: ${isMarried}.`;
console.log(sentence);

// Output: I am Murat Melek. I am from Holland. I live in Amsterdam. I am 32 years old. I am Software Developer. I am married: true.

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean

console.log("10"===10)

console.log(parseInt("10")===10)

console.log("9.81"===10)

console.log(4 === 4);

console.log(4 == 4);

console.log(4 != 4);

console.log(4 > 4);

console.log(4 < 4);

console.log(4 >= 4);

console.log(4 <= 4);

console.log(4 <= 5);

console.log(4 >= 5);

console.log(4 == "4");

console.log(4 === "4");

console.log(4 !== "4");

// What is the year today?
console.log("What is the year today?");
let year = new Date().getFullYear();
console.log(year);

// What is the month today as a number?
console.log("What is the month today as a number?");
let month = new Date().getMonth() + 1;
console.log(month);

// What is the date today?
console.log("What is the date today?");
let date = new Date().getDate();
console.log(date);

// What is the day today as a number?
console.log("What is the day today as a number?");
let day = new Date().getDay();
console.log(day);

// What is the hours now?
console.log("What is the hours now?");
let hours = new Date().getHours();
console.log(hours);

// What is the minutes now?
console.log("What is the minutes now?");
let minutes = new Date().getMinutes();
console.log(minutes);

// What is the seconds now?
console.log("What is the seconds now?");
let seconds = new Date().getSeconds();
console.log(seconds);

