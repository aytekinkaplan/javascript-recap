let quote = "Honesty is the first chapter in the book of LICENSE.";
console.log(quote); // Prints the entire quote
console.log(quote.length); // Prints the length of the quote
console.log(quote.toUpperCase()); // Converts the quote to uppercase
console.log(quote.toLowerCase()); // Converts the quote to lowercase
console.log(quote.substr(0, 11)); // Extracts the first 11 characters using substr
console.log(quote.substring(0, 11)); // Extracts the first 11 characters using substring
console.log(quote.slice(0, 11)); // Extracts the first 11 characters using slice
console.log(quote.includes("LICENSE")); // Checks if "LICENSE" is in the quote
console.log(quote.split(" ")); // Splits the quote into an array of words

// Escaped double-quote example for special characters
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// Finding the first and last occurrence of "Facebook"
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".indexOf("Facebook")); // Finds the index of the first occurrence of "Facebook"
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".lastIndexOf("Facebook")); // Finds the index of the last occurrence of "Facebook"

// Trimming whitespace
console.log("   Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon   ".trim()); // Removes whitespace from both ends
console.log("   Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon   ".trimStart()); // Removes whitespace from the start
console.log("   Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon   ".trimEnd()); // Removes whitespace from the end

// Checking the start and end of a string
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".startsWith("Facebook")); // Checks if it starts with "Facebook"
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".endsWith("Amazon")); // Checks if it ends with "Amazon"

// Repeating the string 4 times
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".repeat(4)); // Repeats the string 4 times

// Replacing substrings
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".replace("Facebook", "FaceBook")); // Replaces "Facebook" with "FaceBook"
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".replace("c", "z")); // Replaces the first "c" with "z"
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".replace(/c/g, "z")); // Replaces all occurrences of "c" with "z" using global regex

// Matching occurrences of "c"
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".match(/c/g)); // Finds all occurrences of "c" and returns them as an array

// Searching for the first occurrence of "c"
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".search(/c/)); // Finds the index of the first occurrence of "c"

// Joining an array into a string - Corrected: Use an array instead of string for join
console.log(["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"].join(" ")); // Joins array elements with a space

// Splitting the string by spaces
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(" ")); // Splits the string into an array by spaces
