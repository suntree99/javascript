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
// console.log(i);

// function tes() {
//     for(var i = 0; i < 10; i++) {
//         console.log(i)
//     }
// }
// tes();
// console.log(i);

// -------------------------------------------------------------

// * IIFE = Immediately Invoked Function Expression
// * SIAF = Self Invoking Anonymous Function

// (function(){
//     for(var i = 0; i < 10; i++) {
//         console.log(i)
//     }
// }())
// console.log(i);

// -------------------------------------------------------------

// * Let (& Const) menjadikan variable berprilaku block scope

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i);

// -------------------------------------------------------------

// * Const (Konstanta) untuk meminimalisir perubahan state

// const i = 10;
//// i = 15;
// console.log(i);

// const mhs = {
//     nama: 'Budi Darmawan',
//     umur: 33
// }

// mhs.umur = 35; // properti object masih bisa diubah, object mhs tidak

//// mhs = {
////    jurusan: 'Teknik Informatika'
//// }

// console.log(mhs);

const i = [1,2,3];
i.push(4); // konten array bisa diubah, arraynya tidak
//// i = [1,2,3,4]

console.log(i);