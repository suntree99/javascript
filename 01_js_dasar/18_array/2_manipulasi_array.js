// ? ARRAY MANIPULATION

// 1. Menambah isi array (manual)
var orang = [];
orang[0] = "Budi";
orang[1] = "Darmawan";
orang[2] = "Ganteng"
// orang[3] dan orang[4] yang terlewat akan berisi kosong (undefined)
orang[5] = "Sekali"

console.log(orang); // Array(6) [ "Budi", "Darmawan", "Ganteng", <2 empty slots>, "Sekali" ]

// 2. Menghapus isi array (manual) dengan mengganti menjadi undefined
orang[2] = undefined;

console.log(orang); // Array(6) [ "Budi", "Darmawan", undefined, <2 empty slots>, "Sekali" ]

// 3. Menampilkan isi array
// * .length
var arr = ["Budi", "Iwan", "Wati", "Santi"]
console.log(arr.length); // 4

for ( i = 0; i < arr.length; i++) {
  console.log("Mahasiswa ke-" + (i+1) + " : " + arr[i]);
}
// Mahasiswa ke-1 : Budi
// Mahasiswa ke-2 : Iwan
// Mahasiswa ke-3 : Wati
// Mahasiswa ke-4 : Santi

// Method pada Array
// * .join (menggabungkan isi array)
var arr = ["Budi", "Iwan", "Wati", "Santi"]
console.log(arr.join()); // Budi,Iwan,Wati,Santi -> koma (,) adalah separator defaultnya
console.log(arr.join(" - "));  // Budi - Iwan - Wati - Santi -> isikan separator yang diinginkan didalam kurung

// * .push (menambah elemen di akhir)
arr.push("Dina", "Fitri");
console.log(arr.join(" - ")); // Budi - Iwan - Wati - Santi - Dina - Fitri

// * .pop (menghapus elemen terakhir) dihapus satu persatu
arr.pop();
arr.pop();
console.log(arr.join(" - ")); // Budi - Iwan - Wati - Santi

// * unshift (menambah elemen di awal)
arr.unshift("Doddy");
console.log(arr.join(" - ")); // Doddy - Budi - Iwan - Wati - Santi

// * shift (menghapus elemen awal)
arr.shift();
console.log(arr.join(" - ")); // Budi - Iwan - Wati - Santi

// * splice (menyisipkan, bisa sekaligus menghapus)
// splice(indexAwalPenyisipan, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...);
arr.splice(2, 0, "Doddy");
console.log(arr.join(" - ")); // Budi - Iwan - Doddy - Wati - Santi

arr.splice(1, 2, "Dani", "Fitri"); // Budi - Dani - Fitri - Wati - Santi -> Dihapus 2 (Iwan & Doddy)
console.log(arr.join(" - "));

// * slice (memotong)
// slice(indexAwal, batasIndexAkhir); // batasIndexAkhir tidak termasuk array yang baru
arr2 = arr.slice(1, 4);
console.log(arr2.join(" - ")); // Dani - Fitri - Wati
console.log(arr.join(" - ")); // Budi - Dani - Fitri - Wati - Santi

// * forEach(function())
var angka = [1,2,3,4,5,6,7,8];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

angka.forEach(function(e){ // e adalah elemen
  console.log(e);
});
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8

arr.forEach(function(e, i) { // i adalah index
  console.log("Mahasiswa ke-" + (i+1) + " adalah: " + e);
});
// Mahasiswa ke-1 adalah: Budi
// Mahasiswa ke-2 adalah: Dani
// Mahasiswa ke-3 adalah: Fitri
// Mahasiswa ke-4 adalah: Wati
// Mahasiswa ke-5 adalah: Santi

// * map(function()) (memetakan array)
var angka2 = angka.map(function(e) {
  return e * 2; 
});

console.log(angka2.join(" - ")); // 2 - 4 - 6 - 8 - 10 - 12 - 14 - 16

// * Sort (mengurutkan berdasarkan angka depan)
var angka = [1,2,5,10,20,4,3,6,8,7];

angka.sort();
console.log(angka.join(" - ")); // 1 - 10 - 2 - 20 - 3 - 4 - 5 - 6 - 7 - 8

angka.sort(function(a,b) { // function(a,b) digunakan untuk mengurutkan dengan benar
  return a-b; // a-b untuk mengurutkan dari terkecil-terbesar 
});
console.log(angka.join(" - ")); // 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 10 - 20

// * find(function()) -> mencari satu nilai
var angka3 = angka.find(function(x) {
  return x > 5; // mencari satu nilai > 5 yang pertama kali ditemukan
});
console.log(angka3); // 6

// * filter(function()) -> bisa mengembalikan banyak nilai (dalam bentuk array)
var angka3 = angka.filter(function(x) {
  return x > 5;
});
console.log(angka3); // Array(5) [ 6, 7, 8, 10, 20 ]

var angka3 = angka.filter(function(x) { // angka yang tidak ada mengembalikan array kosong
  return x == 9;
});
console.log(angka3); // Array []

var angka3 = angka.filter(function(x) {
  return x > 5;
});
console.log(angka3.join(" - ")); // 6 - 7 - 8 - 10 - 20

// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
