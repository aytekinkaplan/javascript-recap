// Declare a variable named challenge and assign it to an initial value 'Become a JavaScript Pro in a Month of Learning'.
let challenge = "Become a JavaScript Pro in a Month of Learning";
console.log(challenge); // Outputs the full string

// Print the string on the browser console using console.log()
console.log(challenge); // Prints 'Become a JavaScript Pro in a Month of Learning'

// Print the length of the string on the browser console using console.log()
console.log(challenge.length); // Outputs the length of the string

// Change all the string characters to uppercase letters using toUpperCase() method
console.log(challenge.toUpperCase()); // Converts all characters to uppercase

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase()); // Converts all characters to lowercase

// Cut (slice) out the first word from the string using substr() or substring() method
console.log(challenge.substr(0, 6)); // Extracts 'Become' using substr
console.log(challenge.substring(0, 6)); // Extracts 'Become' using substring

// Slice out the first word from the string using slice() method
console.log(challenge.slice(0, 6)); // Extracts 'Become' using slice

// Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script")); // Checks if 'Script' is in the string

// Split the string into an array using split() method
console.log(challenge.split()); // Splits the string into an array with one element

// Split the string into an array where the separator is the space using split() method
console.log(challenge.split(" ")); // Splits the string by spaces into words

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")); // Splits the string into an array of company names

// Change this array to string using join() method
console.log(["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"].join(", ")); // Joins the array into a single string with commas

// What is character at index 0 in 'Facebook' string? Use charAt() method
console.log("Facebook".charAt(0)); // Outputs 'F'

// What is the character code of 'F' in 'Facebook' string? Use charCodeAt() method
console.log("Facebook".charCodeAt(0)); // Outputs the Unicode of 'F', which is 70

// Use indexOf to determine the position of the first occurrence of 'c' in 'Facebook'
console.log("Facebook".indexOf("c")); // Outputs the index of first 'c'

// Use lastIndexOf to determine the position of the last occurrence of 'c' in 'Facebook'
console.log("Facebook".lastIndexOf("c")); // Outputs the index of last 'c'

// Use indexOf to find the position of the first occurrence of the space in 'Facebook'
console.log("Facebook".indexOf(" ")); // Outputs -1, as there is no space

// Use lastIndexOf to find the position of the last occurrence of the space in 'Facebook'
console.log("Facebook".lastIndexOf(" ")); // Outputs -1, as there is no space

// Use trim() to remove any trailing whitespace at the beginning and the end of a string
console.log("   Facebook   ".trim()); // Removes spaces from both ends

// Use trimStart() to remove any trailing whitespace at the beginning of a string
console.log("   Facebook   ".trimStart()); // Removes spaces from the start

// Use trimEnd() to remove any trailing whitespace at the end of a string
console.log("   Facebook   ".trimEnd()); // Removes spaces from the end

// Use startsWith() to check if the string starts with 'Face'
console.log("Facebook".startsWith("Face")); // Checks if the string starts with 'Face'

// Use endsWith() to check if the string ends with 'book'
console.log("Facebook".endsWith("book")); // Checks if the string ends with 'book'

// Use repeat() to print 'Facebook' 4 times
console.log("Facebook".repeat(4)); // Repeats 'Facebook' 4 times

// Use replace() to replace 'Facebook' with 'FaceBook'
console.log("Facebook".replace("Facebook", "FaceBook")); // Changes the string to 'FaceBook'

// Use replace() to replace the first occurrence of 'c' with 'z' in 'Facebook'
console.log("Facebook".replace("c", "z")); // Changes 'c' to 'z' at first occurrence, resulting in 'Fazebook'

// Use replace() with a global flag to replace all occurrences of 'c' with 'z' in 'Facebook'
console.log("Facebook".replace(/c/g, "z")); // Replaces all 'c's with 'z's, resulting in 'Fazebooz'

// Use match() to find all occurrences of 'c' in 'Facebook'
console.log("Facebook".match(/c/g)); // Returns an array of matches, ["c", "c"]

// Use search() to find the position of the first occurrence of 'c' in 'Facebook'
console.log("Facebook".search(/c/)); // Outputs the index of the first 'c'

// Use join() to join all the elements of an array into a single string
console.log(["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"].join(" ")); // Joins array into a space-separated string
