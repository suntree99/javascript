# Regular Expression

## How to Run JavaScript in VS Code
* Install Code Runner extention
* Right click on file -> Run Code

## 01. Using the Test Method (.test())
```js
// test() : mencari jarum di tumpukan jerami -> Output : Boolean
let testStr = "freeCodeCamp"; // jerami
let testRegex = /Code/; // jarum
console.log(testRegex.test(testStr)); // true

let myString = "Hello, World!";
let myRegex = /Hello/; // regex diapit 2 slash
let result = myRegex.test(myString);

console.log(result); // true
```

## 02. Match Literal Strings
```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/; 
console.log(testRegex.test(testStr)); // true

let wrongRegex = /kevin/; // regex memperhatikan besar kecilnya huruf
console.log(wrongRegex.test(testStr)); // false

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

console.log(result); // true
```

## 03. Match a Literal String with Different Possibilities
```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // | memberikan alternatif pencarian
let result = petRegex.test(petString);

console.log(result); // true
```

## 04. Ignore Case While Matching
```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // i (ignore) tidak memperhatikan besar kecilnya huruf
let result = fccRegex.test(myString);

console.log(result); // true
```

## 05. Extract Matches (.match())
```js
// match() : di tumpukan jerami yang cocok dengan jarum -> Output : Object in Array
console.log("Hello, World!".match(/Hello/)); // [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex)); // [ 'expressions', index: 8, input: 'Regular expressions', groups: undefined ]

/regex/.test('string'); // mencari jarum di tumpukan jerami
'string'.match(/regex/); // di tumpukan jerami yang cocok dengan jarum

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log(result); // [ 'coding', index: 18, input: "Extract the word 'coding' from this string.", groups: undefined ]
```

## 06. Find More Than the First Match
```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex)); // [ 'Repeat', index: 0, input: 'Repeat, Repeat, Repeat', groups: undefined ]

let repeatRegex = /Repeat/g; // g (global) mencari semuanya (perulangan) secara global
console.log(testStr.match(repeatRegex)); // [ 'Repeat', 'Repeat', 'Repeat' ]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result); // [ 'Twinkle', 'twinkle' ]
```

## 07. Match Anything with Wildcard 
```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr)); // true
console.log(huRegex.test(hugStr)); // true

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // . menjadi wildcard dari kata yang dicari
let result = unRegex.test(exampleStr);

console.log(result); // true
```

## 08. Match Single Character with Multiple 
```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/; // [] mencari kata dengan kemungkinan 1 karakter dalamnya 
console.log(bigStr.match(bgRegex)); // [ 'big', index: 0, input: 'big', groups: undefined ]
console.log(bagStr.match(bgRegex)); // [ 'bag', index: 0, input: 'bag', groups: undefined ]
console.log(bugStr.match(bgRegex)); // [ 'bug', index: 0, input: 'bug', groups: undefined ]
console.log(bogStr.match(bgRegex)); // null

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aiueo]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result);
// [
//     'e', 'a', 'e', 'o', 'u', 'i',
//     'e', 'a', 'o', 'e', 'o', 'e',
//     'I', 'a', 'e', 'o', 'o', 'e',
//     'i', 'o', 'e', 'o', 'i', 'e',
//     'i'
// ]
```

## 09. Match Letters of the Alphabet
```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/; // [-] mencari kata dengan kemungkinan 1 karakter dalam range
console.log(catStr.match(bgRegex)); // [ 'cat', index: 0, input: 'cat', groups: undefined ]
console.log(batStr.match(bgRegex)); // [ 'bat', index: 0, input: 'bat', groups: undefined ]
console.log(matStr.match(bgRegex)); // null

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result8 = quoteSample2.match(alphabetRegex); // Change this line

console.log(result8);
// [
//     'T', 'h', 'e', 'q', 'u', 'i', 'c',
//     'k', 'b', 'r', 'o', 'w', 'n', 'f',
//     'o', 'x', 'j', 'u', 'm', 'p', 's',
//     'o', 'v', 'e', 'r', 't', 'h', 'e',
//     'l', 'a', 'z', 'y', 'd', 'o', 'g'
// ]
```

