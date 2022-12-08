//? Match Characters that Occur Zero or More Times

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; // Mencari 1 karakter, baik ada (1 atau lebih) maupun tidak ada (0) 

console.log(soccerWord.match(goRegex)); // [ 'goooooooo', index: 0, input: 'gooooooooal!', groups: undefined ]
console.log(gPhrase.match(goRegex)); // [ 'g', index: 0, input: 'gut feeling', groups: undefined ]
console.log(oPhrase.match(goRegex)); // null

// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let result = chewieQuote.match(chewieRegex);

console.log(result); // [ 'Aaaaaaaaaaaaaaaa', index: 0, input: 'Aaaaaaaaaaaaaaaarrrgh!', groups: undefined ]