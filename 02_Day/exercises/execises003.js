// Comparison of types using typeof operator and ternary conditionals
console.log(typeof "10" === typeof 10 ? "10 is number" : "10 is not number"); // Checks if "10" and 10 are the same type, outputs "10 is not number"
console.log(typeof "10" === typeof "10" ? "10 is string" : "10 is not string"); // Both are strings, so outputs "10 is string"

console.log(typeof 10 === typeof "10" ? "10 is number" : "10 is not number"); // Outputs "10 is not number" as they are different types
console.log(typeof 10 === typeof 10 ? "10 is number" : "10 is not number"); // Outputs "10 is number" as both are numbers

// Checking numeric conversion with parseFloat and parseInt
console.log(parseFloat("9.81") === 10 ? "9.81 is number" : "9.81 is not number"); // Outputs "9.81 is not number" as they are not equal
console.log(parseFloat("9.81") === parseFloat("9.81") ? "9.81 is number" : "9.81 is not number"); // Outputs "9.81 is number" as they are equal

console.log(parseInt("9.81") === 10 ? "9.81 is number" : "9.81 is not number"); // Outputs "9.81 is not number" because parseInt("9.81") gives 9
console.log(parseInt("9.81") === parseInt("9.81") ? "9.81 is number" : "9.81 is not number"); // Outputs "9.81 is number" because both are 9

// Display integer values after parsing float numbers
console.log(parseInt(9.81)); // Outputs 9
console.log(parseFloat(9.81)); // Outputs 9.81

// Checking for substring "on" in "python" and "jargon"
"python".includes("on") === "jargon".includes("on") ? console.log("on is in both") : console.log("on is not in both");

// Checking for substring "jargon" in a string
let string = "I hope this course is not full of jargon";
string.includes("jargon") ? console.log("jargon is in string") : console.log("jargon is not in string");

// Random numbers within specific ranges
console.log(Math.floor(Math.random() * 51) + 50); // Random number between 50 and 100
console.log(Math.floor(Math.random() * 256)); // Random number between 0 and 255

// Random character from the string "JavaScript"
console.log("JavaScript"[Math.floor(Math.random() * "JavaScript".length)]); // Outputs a random character from "JavaScript"

// Printing a specific pattern
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// Extracting and displaying a specific phrase from a sentence
let sentence = "You cannot end a sentence with because because because is a conjunction";
let phrase = "because because because";
let startIndex = sentence.indexOf(phrase); // Finds the index of the first occurrence of the phrase
let extractedPhrase = sentence.substr(startIndex, phrase.length); // Extracts the phrase from the sentence
console.log(extractedPhrase); // Outputs: "because because because"

// Counting occurrences of the word "love" in a sentence
let longQuote = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let count = (longQuote.toLowerCase().match(/\blove\b/g) || []).length; // Counts occurrences of "love" as a standalone word
console.log(count); // Outputs 3

// Counting occurrences of "because" in a sentence
let sentence2 = "You cannot end a sentence with because because because is a conjunction";
let count2 = (sentence2.match(/because/g) || []).length;
console.log(count2); // Outputs 3

// Clean the following text and find the most frequent word
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. ' +
    'The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;' +
    'I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a ' +
    'tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Remove special characters from the text
const cleanText = sentence3.replace(/[%$@#&;!?]/g, '');

// Convert to lowercase and split into words
const words = cleanText.toLowerCase().split(/\s+/);

// Count each word's occurrences using an object
const wordCounts = {};
for (const word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
}

// Find the most frequent word
let mostFrequentWord = '';
let maxCount = 0;
for (const word in wordCounts) {
    if (wordCounts[word] > maxCount) {
        mostFrequentWord = word;
        maxCount = wordCounts[word];
    }
}

console.log(`Most frequent word: '${mostFrequentWord}', used ${maxCount} times.`);
