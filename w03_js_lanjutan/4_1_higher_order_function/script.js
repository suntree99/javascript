// ? HIGHER ORDER FUNCTION

// -------------------------------------------------------------

// * function yang memiliki argument function disebut HOF
// function kerjakanTugas(matakuliah, selesai) {
//     console.log(`Mulai kerjakan tugas ${matakuliah}...`);
//     selesai();
// }

// * function sebagai argument disebut CALLBACK
// function selesai() {
//     alert('Selesai mengerjakan tugas');
// }

// kerjakanTugas('Pemrograman Web', selesai);

// -------------------------------------------------------------

// * setTomeout adalah HOF karena memiliki argument function
// setTimeout(function() {
//     console.log('Hello World')
// }, 1000);

// -------------------------------------------------------------

// * addEventListener adalah HOF karena memiliki argument function
// const tombol = document.querySelector('.submit');

// tombol.addEventListener('click', function(){
//     console.log('tombol ditekan');
// });

// -------------------------------------------------------------

// * function yang memiliki return value berupa function juga HOF
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatMalam = ucapkanSalam('Malam');
// console.dir(selamatMalam('Budi')); // Halo Budi, Selamat Malam, semoga harimu menyenangkan!

// -------------------------------------------------------------

// ? KENAPA MENGGUNAKAN HOF
// ? memisahkan kerumitan kode ke dalam function

// -------------------------------------------------------------

// * for dengan batas tertentu
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// * batas for dapat lebih fleksible dengan dimasukkan ke dalam function
// function repeatLog(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// repeatLog(10);

// -------------------------------------------------------------

// * penambahan action pada function
// function repeatLog(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }

// repeatLog(10, console.log);
// repeatLog(3, alert);

// -------------------------------------------------------------

// * CONTOH HOF YANG SUDAH ADA
// ? Array.prototype.map()
// ? Array.prototype.filter()
// ? Array.prototype.reduce()