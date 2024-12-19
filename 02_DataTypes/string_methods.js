let js = "JavaScript";
let java = "Java";
let c = "C";
let cPlusPlus = "C++";
let cSharp = "C#";
let python = "Python";
let ruby = "Ruby";
let swift = "Swift";

for (let i = 0; i < js.length; i++) {
  console.log(js[i]);
}

for (let i = 0; i < java.length; i++) {
  console.log(java[i]);
}

for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}

let text =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
let words = text.split(" ");
console.log("Words in the text:", words);

let sentence =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
let words2 = sentence.split(" ");
console.log("Words in the sentence:", words2);

let techs = new Array(js, java, c, cPlusPlus, cSharp, python, ruby, swift);
console.log(techs);

for (let i = 0; i < techs.length; i++) {
  console.log(techs[i]);
}

let techs2 =
  js +
  ", " +
  java +
  ", " +
  c +
  ", " +
  cPlusPlus +
  ", " +
  cSharp +
  ", " +
  python +
  ", " +
  ruby +
  ", " +
  swift;
console.log(techs2);

let techs3 = [js, java, c, cPlusPlus, cSharp, python, ruby, swift];
console.log(techs3);

let text2 = "I love JavaScript";
console.log(text2.toUpperCase());
console.log(text2.toLowerCase());

let text3 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(text3.includes("JavaScript"));
console.log(text3.includes("javaScript"));
console.log(text3.includes("Python"));

let first_name = "John"; // Define first_name
console.log(first_name.includes("John"));
console.log(first_name.includes("john"));
console.log(first_name.includes("Jo"));
console.log(first_name.includes("J"));
console.log(first_name.includes("j"));

let text4 = "I love JavaScript";
console.log(text4.indexOf("JavaScript"));
console.log(text4.indexOf("javaScript"));
console.log(text4.indexOf("Python"));
console.log(first_name.indexOf("John"));
console.log(first_name.indexOf("john"));
console.log(first_name.indexOf("Jo"));
console.log(first_name.indexOf("J"));
console.log(first_name.indexOf("j"));

let text5 = "I love JavaScript";
console.log(text5.lastIndexOf("JavaScript"));
console.log(text5.lastIndexOf("javaScript"));
console.log(text5.lastIndexOf("Python"));
console.log(first_name.lastIndexOf("John"));
console.log(first_name.lastIndexOf("john"));
console.log(first_name.lastIndexOf("Jo"));
console.log(first_name.lastIndexOf("J"));
console.log(first_name.lastIndexOf("j"));

let text6 = "I love JavaScript";
console.log(text6.search("JavaScript"));
console.log(text6.search("javaScript"));
console.log(text6.search("Python"));
console.log(first_name.search("John"));
console.log(first_name.search("john"));
console.log(first_name.search("Jo"));
console.log(first_name.search("J"));
console.log(first_name.search("j"));

let text7 = "I love JavaScript";
console.log(text7.replace("JavaScript", "Java"));
console.log(text7.replace("javaScript", "Java"));
console.log(text7.replace("Python", "Java"));
console.log(first_name.replace("John", "John Doe"));
console.log(first_name.replace("john", "John Doe"));
console.log(first_name.replace("Jo", "John Doe"));
console.log(first_name.replace("J", "John Doe"));
console.log(first_name.replace("j", "John Doe"));

let text8 = "I love JavaScript";
console.log(text8.slice(0, 10));
console.log(text8.slice(5, 10));
console.log(text8.slice(10, 15));
console.log(text8.slice(15, 20));
console.log(text8.slice(20, 25));
console.log(text8.slice(25, 30));

let text9 = "I love JavaScript";
console.log(text9.substring(0, 10));
console.log(text9.substring(5, 10));
console.log(text9.substring(10, 15));
console.log(text9.substring(15, 20));
console.log(text9.substring(20, 25));
console.log(text9.substring(25, 30));

