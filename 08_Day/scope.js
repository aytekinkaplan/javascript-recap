// Global Scope Example 1
let a = "JavaScript"; // Global variable
let b = 10; // Global variable

function letsLearnScope() {
  console.log(a, b); // Accesses global variables, logs: JavaScript 10
  if (true) {
    console.log(a, b); // Accesses global variables, logs: JavaScript 10
  }
}
console.log(a, b); // Logs: JavaScript 10
letsLearnScope();
console.log(a, b); // Logs: JavaScript 10

// Global Scope Example 2
let c = "Global Scope Variable"; // Global variable
function printGlobalVariable() {
  console.log(c); // Logs: Global Scope Variable
}
printGlobalVariable();

// Function Scope Example
function letsLearnScopeFunction() {
  let d = "Function Scoped Variable"; // Function-scoped variable
  console.log(d); // Logs: Function Scoped Variable

  if (true) {
    let e = "Block Scoped Variable"; // Block-scoped variable
    console.log(e); // Logs: Block Scoped Variable
  }
  // console.log(e); // Error: e is not defined (block-scoped)
}
letsLearnScopeFunction();

// Block Scope Example
let f = "Outer Scope"; // Global variable
if (true) {
  let f = "Block Scope"; // Redefines variable for this block only
  console.log(f); // Logs: Block Scope
}
console.log(f); // Logs: Outer Scope

// Re-declaration Example
let g = "First Declaration";
// let g = "Second Declaration"; // Error: Identifier 'g' has already been declared

// Const Example
const h = "Constant Value"; // Block-scoped and immutable
// h = "New Value"; // Error: Assignment to constant variable
console.log(h); // Logs: Constant Value

// Hoisting Example
function hoistingExample() {
  console.log(i); // Undefined (hoisted but uninitialized)
  var i = "Hoisted Variable"; // Function-scoped variable
  console.log(i); // Logs: Hoisted Variable
}
hoistingExample();
