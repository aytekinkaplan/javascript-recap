let space = " ";
let tab = "\t";
let lineBreak = "\n";

console.log(space, tab, lineBreak);

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + space + lastName;

console.log(fullName);

let country = "United States";
let city = "New York";
let state = "NY";
let street = "Broadway";
let address1 = street + space + city + space + state + space + country;
let address2 = `${street} ${city} ${state} ${country}`;
let address3 = street.concat(space, city, space, state, space, country);
let address4 =
  street + lineBreak + city + lineBreak + state + lineBreak + country;

console.log(address1);
console.log(address2);
console.log(address3);
console.log(address4);

// Template Literals
let name = "John";
let age = 30;
let message = `Hello, ${name}! You are ${age} years old.`;

console.log(message);

let message2 = `Hello, ${name}! You are ${age} years old. Next year, you will be ${
  age + 1
} years old.`;

console.log(message2);

let message3 = `Hello, ${name}! You are ${age} years old. Next year, you will be ${
  age + 1
} years old.`;

console.log(message3);

let first_name = "John";
let last_name = "Doe";
let country_name = "United States";
let city_name = "New York";
let state_name = "NY";
let tech_languages = "JavaScript, Python, Java, Ruby, C, C++";
let job = "Software Developer";
let is_married = true;
let age1 = 30;
let height = 1.8;
let weight = 80;
let is_student = false;

let personInfo = `First Name: ${first_name}
Last Name: ${last_name}
Country: ${country_name}
City: ${city_name}
State: ${state_name}
Tech Languages: ${tech_languages}
Job: ${job}
Is Married: ${is_married}
Age: ${age1}
Height: ${height}
Weight: ${weight}
Is Student: ${is_student}`;

console.log(personInfo);
