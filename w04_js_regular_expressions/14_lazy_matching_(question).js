//? Find Characters with Lazy Matching (?)

let textExample = "titanic";
let myRegexExample = /t[a-z]*i/; // secara default mengambil sebanyak2nya karakter
let myRegexExample2 = /t[a-z]*?i/; // dengan ? mengambil paling sedikit karakter yang ditemukan diantara range []
console.log(textExample.match(myRegexExample)); // [ 'titani', index: 0, input: 'titanic', groups: undefined ]
console.log(textExample.match(myRegexExample2)); // [ 'ti', index: 0, input: 'titanic', groups: undefined ]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(result); // [ '<h1>', index: 0, input: '<h1>Winter is coming</h1>', groups: undefined ]