let text10 = "I love JavaScript";
console.log(text10.charAt(0));
console.log(text10.charAt(5));
console.log(text10.charAt(10));
console.log(text10.charAt(15));
console.log(text10.charAt(20));
console.log(text10.charAt(25));

let text11 = "I love JavaScript";
console.log(text11[0]);
console.log(text11[5]);
console.log(text11[10]);
console.log(text11[15]);
console.log(text11[20]);
console.log(text11[25]);

let text12 = "I love JavaScript";
console.log(text12.charCodeAt(0));
console.log(text12.charCodeAt(5));
console.log(text12.charCodeAt(10));
console.log(text12.charCodeAt(15));
console.log(text12.charCodeAt(20));
console.log(text12.charCodeAt(25));

let text13 = "I love JavaScript";
console.log(text13.split(" "));
console.log(text13.split(""));
console.log(text13.split("JavaScript"));
console.log(text13.split("love"));
console.log(text13.split("I"));

let text14 = "I love JavaScript";
console.log(text14.trim());
console.log(text14.trimLeft());
console.log(text14.trimRight());

let text15 = "I love JavaScript";
console.log(text15.startsWith("I"));
console.log(text15.startsWith("i"));
console.log(text15.startsWith("love"));
console.log(text15.startsWith("JavaScript"));
console.log(text15.startsWith("Java"));

let text16 = "I love JavaScript";
console.log(text16.endsWith("I"));
console.log(text16.endsWith("i"));
console.log(text16.endsWith("love"));
console.log(text16.endsWith("JavaScript"));
console.log(text16.endsWith("Java"));

let text17 = "I love JavaScript";
console.log(text17.toLowerCase());
let text18 = "I love JavaScript";
console.log(text18.toUpperCase());

let text19 = "I love JavaScript";
console.log(text19.charAt(0).toUpperCase() + text19.slice(1));
let text20 = "I love JavaScript";
console.log(text20.charAt(0).toLowerCase() + text20.slice(1));

let text21 = "I love JavaScript";
console.log(text21.charAt(0).toUpperCase() + text21.slice(1));
let text22 = "I love JavaScript";
console.log(text22.charAt(0).toLowerCase() + text22.slice(1));

let text23 = "I love JavaScript";
console.log(text23.charAt(0).toUpperCase() + text23.slice(1));
let text24 = "I love JavaScript";
console.log(text24.charAt(0).toLowerCase() + text24.slice(1));

// Matching a pattern in a string
let text25 = "I love JavaScript";
text25.match(/love/g);
let text26 = "I love JavaScript";
text26.match(/LOVE/g);
let text27 = "I love JavaScript";
text27.match(/Love/g);
let text28 = "I love JavaScript";
text28.match(/LOVE/gi);
let text29 = "I love JavaScript";
text29.match(/Love/gi);
let text30 = "I love JavaScript";
text30.match(/love/gi);
let text31 = "I love JavaScript";
text31.match(/Love/gi);
let text32 = "I love JavaScript";
text32.match(/LOVE/gi);
let text33 = "I love JavaScript";
text33.match(/Love/gi);

let text34 = "I love JavaScript\n";
console.log(text34.repeat(10));

// Changing a string to an array
let text35 = "I love JavaScript";
console.log(text35.split(" "));

let text36 = "I love JavaScript";
console.log(text36.split(""));
let text37 = "I love JavaScript";
console.log(text37.split("JavaScript"));

// String to integer
let numberInString = "100";
console.log(parseInt(numberInString));
let numberInString2 = "100.5";
console.log(parseInt(numberInString2));
// String to float
let numberInString3 = "100";
console.log(parseFloat(numberInString3));
let numberInString4 = "100.5";
console.log(parseFloat(numberInString4));

let text38 = "I love JavaScript";
console.log(text38.replace("JavaScript", "Python"));
let text39 = "I love JavaScript";
console.log(text39.replace("JavaScript", "Python"));
