// Regular function to print "Hello" repeatedly every second
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 1000); // Executes 'sayHello' every 1000ms (1 second)

// Single execution of "Hello" after 1 second using setTimeout
setTimeout(() => console.log("Hello"), 1000); // Executes once after 1000ms

// Using an arrow function for the same purpose
const sayHelloArrow = () => console.log("Hello");
setInterval(sayHelloArrow, 1000); // Executes 'sayHelloArrow' every 1000ms

// Filter example: Get even numbers from an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArr = arr.filter((item) => item % 2 === 0);
console.log(filteredArr); // Output: [2, 4, 6, 8, 10]

// Correct usage of forEach to print even numbers
arr.forEach((item) => {
  if (item % 2 === 0) {
    console.log(item); // Prints even numbers individually
  }
});

// Incorrect use of forEach to create an array (forEach does not return anything)
const arrayed = arr.forEach((item) => item % 2 === 0);
console.log(arrayed); // Output: undefined because forEach doesn't return a value
