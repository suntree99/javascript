# Javascript Node.js Fundamental

## Hello World
```js
console.log("Hello World");
```

## Expression & Statement

* Expression adalah unit kode yang dapat dievaluasi menjadi suatu nilai.
```js
5; // ini merupakan expression. Interpreter membaca kode ini dan menghasilkan nilai 5.
2 + 3; // ini juga merupakan expression. Interpreter mengevaluasi kode dan juga akan menghasilkan nilai 5.
```

* Statement adalah instruksi untuk melakukan sebuah aksi tertentu (membuat variabel, melakukan perulangan, pengecekan kondisi, dll).
```js
var yourName; // declaration statement. Var sudah tidak disarankan karena dapat menimbulkan ambigu.
let yourAge; // declaration statement. Let disarankan untuk digunakan.
const numberOfDays; // declaration statement. Const digunakan untuk membuat konstanta (nilai tidak berubah), jika diubah akan error.
```

## Comment

* Single Line Comment
	```js
	// single line comment
	```

* Multi Line Comment
	```js
	/*
		multi line comment
		Hello Javascript
	*/
	```

## Variable & Operation

* Struktur deklarasi variabel
	```js
	let firstName; // declaration statement.
	firstName = "Budi"; // assignment expression.
	```
	```js
	let lastName = "Darmawan" // assignment expression.
	```

* Posisi deklarasi variable
	```js
	let fullName = let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
	let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
	let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.
	```

* Aturan penamaan variable
	* Harus dimulai dengan huruf atau underscore (_).
	* Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
	* Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
	* Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)

## Undefined

Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai
```js
let u;
console.log(u); // undefined
console.log(typeof(u)); // undefined
```

## Numbers

* Bilangan Bulat dan Desimal
	```js
	let x = 10;
	console.log(x); // 10
	console.log(typeof(x)); // number 

	let y = 17.25;
	console.log(y); // 17.25
	console.log(typeof(y)); // number
	```

* Operator Aritmatika
	```js
	let a = 12;
	let b = 9;

	console.log(a + b); // 21
	console.log(a - b); // 3
	console.log(a * b); // 108
	console.log(a / b); // 1.3333333333333333
	console.log(a % b); // 3
	console.log(a ** b); // 5159780352 (pangkat)
	```

* Increment dan Decrement
	```js
	let postfix = 5;
	console.log(postfix++); // 5
	console.log(postfix); // 6

	let prefix = 5;
	console.log(++prefix); // 6
	```
	* Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
	* Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.

* BigInt
	* BigInt digunakan untuk angka yang melebihi range Number (-(2^53 - 1) hingga (2^53 - 1))
	```js
	const bigNumber = 1234567890123456789012345678901234567890n; // BigInt diakhiri 'n'
	const myInt = 1234567890123456789012345678901234567890;

	console.log(bigNumber); // 1234567890123456789012345678901234567890n
	console.log(myInt); // 1.2345678901234568e+39
	```

* Operator Aritmatika pada BigInt
	```js
	console.log(5n + 2n); // 7n
	console.log(5n - 2n); // 3n
	console.log(5n * 2n); // 10n
	console.log(5n / 2n); // 2n (bukan 2.5n - BigInt dibulatkan kebawah)
	console.log(5n % 2n); // 1n
	```

## String
String digunakan untuk menyimpan kumpulan karakter, bisa dibuat menggunakan tanda kutip ganda (" ")
```js
val name = "Budi"
```

* Operasi pada String
	```js
	val text  = "js"
	val firstChar = text[0]

	print("First character of $text is $firstChar") // First character of js is K
	```
	_Hal ini karena String adalah sekumpulan Char berbentuk Array, sehingga kita bisa mendapatkan karakter tunggal dengan manfaatkan 
	
* Loop pada String
	```js
	val text  = "js"
	for (char in text){
		print("$char ") // K o t l i n 
	}
	```

* Escaped String
	```js
	val statement = "js is \"Awesome!\""
	```
	_Selain \” di atas, terdapat beberapa escaped character lain di dalam sebuah String, antara lain:_
	* _\t: menambah tab ke dalam teks._
	* _\n: membuat baris baru di dalam teks._
	* _\’: menambah karakter single quote kedalam teks._
	* _\”: menambah karakter double quote kedalam teks._
	* _\\\\: menambah karakter backslash kedalam teks._
	* _\u00A9: akan menampilkan unicode ©_

* Raw String
	```js
	val line = """
		Line 1
		Line 2
		Line 3
		Line 4
	""".trimIndent()

	print(line)

	/*
		Line 1
		Line 2
		Line 3
		Line 4
	*/
	```
	_Raw String memungkinkan kita menuliskan multiline dan arbitrary text tanpa escaped character._

## Function
* Struktur deklarasi Function
	```js
	fun functionName(param1: Type1, param2: Type2, ...): ReturnType {
		return result
	}
	```
	```js
	fun setUser(name: String, age: Int): String {
		return "Your name is $name, and you $age years old"
	}
	```

	* Expression Function (Jika fungsi hanya berisi satu expression untuk menentukan nilai kembalian) 
		```js
		fun setUser(name: String, age: Int): String = "Your name is $name, and you $age years old"
		```
	
	* Void Function (Jika fungsi tidak mengembalikan nilai maka digunakan `Unit` sebagai tipe kembaliannya)
		```js
		fun printUser(name: String): Unit {
			print("Your name is $name")
		}
		```
		* Penulisan Unit dapat dihilangkan
		```js
		fun printUser(name: String) {
			print("Your name is $name")
		}
		```

* Pemanggilan function
	```js
	fun setUser(name: String, age: Int) = "Your name is $name, and you $age years old"
	
	fun printUser(name: String) {
		println("Your name is $name")
	}

	fun main() {
		val user = setUser("Budi", 30)
		println(user) // Your name is Budi, and you 30 years old
	
		printUser("Budi") // Your name is Budi
	}
	```

## If Expression 
* If
	```js
	val openHours = 7
	val now = 20

	if (now > openHours){
		println("Office already open") // Office already open
	}
	```

* If Else
	```js
	val openHours = 7
	val now = 20
	val office: String

	if (now > openHours) {
		office = "Office already open"
	} else {
		office = "Office is closed"
	}
	
	print(office) // Office already open
	```

* Menyimpan nilai If Expression langsung pada variable
	```js
	val openHours = 7
	val now = 20
	val office: String

	office = if (now > openHours) {
		"Office already open"
	} else {
		"Office is closed"
	}
	
	print(office) // Office already open
	```

* If .. Else If .. Else
	```js
	val openHours = 7
	val now = 7
	val office: 
	
	office = if (now > 7) {
		"Office already open"
	} else if (now == openHours){
		"Wait a minute, office will be open"
	} else {
		"Office is closed"
	}
	
	print(office) // Wait a minute, office will be open
	```
	&#x1F534; _js tidak mendukung ternary operator (condition ? then : else), karena peran dari operator tersebut sudah digantikan dengan if expressions._

## Boolean
* Conjunction atau AND (&&)
	```js
	val officeOpen = 7
	val officeClosed = 16
	val now = 20

	val isOpen = if (now >= officeOpen && now <= officeClosed){
		true
	} else {
		false
	}

	print("Office is open : $isOpen") // Office is open : false
	```
	* Dapat disederhanakan menjadi
	```js
	val officeOpen = 7
	val officeClosed = 16
	val now = 20

	val isOpen = now >= officeOpen && now <= officeClosed

	print("Office is open : $isOpen") // Office is open : false
	```

* Disjunction atau OR (||)
	```js
	val officeOpen = 7
	val officeClosed = 16
	val now = 20

	val isClose = now < officeOpen || now > officeClosed

	print("Office is closed : $isClose") //Office is closed : true
	```

* Negation atau NOT (!)
	```js
	val officeOpen = 7
	val now = 10
	val isOpen = now > officeOpen

	if (!isOpen) {
		print("Office is closed")
	} else {
		print("Office is open")
	}

	/*
		Output : Office is open
	*/
	```

## Array
Array di js direpresentasikan oleh kelas Array yang memiliki fungsi *get* dan *set* serta properti *size*.

* Array dapat dibuat dengan library function *arrayOf()*
	```js
	val array = arrayOf(1, 3, 5, 7)
	```

* Array dapat menyimpan tipe data yang berbeda
	```js
	val mixArray = arrayOf(1, 3, 5, 7 , "Dicoding" , true)
	```

* Array dengan tipe data tertentu
	* intArrayOf() : IntArray
	* booleanArrayOf() : BooleanArray
	* charArrayOf() : CharArray
	* longArrayOf() : LongArray
	* shortArrayOf() : ShortArray
	* byteArrayOf() : ByteArray*
	```js
	val intArray = intArrayOf(1, 3, 5, 7)
	```

* Mengakses nilai Array
	```js
	fun main() {
		val intArray = intArrayOf(1, 3, 5, 7)
		print(intArray[2]) // 5
	}
	```

* Mengganti nilai Array
	```js
	fun main() {
		val intArray = intArrayOf(1, 3, 5, 7)  // [1, 3, 5, 7]
		intArray[2] = 11                       // [1, 3, 11, 7]

		print(intArray[2]) // 11
	}
	```

* Array juga dapat dibuat dengan Cunstructor *Array()* dengan 2 argumen yaitu *size* dan fungsi lambda
	```js
	val intArray = Array(4, { i -> i * i }) // [0, 1, 4, 9]
	```

## Nullable Types
NullPointerException (NPE) is *“The Billion Dollar Mistake”*
* Secara default variabel tidak boleh bernilai null
	```js
	val text: String = null // compile time error
	```

* Variabel boleh bernilai null jika diset sebagai nullable dengan tanda ?
	```js
	val text: String? = null
	```
	Namun variable nullable tidak bisa langsung diakses
	```js
	val textLength = text.length // compile time error
	```

* Vaeriable nullabel perlu diperiksa dahulu agar bisa diakses atau dikelola
 	```js
	if (text != null){
		val textLength = text.length // ready to go
	}
	```

## Safe Calls dan Elvis Operator
* Safe Calls Operator (?.)
	* _Dengan safe call, kompiler akan melewatkan proses jika objek tersebut bernilai null._
 	```js
	val text: String? = null
	text?.length
	```
* Elvis Operator (?:)
	* _Elvis operator memungkinkan kita untuk menetapkan default value atau nilai dasar jika objek bernilai null._
 	```js
	val text: String? = null
	val textLength = text?.length ?: 7
	```
	Kode di atas sebenarnya sama seperti ketika kita menggunakan if/else berikut: 
	```js
	val textLength = if (text != null) text.length else 7
	```

* Non-Null Assertion (!!)
	* _Non-null assertion membuat objek nullable dapat diakses. Namun tetap berisiko NPE jika objek bernilai null._
	```js
	val text: String? = null
	val textLength = text!!.length // ready to go ???
	```

## String Template
String template membuat variable dapat dimasukan kedalam string tanpa concatenation (+)
* Tanpa concatenation ($)
	```js
	val name = "js"
    print("My name is $name") // My name is js
	```

* Dengan concatenation (+)
	```js
		val name = "js"
    print("My name is " + name) // My name is js
	```

* Mendukung tipe data selain string
	```js
	val name = "js"
    val old = 3
    print("My name is $name, im $old years old")  // My name is js, im 3 years old
	```

* Menyisipkan expression dengan kurung kurawal ${}
	```js
	val hour = 7
    print("Office ${if (hour > 7) "already close" else "is open"}") // Office is open
	```

##
##

## Kuis Object

```js
/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai boolean apa pun.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */


// TODO
const restaurant = {
  name: "My Resto",
  city: "Tangerang",
  "favorite drink": "Mojito",
  "favorite food": "Pizza",
  isVegan: false,
}

const {name, "favorite drink":favoriteDrink} = restaurant;

console.log(restaurant, name, favoriteDrink);

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = { restaurant, name, favoriteDrink };
```

## Kuis Array

```js
/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO
let evenNumber = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenNumber.push(i)
  }
}

console.log(evenNumber);

/**
 * Jangan hapus kode di bawah ini
 */

module.exports = evenNumber;
```

## Kuis Map

```js
/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;

// TODO
const currency = new Map(
  [
    ["USD", 14000],
   	["JPY", 131],
	["SGD", 11000],
 	["MYR", 3500],
  ]
)

let priceInIDR = priceInJPY * currency.get("JPY");

console.log(currency, priceInIDR);

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = { currency, priceInJPY, priceInIDR };
```

## Kuis Function

```js
/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */


// TODO
function minimal(a, b) {
  switch (a < b) {
    case true:
      return a;
      break;
    case false:
      return b;
      break;
    default:
      return a;
  }
}

console.log(minimal(1, 4)); // 1
console.log(minimal(3, 2)); // 2
console.log(minimal(3, 3)); // 3

const power = (a, b) => a**b;

console.log(power(7, 3)); // 343
console.log(power(3, 3)); // 27
console.log(power(4, 0.5)); // 2

/**
 * Jangan hapus kode di bawah ini
 */

module.exports = { minimal, power };
```

## Kuis 

```js

```

## Kuis 

```js

```

## Kuis 

```js

```

## Kuis 

```js

```

## Kuis 

```js

```

## Kuis 

```js

```

## Kuis 

```js

```


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

# Template

## Sub Judul 
```<bahasa>
git add .
git commit -m 'Update README.md'
git push

```

```js

```

Update README.md