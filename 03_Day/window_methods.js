// Use of alert() method
alert("Hello, World!"); // Displays an alert dialog with the message "Hello, World!"

// Use of confirm() method
let result = confirm("Are you sure?"); // Displays a confirmation dialog with "OK" and "Cancel" options
console.log(result); // Logs true if "OK" is clicked, false if "Cancel" is clicked

// Use of prompt() method
let name = prompt("Enter your name:"); // Displays a prompt dialog asking for user input
console.log(name); // Logs the entered value

// Use of console.log() method
console.log("Hello, World!"); // Logs the message "Hello, World!" to the console

// Use of console.warn() method
console.warn("Warning: This is a warning message"); // Logs a warning message to the console

// Use of console.error() method
console.error("Error: This is an error message"); // Logs an error message to the console

// Use of console.info() method
console.info("Information: This is an information message"); // Logs an information message to the console

// Use of console.clear() method
console.clear(); // Clears all messages in the console

// Use of console.dir() method
console.dir(document); // Displays an interactive list of properties of the document object in the console

// Use of console.table() method
console.table(document); // Displays the document object properties in a table format

// Use of console.time() and console.timeEnd() methods
console.time("myTimer"); // Starts a timer labeled "myTimer"
console.log("Hello, World!"); // Logs a message
console.timeEnd("myTimer"); // Stops the timer and logs the time elapsed

// Use of console.group() and console.groupEnd() methods
console.group("Group 1"); // Starts a new console group labeled "Group 1"
console.log("Hello, World!"); // Logs a message within the group
console.groupEnd("Group 1"); // Ends the console group

// Use of console.groupCollapsed() and console.groupEnd() methods
console.groupCollapsed("Group 2"); // Starts a collapsed console group labeled "Group 2"
console.log("Hello, World!"); // Logs a message within the collapsed group
console.groupEnd("Group 2"); // Ends the collapsed group

// Use of console.trace() method
console.trace(); // Logs a stack trace from the current point of execution

// Use of console.assert() method
console.assert(1 === 2, "Assertion failed"); // Logs an assertion failure message if the condition is false

// Use of console.count() method
console.count("count1"); // Logs a count labeled "count1"
console.count("count1"); // Increments and logs the count for "count1"
console.count("count2"); // Logs a count labeled "count2"
