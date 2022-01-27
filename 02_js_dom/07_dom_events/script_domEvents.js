// ? EVENTS HANDLER

// * Inline HTML Event (Tidak disarankan)
// const p3 = document.querySelector('.p3');

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// * Element Method
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// -------------------------------------------------------------

// * addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

// -------------------------------------------------------------

const p3 = document.querySelector('.p3');

// * Event Handler akan menimpa perintah sebelumnya
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }

// * addEventListener akan menambahkan perintah baru
p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function() {
    p3.style.color = 'red';
});

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'lightgreen';
});



// * Daftar Event

// Mouse Event
// 	- click
// 	- dblclick
// 	- mouseover
// 	- mousenter
// 	- mouseleave
// 	- mouseup
// 	- wheel
// 	- ....

// Keyboar Event
// 	- keydown
// 	- keypress
// 	- keyup
// 	- ....

// View Event
// 	- resize
// 	- scroll
// 	- ....

// Form Event
// 	- reset
// 	- submit
// 	- ....

// Resource Event
// Focus Event
// CSS Animation & Transition Event
// Drag & Drop Event
// dll.
