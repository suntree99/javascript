// * DOM Manipulation - Element Manipulation

// element.innerHTML
// element.style.<property>
// element.setAttribute()
// element.classList

// -------------------------------------------------------------

// * element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Budi Darmawan</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><P>paragraf1</p></div>';

// -------------------------------------------------------------

// * element.style.<property>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// -------------------------------------------------------------

// * element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'budi');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// * element.getAttribute()
// console.log(a.getAttribute('href'))

// * element.removeAttribute()
// a.removeAttribute('href')

// -------------------------------------------------------------

// * element.classList
const p2 = document.querySelector('.p2');

// * element.classList.add()
// p2.classList.add('label')

// * element.classList.remove()
// p2.classList.remove('label')

// * element.classList.toggle()
// p2.classList.toggle('label')

// * element.classList.item()
// p2.classList.add('satu')
// p2.classList.add('dua')
// p2.classList.add('tiga')
// console.log(p2.classList); // menampilkan semua class
// console.log(p2.classList.item(2)); // menampilkan class item index ke-2

// * element.classList.contains()
// p2.classList.add('satu')
// p2.classList.add('dua')
// p2.classList.add('tiga')
// console.log(p2.classList.contains('dua')); // ada => true
// console.log(p2.classList.contains('empat')); // tidak ada => false

// * element.classList.replace()
// p2.classList.add('satu')
// p2.classList.add('dua')
// p2.classList.add('tiga')
// p2.classList.replace('tiga', 'empat');
// console.log(p2.classList);
