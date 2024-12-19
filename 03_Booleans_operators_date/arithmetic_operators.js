// Addition
let a = 10;
let b = 5;
let c = a + b;
console.log(c);

// Subtraction

let d = a - b;
console.log(d);

// Multiplication

let e = a * b;
console.log(e);

// Division

let f = a / b;
console.log(f);

// Modulus

let g = a % b;
console.log(g);

// Increment

let h = a++;
console.log(h);

let i = b--;
console.log(i);

// Decrement

let j = a--;
console.log(j);

let k = b++;
console.log(k);

// Comparison Operators

let l = a > b;
console.log(l);

let m = a < b;
console.log(m);

let n = a >= b;
console.log(n);

let o = a <= b;
console.log(o);

let p = a == b;
console.log(p);

const areaOfCircle = function (radius) {
  return Math.PI * radius * radius;
};

const circumferenceOfCircle = function (radius) {
  return 2 * Math.PI * radius;
};

const volumeOfSphere = function (radius) {
  return (4 / 3) * Math.PI * radius * radius * radius;
};

const surfaceAreaOfSphere = function (radius) {
  return 4 * Math.PI * radius * radius;
};

// Comparison Operators

let q = a > b;
console.log(q);

let r = a < b;
console.log(r);

let s = a >= b;
console.log(s);

let t = a <= b;
console.log(t);

let u = a == b;
console.log(u);

// Logical Operators

let v = a && b;
console.log(v);

let w = a || b;
console.log(w);

let x = !a;
console.log(x);

// Terinary Operators

let y = a > b ? "a is greater than b" : "a is less than b";
console.log(y);

let z = a > b ? "a is greater than b" : "a is less than b";
console.log(z);

// Creating a time object
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(hours, minutes, seconds);
