//? Restrict Possible Usernames

/* Test 2
1. Usernames can only use alpha-numeric characters.
2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3. Username letters can be lowercase and uppercase.
4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z][a-zA-Z]+\d*$|^[a-zA-Z]\d\d+$/g; // Change this line
let result = userCheck.test(username);

console.log(username.match(userCheck)) // JackOfAllTrades
console.log(result) // true