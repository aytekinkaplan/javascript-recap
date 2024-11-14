// Function to display a full name without parameters
function fullName() {
  let firstName = "Murat";
  let lastName = "Melek";
  let fullName = firstName + " " + lastName;
  console.log("fullName:", fullName);
}
fullName(); // Output: Murat Melek

// Function to display a full name with parameters
function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log("fullName:", fullName);
}
fullName("Murat", "Melek"); // Output: Murat Melek

// Function to add two numbers and print the sum
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log("Sum:", sum);
}
addNumbers(5, 3); // Output: Sum: 8

// Function to calculate the area of a rectangle
function areaOfRectangle(length, width) {
  let area = length * width;
  console.log("Area:", area);
}
areaOfRectangle(5, 3); // Output: Area: 15

// Function to calculate the perimeter of a rectangle
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  console.log("Perimeter:", perimeter);
}
perimeterOfRectangle(5, 3); // Output: Perimeter: 14

// Function to calculate the volume of a cuboid
function volumeOfCuboid(length, width, height) {
  let volume = length * width * height;
  console.log("Volume:", volume);
}
volumeOfCuboid(5, 3, 2); // Output: Volume: 30

// Function to calculate the area of a circle
function areaOfCircle(radius) {
  let area = Math.PI * radius * radius;
  console.log("Area:", area);
}
areaOfCircle(5); // Output: Area: 78.5

// Function to calculate the circumference of a circle
function circumferenceOfCircle(radius) {
  let circumference = 2 * Math.PI * radius;
  console.log("Circumference:", circumference);
}
circumferenceOfCircle(5); // Output: Circumference: 31.41592653589793

// Function to calculate the area of a triangle
function areaOfTriangle(base, height) {
  let area = 0.5 * base * height;
  console.log("Area:", area);
}
areaOfTriangle(5, 3); // Output: Area: 7.5

// Function to calculate density
function density(mass, volume) {
  let density = mass / volume;
  console.log("Density:", density);
}
density(5, 10); // Output: Density: 0.5

// Function to calculate speed
function speed(distance, time) {
  let speed = distance / time;
  console.log("Speed:", speed);
}
speed(100, 10); // Output: Speed: 10

// Function to convert Fahrenheit to Celsius
function temperatureInCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log("Temperature in Celsius:", celsius);
}
temperatureInCelsius(68); // Output: Temperature in Celsius: 20

// Function to convert Celsius to Fahrenheit
function temperatureInFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log("Temperature in Fahrenheit:", fahrenheit);
}
temperatureInFahrenheit(20); // Output: Temperature in Fahrenheit: 68

// Function to calculate Body Mass Index (BMI)
function bodyMassIndex(weight, height) {
  let bmi = weight / (height * height);
  console.log("Body Mass Index (BMI):", bmi);
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal weight");
  } else {
    console.log("Overweight");
  }
}
bodyMassIndex(65, 1.8); // Output: Body Mass Index (BMI): 18.75, Underweight

// Function to convert Fahrenheit to Kelvin
function temperatureInKelvin(fahrenheit) {
  let kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
  console.log("Temperature in Kelvin:", kelvin);
}
temperatureInKelvin(68); // Output: Temperature in Kelvin: 293.15

// Function to convert Fahrenheit to Rankine
function temperatureInRankine(fahrenheit) {
  let rankine = fahrenheit + 459.67;
  console.log("Temperature in Rankine:", rankine);
}
temperatureInRankine(68); // Output: Temperature in Rankine: 527.67

// Function to convert Fahrenheit to Réaumur
function temperatureInReaumur(fahrenheit) {
  let reaumur = ((fahrenheit - 32) * 4) / 9;
  console.log("Temperature in Réaumur:", reaumur);
}
temperatureInReaumur(68); // Output: Temperature in Réaumur: 17.7777777778

// Function to convert Fahrenheit to Romer
function temperatureInRomer(fahrenheit) {
  let romer = ((fahrenheit - 32) * 7) / 24 + 7.5;
  console.log("Temperature in Romer:", romer);
}
temperatureInRomer(68); // Output: Temperature in Romer: 13.125

// Function to convert Fahrenheit to Newton
function temperatureInNewton(fahrenheit) {
  let newton = ((fahrenheit - 32) * 11) / 60;
  console.log("Temperature in Newton:", newton);
}
temperatureInNewton(68); // Output: Temperature in Newton: 6.1111111111

// Function to find the maximum number from a list of numbers
function findingMax(...numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log("Maximum number:", max);
}
findingMax(1, 2, 3, 4, 5); // Output: Maximum number: 5
