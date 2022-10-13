//? Use Capture Groups to Search and Replace

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue")); // The sky is blue.

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')); // Camp Code

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log(result) // three two one