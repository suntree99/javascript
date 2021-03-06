// * Spread Operator

// * memecah iterables menjadi single element (digabung dengan separator spasi)
// const mhs = ['Budi', 'Iwan', 'Wati'];
// console.log(...mhs);
// console.log(...mhs[0]);

// * menggabung 2 array (atau lebih) menjadi single array []
// const mhs = ['Budi', 'Iwan', 'Wati'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = [...mhs, 'Aji', ...dosen];
// const orang1 = mhs.concat(dosen);
// console.log(orang);

// * meng-copy array
// const mhs = ['Budi', 'Iwan', 'Wati'];
// const mhs1 = mhs; // mengacu pada array yang sama
// const mhs2 = [...mhs]; // menduplikat array berbeda
// mhs1[0] = 'Fajar';
// console.log(mhs);
// console.log(mhs1);
// console.log(mhs2);

// const liMhs = document.querySelectorAll('li');
// console.log(liMhs[0].textContent);

// const mhs = [];
// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs)

// const mhs = [...liMhs].map(m => m.textContent)
// console.log(mhs)

// -------------------------------------------------------------

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;