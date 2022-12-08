// ? VAR, LET, & CONST

// * Let & Const memberikan error yang seharusnya, sedangkan Var tidak

// console.log(i);
// var i = 10;

// console.log(i);
// let i = 10;

// console.log(i);
// const i = 10;

// -------------------------------------------------------------

// * Function Scope menjaga agar variable tidak dapat diakses dari luar

// for(var i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i); // Jika bukan function, data masih dapat diakses

// function tes() {
//     for(var i = 0; i < 10; i++) {
//         console.log(i)
//     }
// }
// tes();
// console.log(i); // Tidak dapat mengakses data di dalam function

// -------------------------------------------------------------

// * IIFE = Immediately Invoked Function Expression
// * SIAF = Self Invoking Anonymous Function

// (function(){
//     for(var i = 0; i < 10; i++) {
//         console.log(i)
//     }
// }())
// console.log(i); // Tidak dapat mengakses data di dalam function

// -------------------------------------------------------------

// * Let (& Const) menjadikan variable berprilaku block scope

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i); // Tidak dapat mengakses data di dalam block

// -------------------------------------------------------------

// * Const (Konstanta) untuk meminimalisir perubahan state

const i = 10;
// value const tidak dapat diubah
// ! i = 15;
console.log(i);

const mhs = {
    nama: 'Budi Darmawan',
    umur: 33
}

mhs.umur = 35; // properti object const masih bisa diubah, objectnya (mhs) tidak dapat diubah
// ! mhs = {
// !    jurusan: 'Teknik Informatika'
// ! }

console.log(mhs);

const arr = [1,2,3];
arr.push(4); // isi const array masih bisa diubah, arraynya (arr) tidak dapat diubah
// ! arr = [1,2,3,4]

console.log(arr);