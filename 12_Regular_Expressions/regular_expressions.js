// Creating a pattern with RegExp constructor
// Without flags
const pattern = new RegExp("JavaScript");
console.log(pattern); // /JavaScript/

// With flags
const pattern2 = new RegExp("JavaScript", "gi");
console.log(pattern2); // /JavaScript/gi

// Creating a pattern with regular expression literal
const pattern3 = /JavaScript/;
console.log(pattern3); // /JavaScript/

const pattern4 = /JavaScript/gi;
console.log(pattern4); // /JavaScript/gi

// Matching a pattern in a string
const text = "I love JavaScript";
const result = text.match(/JavaScript/);
console.log(result); // ["JavaScript"]

const result2 = text.match(/javaScript/);
console.log(result2); // null

const result3 = text.match(/javaScript/gi);
console.log(result3); // ["javaScript", "javaScript"]

const result4 = text.match(/javaScript/gi);
console.log(result4); // ["javaScript", "javaScript"]

// Changing a string to an array
const text2 = "I love JavaScript";
const result5 = text2.split(" ");
console.log(result5); // ["I", "love", "JavaScript"]

const result6 = text2.split("");
console.log(result6); // ["I", " ", "l", "o", "v", "e", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

const result7 = text2.split("JavaScript");
console.log(result7); // ["I love ", ""]

const result8 = text2.split("love");
console.log(result8); // ["I ", "JavaScript"]

// Searching a pattern in a string
const text3 = "I love JavaScript";
const result9 = text3.search(/love/gi);
console.log(result9); // 2

// RegExpp Object methods
const text4 = "I love JavaScript";
const result10 = text4.search(/love/gi);
console.log(result10); // 2

const str = "I love JavaScript";
const pattern5 = /love/;
const result11 = pattern5.test(str);
console.log(result11); // true

// Array containing all matches
const text5 = "I love JavaScript";
const result12 = text5.match(/love/gi);
console.log(result12); // ["love", "love"]

const text6 = "I love JavaScript";
const result13 = text6.match(/Java/gi);
console.log(result13); // null

const string = "I love JavaScript";
const pattern6 = /love/g;
const result14 = pattern6.exec(string);
console.log(result14); // ["love", index: 2, input: "I love JavaScript", groups: undefined]

// search() method
const text7 = "I love JavaScript";
const result15 = text7.search(/love/gi);
console.log(result15); // 2

// replace() method
const text8 = "I love JavaScript";
const result16 = text8.replace("JavaScript", "Java");
console.log(result16); // "I love Java"

const text9 = "I love JavaScript";
const result17 = text9.replace("Java", "Python");
console.log(result17); // "I love Python"

const text10 = "I love JavaScript";
const result18 = text10.replace(/Java/gi, "Python");
console.log(result18); // "I love PythonScript"

const text11 = "I love JavaScript";
const result19 = text11.replace(/Java/gi, "Python");
console.log(result19); // "I love PythonScript"

const text12 = "I love JavaScript";
const result20 = text12.replace(/Java/gi, "Python");
console.log(result20); // "I love PythonScript"

// slice() method
const text13 = "I love JavaScript";
const result21 = text13.slice(0, 10);
console.log(result21); // "I love J"

const text14 = "I love JavaScript";
const result22 = text14.slice(5, 10);
console.log(result22); // "love"

// split() method
const text15 = "I love JavaScript";
const result23 = text15.split(" ");
console.log(result23); // ["I", "love", "JavaScript"]

const text16 = "I love JavaScript";
const result24 = text16.split("");
console.log(result24); // ["I", " ", "l", "o", "v", "e", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// substr() method
const text17 = "I love JavaScript";
const result25 = text17.substr(0, 10);
console.log(result25); // "I love J"

const text18 = "I love JavaScript";
const result26 = text18.substr(5, 10);
console.log(result26); // "love"

// substring() method
const text19 = "I love JavaScript";
const result27 = text19.substring(0, 10);
console.log(result27); // "I love J"

const text20 = "I love JavaScript";
const result28 = text20.substring(5, 10);
console.log(result28); // "love"

// charAt() method
const text21 = "I love JavaScript";
const result29 = text21.charAt(0);
console.log(result29); // "I"

const text22 = "I love JavaScript";
const result30 = text22.charAt(5);
console.log(result30); // "l"

// Square brackets
const text23 = "I love JavaScript";
const result31 = text23[0];
console.log(result31); // "I"

const text24 = "I love JavaScript";
const result32 = text24[5];
console.log(result32); // "l"

// Concatenation
const text25 = "I love ";
const text26 = "JavaScript";
const result33 = text25 + text26;
console.log(result33); // "I love JavaScript"

// Repetition
const text27 = "I love ";
const result34 = text27.repeat(3);
console.log(result34); // "I love I love I love"

// Escape sequence
const text28 = "I love \nJavaScript";
console.log(text28); // "I love \nJavaScript"

const text29 = "I love \tJavaScript";
console.log(text29); // "I love \tJavaScript"

const text30 = "I love \\JavaScript";
console.log(text30); // "I love \JavaScript"

const text31 = 'I love "JavaScript"';
console.log(text31); // "I love "JavaScript""

const text32 = "I love 'JavaScript'";
console.log(text32); // "I love 'JavaScript'"

const text33 = "I love \0JavaScript";
console.log(text33); // "I love \0JavaScript"

const text34 = "I love \x4A\x61\x76\x61\x53\x63\x72\x69\x70\x74";
console.log(text34); // "I love JavaScript"

const text35 =
  "I love \u004A\u0061\u0076\u0061\u0053\u0063\u0072\u0069\u0070\u0074";
console.log(text35); // "I love JavaScript"

const text36 =
  "I love \u{004A}\u{0061}\u{0076}\u{0061}\u{0053}\u{0063}\u{0072}\u{0069}\u{0070}\u{0074}";
console.log(text36); // "I love JavaScript"

const text37 =
  "I love \u{004A}\u{0061}\u{0076}\u{0061}\u{0053}\u{0063}\u{0072}\u{0069}\u{0070}\u{0074}";
console.log(text37); // "I love JavaScript"

// Template literals
const text38 = "I love ";
const text39 = "JavaScript";
const result35 = `${text38}${text39}`;
console.log(result35); // "I love JavaScript"

const text40 = "I love ";
const text41 = "JavaScript";
const result36 = `${text40}${text41}`;
console.log(result36); // "I love JavaScript"

// String methods
const text42 = "I love JavaScript";
const result37 = text42.toUpperCase();
console.log(result37); // "I LOVE JAVASCRIPT"

const text43 = "I love JavaScript";
const result38 = text43.toLowerCase();
console.log(result38); // "i love javascript"
