// * Promise

// * cara jQuery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=e3dad0a3&s=avengers',
//     success: movies => console.log(movies),
//     error: e => console.log(e.responseText)
// });

// * cara vanilla javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//         if(xhr.status === 200) {
//             console.log(JSON.parse(xhr.response));
//         } else {
//             console.log(hxr.responseText);
//         }
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=e3dad0a3&s=avengers');
// xhr.send();

// * fetch
// fetch('http://www.omdbapi.com/?apikey=e3dad0a3&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// * Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (ersolve / reject / finally)
// aksi (then / catch)

// * contoh 1 promise
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji..');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));

// * contoh 2 promise
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2))); // dapat melihat proses
// janji2
//     .finally(() => console.log('Selesai menunggu..'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');

// * promise.all
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Budi',
            pemeran: 'Iwan, Wati'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Surabaya',
            temperatur: 26,
            kondisi: 'Cerah Berawan'
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
// .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })