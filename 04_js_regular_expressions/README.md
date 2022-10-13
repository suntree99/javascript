# Regular Expressions

## How to Run JavaScript in VS Code
- Install Code Runner extention
- Right click on file -> Run Code

## Using the Test Method
```javascript
// test() : mencari jarum di tumpukan jerami -> Output : Boolean
let testStr = "freeCodeCamp"; // jerami
let testRegex = /Code/; // jarum
console.log(testRegex.test(testStr)); // true

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

console.log(result); // true
```

## Match Literal Strings
```javascript
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr)); // true

let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr)); // false

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

console.log(result); // true
```

## Match a Literal String with Different Possibilities
```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result); // true
```

## Ignore Case While Matching
```javascript
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

console.log(result); // true
```

## Extract Matches
```javascript
// match() : di tumpukan jerami yang cocok dengan jarum -> Output : Object in Array
console.log("Hello, World!".match(/Hello/)); // [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex)); // [ 'expressions', index: 8, input: 'Regular expressions', groups: undefined ]

'string'.match(/regex/); // di tumpukan jerami yang cocok dengan jarum
/regex/.test('string'); // mencari jarum di tumpukan jerami

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log(result); // [ 'coding', index: 18, input: "Extract the word 'coding' from this string.", groups: undefined ]
```

## Find More Than the First Match
```javascript
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex)); // [ 'Repeat', index: 0, input: 'Repeat, Repeat, Repeat', groups: undefined ]

let repeatRegex = /Repeat/g;
console.log(testStr.match(repeatRegex)); // [ 'Repeat', 'Repeat', 'Repeat' ]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result); // [ 'Twinkle', 'twinkle' ]
```

## Match Anything with Wildcard
```javascript
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr)); // true
console.log(huRegex.test(hugStr)); // true

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

console.log(result); // true
```

## Match Single Character with Multiple 
```javascript
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
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

## Match Letters of the Alphabet
```javascript
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
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

## Match Numbers and Letters of the Alphabet
```javascript
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
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

## Match Single Characters Not 
```javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aiueo]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);
// [
//     ' ', 'b', 'l',
//     'n', 'd', ' ',
//     'm', 'c', '.'
// ]
```

## Match Characters that Occur One or More Times
```javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result); // [ 'ss', 'ss' ]
```

## Match Characters that Occur Zero or More Times
```javascript
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

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

## Find Characters with Lazy Matching
```javascript
let textExample = "titanic";
let myRegexExample = /t[a-z]*i/;
let myRegexExample2 = /t[a-z]*?i/;
console.log(textExample.match(myRegexExample)); // [ 'titani', index: 0, input: 'titanic', groups: undefined ]
console.log(textExample.match(myRegexExample2)); // [ 'ti', index: 0, input: 'titanic', groups: undefined ]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(result); // [ '<h1>', index: 0, input: '<h1>Winter is coming</h1>', groups: undefined ]
```

## Find One or More Criminals in a Hunt
```javascript
let reCriminals = /C+/; // Change this line

console.log("P1P5P4CCCcP2P6P3".match(reCriminals)); // [ 'CCC', index: 6, input: 'P1P5P4CCCcP2P6P3', groups: undefined ]
```

## Match Beginning String Patterns
```javascript
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString)); // true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); // false

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(result); // true
```

## Match Ending String Patterns
```javascript
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding)); // true
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding)); // false

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result); // true
```

## Match All Letters and Numbers
```javascript
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
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

## Match Everything But Letters and Numbers
```javascript
let shortHand2 = /\W/;
let numbers2 = "42%";
let sentence = "Coding!";
console.log(numbers2.match(shortHand2)); // [ '%', index: 2, input: '42%', groups: undefined ]
console.log(sentence.match(shortHand2)); // [ '!', index: 6, input: 'Coding!', groups: undefined ]

let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result17 = quoteSample6.match(nonAlphabetRegex).length;

console.log(result17) // 6
```

## Match All 
```javascript
// \d = [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

console.log(result) // 4
```

## Match All Non-Numbers
```javascript
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result) // 17
```

## Restrict Possible Usernames
```javascript
let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z][a-zA-Z]+\d*$|^[a-zA-Z]\d\d+$/g; // Change this line
let result = userCheck.test(username);

console.log(username.match(userCheck)) // JackOfAllTrades
console.log(result) // true
```

## Match Whitespace
```javascript
// \s = [ \r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex)); // [ ' ', ' ' ]

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

console.log(result) // [ ' ', ' ', ' ', ' ', ' ' ]
```

## Match Whitespace
```javascript
// \S = [^ \r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
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

## Specify Upper and Lower Number of Matches
```javascript
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4)); // true
console.log(multipleA.test(A2)); // false

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

console.log(result) // true
```

## Specify Upper and Lower Number of Matches
```javascript
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
console.log(multipleA.test(A4)); // true
console.log(multipleA.test(A2)); // false
console.log(multipleA.test(A100)); // true

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

console.log(result) // true
```

## Specify Upper and Lower Number of Matches
```javascript
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3}h/;
console.log(multipleA.test(A4)); // false
console.log(multipleA.test(A3)); // true
console.log(multipleA.test(A100)); // false

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

console.log(result) // true
```

## Check for All or None
```javascript
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american)); // true
console.log(rainbowRegex.test(british)); // true

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

console.log(result) // true
```

## Positive and Negative Lookahead
```javascript
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

## Check For Mixed Grouping of Characters
```javascript
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
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

## Reuse Patterns Using Capture Groups
```javascript
let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
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

## Use Capture Groups to Search and Replace
```javascript
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue")); // The sky is blue.

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')); // Camp Code

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log(result) // three two one
```

## Remove Whitespace from Start and End
```javascript
let hello = "   Hello, World!  ";
let wsRegex = /\s*(.*)\s\s+/; // Change this line
let replaceText = "$1"
let result = hello.replace(wsRegex, replaceText); // Change this line

console.log(result) // Hello, World!
```

##
```javascript

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

## Package 
```go
Isi
```

Update README.md
