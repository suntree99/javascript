//? Remove Whitespace from Start and End

// Test 3
let hello = "   Hello, World!  ";
let wsRegex = /\s*(.*)\s\s+/; // mengambil kata apapun dengan (.*) dan menghilangkan whitspace di depan \s* dan whitespace di belakang \s\s+
let replaceText = "$1"
let result = hello.replace(wsRegex, replaceText); // Change this line

console.log(result) // Hello, World!