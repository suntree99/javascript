// ? DOM Selection Method

// * getElementById() => element
// * getElementsByTagName() => HTMLCollection (Array)
// * getElementsByClassName() => HTMLCollection (Array)
// * querySelector() => element (mentarget 1 element yang pertama)
// * querySelectorAll() => nodeList (Array)

// -------------------------------------------------------------

// * getElementById() => element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Budi Darmawan';

// -------------------------------------------------------------

// * getElementsByTagName() => HTMLCollection
// const p = document.getElementsByTagName('p');
// for (var i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0]; // harus ditambah index walaupun hanya satu element karena HTMLCollection bentuknya array
// h1.style.fontSize = '50px';

// -------------------------------------------------------------

// * getElementsByClassName() => HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini diubah dari javascript'; // harus ditambah index walaupun hanya satu element karena HTMLCollection bentuknya array

// -------------------------------------------------------------

// * querySelector() => element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p'); // hanya mentarget 1 element yang pertama
// p.innerHTML = 'ini diubah melalui javascript';

// -------------------------------------------------------------

// * querySelectorAll() => nodeList
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// -------------------------------------------------------------

// * Manipulasi Node Root
// const sectionB = document.querySelector('section#b');
// const par4 = sectionB.getElementsByTagName('p')[0];
// par4.style.backgroundColor = 'orange';