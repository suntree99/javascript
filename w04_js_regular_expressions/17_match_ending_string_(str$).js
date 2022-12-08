//? Match Ending String Patterns

let theEnding = "This is a never ending story";
let storyRegex = /story$/; // $ pada regex mengharuskan kata berasa di akhir
console.log(storyRegex.test(theEnding)); // true
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding)); // false

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result); // true