##  10. Match Numbers and Letters of the Alphabet
```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig; // mencari karakter didalam range [] secara global dan ignore case
console.log(jennyStr.match(myRegex));
// [
//     'J', 'e', 'n', 'n',
//     'y', '8', '6', '7',
//     '5', '3', '0', '9'
// ]

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex2); // Change this line

console.log(result); 
// [
//     'l', 'r', 'r', '3', '4',
//     '5', '2', '6', '5', '3',
//     's', 'r', 'l', 'i', 'i',
//     'o', 's'
// ]
```

##  11. Match Single Characters Not 
```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aiueo]/gi; // ^ di dalam [] mencari pengecualian dari range [] secara global dan ignore
let result = quoteSample.match(myRegex); // Change this line

console.log(result);
// [
//     ' ', 'b', 'l',
//     'n', 'd', ' ',
//     'm', 'c', '.'
// ]
```

## 12. Match Characters that Occur One or More Times
```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // mencari perulangan 1 karakter, diulang 1 atau lebih
let result = difficultSpelling.match(myRegex);

console.log(result); // [ 'ss', 'ss' ]
```

## 13. Match Characters that Occur Zero or More Times
```js
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
```

## 14. Find Characters with Lazy Matching (?)
```js
let textExample = "titanic";
let myRegexExample = /t[a-z]*i/; // secara default mengambil sebanyak2nya karakter
let myRegexExample2 = /t[a-z]*?i/; // dengan ? mengambil paling sedikit karakter yang ditemukan diantara range []
console.log(textExample.match(myRegexExample)); // [ 'titani', index: 0, input: 'titanic', groups: undefined ]
console.log(textExample.match(myRegexExample2)); // [ 'ti', index: 0, input: 'titanic', groups: undefined ]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(result); // [ '<h1>', index: 0, input: '<h1>Winter is coming</h1>', groups: undefined ]
```

## 15. Find One or More Criminals in a Hunt
```js
let reCriminals = /C+/; // Mencari perulangan karakter C

console.log("P1P5P4CCCcP2P6P3".match(reCriminals)); // [ 'CCC', index: 6, input: 'P1P5P4CCCcP2P6P3', groups: undefined ]
```

## 16. Match Beginning String Patterns
```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/; // ^ pada regex mengharuskan kata ada di depan
console.log(firstRegex.test(firstString)); // true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); // false

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(result); // true
```

## 17. Match Ending String Patterns
```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/; // $ pada regex mengharuskan kata berasa di akhir
console.log(storyRegex.test(theEnding)); // true
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding)); // false

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result); // true
```

## 18. Match All Letters and Numbers
```js
let longHand = /[A-Za-z0-9_]+/; // semua huruf besar dan kecil, angka, dan _
let shortHand = /\w+/; // \w adalah singkatannya
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers)); // true
console.log(shortHand.test(numbers)); // true
console.log(longHand.test(varNames)); // true
console.log(shortHand.test(varNames)); // true

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result); // 31
```

## 19. Match Everything But Letters and Numbers
```js
let shortHand2 = /\W/; // \W (huruf besar) menjadi pengecualian dari \w
let numbers2 = "42%";
let sentence = "Coding!";
console.log(numbers2.match(shortHand2)); // [ '%', index: 2, input: '42%', groups: undefined ]
console.log(sentence.match(shortHand2)); // [ '!', index: 6, input: 'Coding!', groups: undefined ]

let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result17 = quoteSample6.match(nonAlphabetRegex).length;

console.log(result17) // 6
```

## 20. Match All (\d)
```js
// \d = [0-9] semua angka dari 0-9
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

console.log(result) // 4
```

## 21. Match All Non-Numbers
```js
// \D (huruf besar) menjadi pengecualian \d
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result) // 17
```

## 22. Restrict Possible Usernames
```js
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
```

## 23. Match Whitespace
```js
// \s = [ \r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g; // mecari whitespace secara golbal
console.log(whiteSpace.match(spaceRegex)); // [ ' ', ' ' ]

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

console.log(result) // [ ' ', ' ', ' ', ' ', ' ' ]
```

## 24. Match Whitespace
```js
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
```

