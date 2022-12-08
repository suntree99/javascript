//? Match Anything with Wildcard 

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr)); // true
console.log(huRegex.test(hugStr)); // true

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // . menjadi wildcard dari kata yang dicari
let result = unRegex.test(exampleStr);

console.log(result); // true