//? Match Whitespace

// \S = [^ \r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g; // \S (huruf besar) merupakan pengecualian dari \s
console.log(whiteSpace.match(nonSpaceRegex).length); // 32

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

console.log(result)
// [
//     'W', 'h', 'i', 't', 'e', 's', 'p',
//     'a', 'c', 'e', 'i', 's', 'i', 'm',
//     'p', 'o', 'r', 't', 'a', 'n', 't',
//     'i', 'n', 's', 'e', 'p', 'a', 'r',
//     'a', 't', 'i', 'n', 'g', 'w', 'o',
//     'r', 'd', 's'
// ]