## 25. Specify Upper and Lower Number of Matches ({})
```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/; // perulangan 1 karakter dalam range {3-5}
console.log(multipleA.test(A4)); // true
console.log(multipleA.test(A2)); // false

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

console.log(result) // true
```

## 26. Specify Upper and Lower Number of Matches
```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/; // mencari perulangan 1 karakter dalam range {3-~}
console.log(multipleA.test(A4)); // true
console.log(multipleA.test(A2)); // false
console.log(multipleA.test(A100)); // true

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

console.log(result) // true
```

## 27. Specify Upper and Lower Number of Matches
```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3}h/; // mencari perulangan 1 karakter dengan jumlah yang tepat {3}
console.log(multipleA.test(A4)); // false
console.log(multipleA.test(A3)); // true
console.log(multipleA.test(A100)); // false

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

console.log(result) // true
```

## 28. Check for All or None
```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/; // mengecek ada atau tidak 1 karakter tertentu
console.log(rainbowRegex.test(american)); // true
console.log(rainbowRegex.test(british)); // true

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

console.log(result) // true
```

## 29. Positive and Negative Lookahead
```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; // memastikan u ada
let qRegex = /q(?!u)/; // memastikan u tidak ada
console.log(quit.match(quRegex)); // [ 'q', index: 0, input: 'qu', groups: undefined ]
console.log(noquit.match(qRegex)); // [ 'q', index: 0, input: 'qt', groups: undefined ]
console.log(quit.match(qRegex)); // null
console.log(noquit.match(quRegex)); // null

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password)); // true

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
// memastikan jumlah karakter lebih dari 5 dan memastikan setelah bukan angka ada atau tidak (dimananapun) ada 2 angka berurutan
let result = pwRegex.test(sampleWord);

console.log(result) // false (tidak ada 2 angka berdekatan)
```

##  30. Check For Mixed Grouping of Characters (|)
```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/; // alternatif pencarian dengan template kata dalam ()
console.log(testRegex.test(testStr)); // true

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).* Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result) // true
console.log(myString.match(myRegex))
// [
//     'Eleanor Roosevelt',
//     'Eleanor',
//     index: 0,
//     input: 'Eleanor Roosevelt',
//     groups: undefined
// ]
```

## 31. Reuse Patterns Using Capture Groups
```js
let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/; // mencari perulangan dengan patern () dipanggil dengan \1 
console.log(repeatRegex.test(repeatStr)); // true
console.log(repeatStr.match(repeatRegex)); // ["row row row", "row"]

let repeatStr2 = "regex regex";
let repeatRegex2 = /(\w+)\s\1/;
console.log(repeatRegex2.test(repeatStr2)); // 
console.log(repeatStr2.match(repeatRegex2)); // ["regex regex", "regex"]

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

console.log(result) // true
console.log(repeatNum.match(reRegex)) // [ '42 42 42', '42', index: 0, input: '42 42 42', groups: undefined ]
```

## 32. Use Capture Groups to Search and Replace (.replace)
```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue")); // The sky is blue. -> menukar kata dengan regex menggunakan .replace

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')); // Camp Code -> menukar posisi dari pola () dan dipanggil dengan $urutan pola

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log(result) // three two one
```

## 33. Remove Whitespace from Start and End
```js
// Test 3
let hello = "   Hello, World!  ";
let wsRegex = /\s*(.*)\s\s+/; // mengambil kata apapun dengan (.*) dan menghilangkan whitspace di depan \s* dan whitespace di belakang \s\s+
let replaceText = "$1"
let result = hello.replace(wsRegex, replaceText); // Change this line

console.log(result) // Hello, World!
```

##
##

# Heading 1 / Judul Utama (gunakan #)

## Heading 2 / Sub Judul (gunakan ##)

Text biasa (ditulis biasa tanpa format apapun)

[Hyperlink](https://www.google.com) (nama hyperlink dibungkus kurung siku, urlnya dibungkus tanda kurung biasa)

```bash
git add .
git commit -m "baris code menggunakan backtick 3x di awal(sertakan bahasanya) dan akhir code"
git push
```

Untuk `menyoroti` bungkus text dengan backtick 1x

##  
```js

```

Update README.md
