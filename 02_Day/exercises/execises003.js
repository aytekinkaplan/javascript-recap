console.log(typeof "10" === typeof 10 ? "10 is number" : "10 is not number");
console.log(typeof "10" === typeof "10" ? "10 is string" : "10 is not string");

console.log(typeof 10 === typeof "10" ? "10 is number" : "10 is not number");
console.log(typeof 10 === typeof 10 ? "10 is number" : "10 is not number");

console.log(parseFloat("9.81")===10 ? "9.81 is number" : "9.81 is not number");
console.log(parseFloat("9.81")===parseFloat("9.81") ? "9.81 is number" : "9.81 is not number");

console.log(parseInt("9.81")===10 ? "9.81 is number" : "9.81 is not number");
console.log(parseInt("9.81")===parseInt("9.81") ? "9.81 is number" : "9.81 is not number");

console.log(parseInt(9.81));
console.log(parseFloat(9.81));

"python".includes("on")==="jargon".includes("on") ? console.log("on is in both") : console.log("on is not in both");
"python".includes("on")==="jargon".includes("on") ? console.log("on is in both") : console.log("on is not in both");

let string = "I hope this course is not full of jargon";
string.includes("jargon") ? console.log("jargon is in string") : console.log("jargon is not in string");

console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 256));

console.log("JavaScript"[Math.floor(Math.random() * "JavaScript".length)]);

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

let sentence = 'You cannot end a sentence with because because because is a conjunction';
let phrase = 'because because because';

// İlk 'because because because' ifadesinin başlangıç indeksini bulun
let startIndex = sentence.indexOf(phrase);

// `substr` kullanarak bu ifadeyi cümleden çıkarın
let extractedPhrase = sentence.substr(startIndex, phrase.length);

console.log(extractedPhrase); // Çıktı: "because because because"

let longQuote = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let words = longQuote.toLowerCase().split(" ");
console.log(words);
let count = 0;

for (let i = 0; i < words.length; i++) {
    words[i] === "love" ? count++ : count;
}

console.log(count);
