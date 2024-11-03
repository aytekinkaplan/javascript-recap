const { parse } = require("@babel/core");

let firstName = "Murat";
let lastName = "Melek";
let country = "Holland";
let city = "Amsterdam";
let language = "JavaScript";
let job = "Software Developer";
let isMarried = true;
let age = 32;

// Checking types of various variables
console.log(typeof firstName); // string - Data type of firstName
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof language); // string
console.log(typeof job); // string
console.log(typeof isMarried); // boolean - Data type of boolean value
console.log(typeof age); // number - Data type of number
console.log(typeof null); // object - typeof null is historically an object in JavaScript
console.log(typeof undefined); // undefined - Variable with no assigned value
console.log(typeof NaN); // number - NaN is technically of type number

console.log(typeof "Murat"); // string - Literal string
console.log(typeof 32); // number - Literal number

console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined

console.log(typeof [1, 2, 3]); // object - Arrays are of type object
console.log(typeof { name: "Murat", age: 32 }); // object - Regular object
console.log(typeof function () {}); // function - Functions have their own type
console.log(typeof Symbol()); // symbol - Unique identifier, introduced in ES6
console.log(typeof null); // object - As above, null is an object type due to historical reasons

console.log(typeof new Date()); // object - Date objects are of type object

console.log(typeof new RegExp()); // object - Regular expression objects
console.log(typeof new Error()); // object - Error objects
console.log(typeof new Array()); // object - Array instances
console.log(typeof new Object()); // object - Plain object instances
console.log(typeof new Set()); // object - Set collections
console.log(typeof new Map()); // object - Map collections
console.log(typeof new WeakSet()); // object - WeakSet collections
console.log(typeof new WeakMap()); // object - WeakMap collections
console.log(typeof new Promise(() => {})); // object - Promise instances

console.log(typeof new String()); // object - String wrapper object
console.log(typeof new Number()); // object - Number wrapper object
console.log(typeof new Boolean()); // object - Boolean wrapper object

console.log(typeof new ArrayBuffer()); // object - Binary data buffer
console.log(typeof new DataView(new ArrayBuffer(1))); // object - DataView for binary data
console.log(typeof new SharedArrayBuffer()); // object - Shared binary buffer
console.log(typeof new Int8Array()); // object - Typed array for 8-bit integers
console.log(typeof new Uint8Array()); // object - Typed array for unsigned 8-bit integers
console.log(typeof new Uint8ClampedArray()); // object - Clamped 8-bit unsigned integer array
console.log(typeof new Int16Array()); // object - Typed array for 16-bit integers
console.log(typeof new Uint16Array()); // object - Typed array for unsigned 16-bit integers
console.log(typeof new Int32Array()); // object - Typed array for 32-bit integers
console.log(typeof new Uint32Array()); // object - Typed array for unsigned 32-bit integers
console.log(typeof new Float32Array()); // object - Typed array for 32-bit floating points
console.log(typeof new Float64Array()); // object - Typed array for 64-bit floating points

// Changing Data Types

let x = 5;
console.log(typeof x); // number - Initial type is number
x = "5";
console.log(typeof x); // string - Now type is string
x = true;
console.log(typeof x); // boolean - Now type is boolean
x = { name: "Murat", age: 32 };
console.log(typeof x); // object - Now type is object
x = [1, 2, 3];
console.log(typeof x); // object - Arrays are still objects
x = function () {};
console.log(typeof x); // function - Now type is function
x = Symbol();
console.log(typeof x); // symbol - Symbol type

// Converting between types

let string = "5";
console.log(typeof string); // string - Type is string
let number = parseInt(string); // Converts to integer
console.log(typeof number); // number - Now type is number

let boolean = true;
console.log(typeof boolean); // boolean
let booleanString = boolean.toString(); // Converts boolean to string
console.log(typeof booleanString); // string - Now type is string

let object = { name: "Murat", age: 32 };
console.log(typeof object); // object
let objectString = JSON.stringify(object); // Converts object to JSON string
console.log(typeof objectString); // string - Now type is string

let array = [1, 2, 3];
console.log(typeof array); // object
let arrayString = JSON.stringify(array); // Converts array to JSON string
console.log(typeof arrayString); // string - Now type is string

// Attempting to convert a function to a string using JSON.stringify (will return undefined for non-serializable values)
let functionString = JSON.stringify(function () {});
console.log(typeof functionString); // string - Type is string, but value is undefined

let symbol = Symbol();
console.log(typeof symbol); // symbol - Unique Symbol type
let symbolString = JSON.stringify(symbol); // JSON.stringify returns undefined for Symbol
console.log(typeof symbolString); // string - Type is string, but value is undefined
