// ? 1. HTML Fragments

// const mhs = {
//     nama: 'Budi Darmawan',
//     umur: 33,
//     nrp: '0102030405',
//     email: 'budidarmwan@gmail.com'
// };

// const el = 
//     `<div class="mhs">
//         <h2>${mhs.nama}</h2>
//         <h2>${mhs.umur} Tahun</h2>
//         <span class="nrp">${mhs.nrp}</span>
//         <h2>${mhs.email}</h2>
//     </div>`;

// document.body.innerHTML = el;

// -------------------------------------------------------------

// ? 2. Looping

// const mhs = [
//     {
//         nama: 'Budi Darmawan',
//         email: 'budidarmwan@gmail.com'
//     },
//     {
//         nama: 'Iwan Setiawan',
//         email: 'iwansetiawan@gmail.com'
//     },
//     {
//         nama: 'Wati Susilawati',
//         email: 'watisusilawati@gmail.com'
//     }
// ];

// const el =
//     `<div class="mhs">
//         ${mhs.map(m => 
//             `<ul>
//                 <li>${m.nama}</li>
//                 <li>${m.email}</li>
//             </ul>`).join('')}
//     </div>`;

// document.body.innerHTML = el;

// -------------------------------------------------------------

// ? 3. Conditionals
// * Ternary

// const lagu = {
//     judul : 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// };

// const el =
//     `<div class="lagu">
//         <ul>
//             <li>${lagu.penyanyi}</li>
//             <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//         </ul>
//     </div>`;

// document.body.innerHTML = el;

// -------------------------------------------------------------

// ? 4. Nested

const mhs = {
    nama: 'Budi Darmawan',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = 
    `<div class="mhs">
        <h2>${mhs.nama}</h2>
        <span class="semester">Semester : ${mhs.semester}</span>
        <h4>Mata Kuliah</h4>
        ${cetakMataKuliah(mhs.mataKuliah)}
    </div>`;

document.body.innerHTML = el;

// -------------------------------------------------------------