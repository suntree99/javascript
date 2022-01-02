// * Async Await

// -------------------------------------------------------------

// * promise dengan then
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Selesai')
//     }, 2000);
// })

// console.log(coba);
// coba.then(() => console.log(coba));

// -------------------------------------------------------------

// * function promise
// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Selesai')
//         }, 2000);
//     });
// }

// const coba = cobaPromise();
// console.log(coba);
// coba.then(() => console.log(coba));

// * function promise dengan async-await
// async function cobaAsync() {
//     const coba = await cobaPromise();
//     console.log(coba);
// }

// cobaAsync();

// -------------------------------------------------------------

// * function promise dengan error handling (resolve, reject)
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 6000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Selesai')
            }, 2000);
        } else {
            reject('Kelamaan!');
        }
    });
}

// * error handling then-catch (synchronous)
// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));     

// * error handling try-catch (async-await)
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.log(err)
    }
}

cobaAsync();
