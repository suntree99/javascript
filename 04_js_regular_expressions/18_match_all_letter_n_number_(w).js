//? Match All Letters and Numbers

let longHand = /[A-Za-z0-9_]+/; // semua huruf besar dan kecil, angka, dan _
let shortHand = /\w+/; // \w adalah singkatannya
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers)); // true
console.log(shortHand.test(numbers)); // true
console.log(longHand.test(varNames)); // true
console.log(shortHand.test(varNames)); // true

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result); // 31