//? Check for All or None

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/; // mengecek ada atau tidak 1 karakter tertentu
console.log(rainbowRegex.test(american)); // true
console.log(rainbowRegex.test(british)); // true

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

console.log(result) // true