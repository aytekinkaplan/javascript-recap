let js = "JavaScript";

console.log("js length:", js.length); // 10 - Returns the length of the string "JavaScript"
console.log("js toLowerCase:", js.toLowerCase()); // javascript - Converts the string to lowercase
console.log("js toUpperCase:", js.toUpperCase()); // JAVASCRIPT - Converts the string to uppercase
console.log("js trim:", js.trim()); // JavaScript - Removes whitespace from both ends of the string

let firstName = "Murat";
let lastName = "Melek";
let fullName = firstName + " " + lastName; // Concatenates firstName and lastName with a space in between
console.log("fullName:", fullName); // Murat Melek
console.log("fullName trim:", fullName.trim()); // Murat Melek - Trims whitespace if present

let country = "Holland";
let city = "Amsterdam";
let address = country + ", " + city; // Concatenates country and city with a comma and space
console.log("address:", address); // Holland, Amsterdam
console.log("address trim:", address.trim()); // Holland, Amsterdam

let language = "JavaScript";
let job = "Software Developer";
let age = 30; // Added age variable to avoid reference error
let isMarried = false; // Added isMarried variable to avoid reference error
let sentence = `I am ${firstName} ${lastName}. I am from ${country}. I live in ${city}. I am ${age} years old. I am ${job}. I am married: ${isMarried}.`;
console.log("sentence:", sentence); // Constructs a sentence using template literals
console.log("sentence trim:", sentence.trim()); // Trims whitespace from the sentence

console.log("Murat Melek".split(" ")); // ["Murat", "Melek"] - Splits the string by spaces

// Splitting string "Murat" into different lengths
console.log("Murat".split("", 1)); // ["M"] - Splits string with empty string as separator and limits to 1 part
console.log("Murat".split("", 2)); // ["M", "u"]
console.log("Murat".split("", 3)); // ["M", "u", "r"]
console.log("Murat".split("", 4)); // ["M", "u", "r", "a"]
console.log("Murat".split("", 5)); // ["M", "u", "r", "a", "t"]
console.log("Murat".split("")); // ["M", "u", "r", "a", "t"] - Splits each character in the string

// Getting characters at specific indexes
console.log("Murat".charAt(0)); // "M" - Gets the character at index 0
console.log("Murat".charAt(1)); // "u"
console.log("Murat".charAt(2)); // "r"
console.log("Murat".charAt(3)); // "a"
console.log("Murat".charAt(4)); // "t"

// Getting Unicode values of characters
console.log("Murat".charCodeAt(0)); // 77 - Unicode of 'M'
console.log("Murat".charCodeAt(1)); // 117 - Unicode of 'u'
console.log("Murat".charCodeAt(2)); // 114 - Unicode of 'r'
console.log("Murat".charCodeAt(3)); // 97 - Unicode of 'a'
console.log("Murat".charCodeAt(4)); // 116 - Unicode of 't'

console.log("Murat".codePointAt(0)); // 77 - Code point of 'M'
console.log("Murat".codePointAt(1)); // 117 - Code point of 'u'

// Searching within the string
console.log("Murat".indexOf("u")); // 1 - Finds the first occurrence of 'u'
console.log("Murat".indexOf("a")); // 3 - Finds the first occurrence of 'a'
console.log("Murat".indexOf("z")); // -1 - Returns -1 as 'z' is not found
console.log("Murat".indexOf("a", 2)); // 3 - Starts searching from index 2

console.log("Murat".lastIndexOf("a")); // 3 - Finds the last occurrence of 'a'

// Checking if string starts or ends with certain characters
console.log("Murat".startsWith("Mu")); // true - Checks if string starts with 'Mu'
console.log("Murat".endsWith("at")); // true - Checks if string ends with 'at'

// Checking if string contains a certain substring
console.log("Murat".includes("at")); // true - Checks if 'at' is present

console.log("Murat".repeat(3)); // "MuratMuratMurat" - Repeats the string 3 times

// Locale comparison
console.log("Murat".localeCompare("Murat")); // 0 - Same string, so returns 0

// String normalization
console.log("Murat".normalize("NFC").length); // 4 - Normalizes to composed form

// Getting substrings and slices
console.log("Murat".substring(0, 3)); // Mur - Extracts from index 0 to 3
console.log("Murat".slice(1, 3)); // ur - Slices from index 1 to 3
console.log("Murat".slice(-3)); // rat - Extracts the last 3 characters

// Padding the string
console.log("first".padStart(10, "0")); // 000000first - Pads start with zeros up to 10 characters
console.log("first".padEnd(10, "0")); // first000000 - Pads end with zeros up to 10 characters

// Searching with regular expressions
console.log("Murat".search("u")); // 1 - Finds position of 'u'
console.log("Murat".match("a")); // ["a", index: 3, input: "Murat", groups: undefined] - Matches 'a'

console.log("Murat".replace("a", "o")); // Murot - Replaces first 'a' with 'o'
console.log("Murat".replace(/a/g, "o")); // Murot - Replaces all occurrences of 'a' with 'o'

// Converting to lowercase and uppercase
console.log("Murat".toLowerCase()); // murat - Converts to lowercase
console.log("Murat".toUpperCase()); // MURAT - Converts to uppercase
