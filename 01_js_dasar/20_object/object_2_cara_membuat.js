// ? Membuat Object pada Javascript

// Object Literal

var mhs1 = {
	nama : "Budi Darmawan",
	nip : 13608051,
	email : "suntree99@ymail.com",
	jurusan : "Aeronotika dan Astromotika"
}

var mhs2 = {
	nama : "Darmawan Budi",
	nip : 16908219,
	email : "suntree99@gmail.com",
	jurusan : "FTMD"
}

console.log(mhs1); // Object { nama: "Budi Darmawan", nip: 13608051, email: "suntree99@ymail.com", jurusan: "Aeronotika dan Astromotika" }
console.log(mhs2); // Object { nama: "Darmawan Budi", nip: 16908219, email: "suntree99@gmail.com", jurusan: "FTMD" }

// Function Declaration

function buatObjectMahasiswa(nama, nip, email, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nip = nip;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa("Budi", "123456", "suntree@gmail.com", "Teknik Penerbangan");

console.log(mhs3); // Object { nama: "Budi", nip: "123456", email: "suntree@gmail.com", jurusan: "Teknik Penerbangan" }

// Constructor Function (keyword : new)

function Mahasiswa(nama, nip, email, jurusan) { // Nama functionnya biasanya dengan huruf awal kapital
	// var this = {};
	this.nama = nama;
	this.nip = nip;
	this.email = email;
	this.jurusan = jurusan;
	// return this;
}

var mhs4 = new Mahasiswa("Darmawan", "654321", "suntree99@yahoo.com", "Teknik") // Instansiasi dengan keyword 'new'

console.log(mhs4); // Object { nama: "Darmawan", nip: "654321", email: "suntree99@yahoo.com", jurusan: "Teknik" }

// Object.create()
