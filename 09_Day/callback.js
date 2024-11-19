function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 1000);

setTimeout(() => console.log("Hello"), 1000); // 1 set;

// Functional Programming

const sayHello = () => console.log("Hello");
setInterval(sayHello, 1000);

setTimeout(() => console.log("Hello"), 1000);

const sayHello = () => console.log("Hello");
setInterval(sayHello, 1000);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArr = arr.filter((item) => item % 2 === 0);
console.log(filteredArr);

const arrayed = arr.forEach((item) => item % 2 === 0);
console.log(arrayed);
