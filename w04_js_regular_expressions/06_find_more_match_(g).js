//? Find More Than the First Match

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex)); // [ 'Repeat', index: 0, input: 'Repeat, Repeat, Repeat', groups: undefined ]

let repeatRegex = /Repeat/g; // g (global) mencari semuanya (perulangan) secara global
console.log(testStr.match(repeatRegex)); // [ 'Repeat', 'Repeat', 'Repeat' ]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result); // [ 'Twinkle', 'twinkle' ]