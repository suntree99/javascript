//? Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // | memberikan alternatif pencarian
let result = petRegex.test(petString);

console.log(result); // true