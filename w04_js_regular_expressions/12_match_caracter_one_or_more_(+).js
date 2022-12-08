//? Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // mencari perulangan karakter 1 atau lebih
let result = difficultSpelling.match(myRegex);

console.log(result); // [ 'ss', 'ss' ]