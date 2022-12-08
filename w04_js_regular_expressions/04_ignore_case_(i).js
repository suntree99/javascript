//? Ignore Case While Matching 

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // i (ignore) tidak memperhatikan besar kecilnya huruf
let result = fccRegex.test(myString);

console.log(result); // true