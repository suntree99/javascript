// ? CALLBACK

// ? Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`)
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama : ');
//     callback(nama);
// }

// tampilkanPesan(halo);
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// -------------------------------------------------------------

// const mhs = [
//     {
//         "nama" : "Budi Darmawan",
//         "nrp" : "0102030405",
//         "email" : "budidarmawan@gmail.com",
//         "jurusan" : "Aeronotika dan Astronotika",
//         "idDosenWali" : 1
//     },
//     {
//         "nama" : "Iwan Setiawan",
//         "nrp" : "0102030406",
//         "email" : "iwansetiawan@gmail.com",
//         "jurusan" : "Teknik Penerbangan",
//         "idDosenWali" : 2
//     },
//     {
//         "nama" : "Wati Susilawati",
//         "nrp" : "0102030407",
//         "email" : "watisusilawati@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 2
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     } // simulasi jeda loading data
//     console.log(m.nama)
// });
// console.log('selesai');

// -------------------------------------------------------------

// ? Asynchronous Callback

// * cara vanilla javascript
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa(
//     'data/mahasiswa.json',
//     result => {
//         const mhs = JSON.parse(result);
//         mhs.forEach(m => console.log(m.nama))},
//     e => {
//         console.log(e.responseText)}
// );
// console.log('selesai');

// -------------------------------------------------------------

// * cara jQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText)
    }
});
console.log('selesai');