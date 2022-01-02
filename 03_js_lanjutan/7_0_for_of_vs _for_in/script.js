// * for..of

// * PADA ARRAY
// const mhs = ['Budi', 'Iwan', 'Wati'];

// * dengan for
// for(let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// * dengan forEach (khusus untuk array)
// mhs.forEach(m => console.log(m));

// * dengan for..of
// for (const m of mhs) {
//     console.log(m);
// }

// * forEach memiliki index
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)}
// );

// * for..of tidak memiliki index, tapi bisa pakai entries()
// for (const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)
// };


// * PADA STRING
// const nama = 'Darmawan';
// for (const n of nama) {
//     console.log(n);
// }

// * PADA NODELIST
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));

// for (const n of liNama) {
//     console.log(n.textContent);
// };

// * PADA ARGUMENTS
// function jumlahAngka() {
//     // return arguments.reduce((a, i) => a + i); // tidak bisa karena arguments bukan array
//     // arguments.forEach(a => jumlah += a); // tidak bisa karena arguments bukan array
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

// * for..in

const mhs = {
    nama: "Budi Darmawan",
    umur: 33,
    email: 'budidarmawan@gmail.com'
};

for (m in mhs) {
    console.log(m);
    console.log(mhs[m]);
}