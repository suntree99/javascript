//? Match All Non-Numbers

// \D (huruf besar) menjadi pengecualian \d 
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result) // 17