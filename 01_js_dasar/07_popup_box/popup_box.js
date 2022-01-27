// ? ALERT, PROMPT, & CONFIRM

// contoh penggunaan prompt dan alert
var nama;
nama = prompt("Masukkan Nama :");
alert("Nama yang anda masukkan adalah : " + nama);

// contoh penggunaan confirm dan alert
var tes;
tes = confirm("Anda mau menekan tombol apa?");
alert(tes === true ? "Anda telah menekan tombol OK" : "Anda telah menekan tombol CANCEL")

alert("Selamat Datang..");
var lagi = true;

while(lagi) {
  var nama = prompt("Mau Lagi? Masukkan Nama :");
  alert("Hallo " + nama);

  lagi = confirm("Coba Lagi???")
}

alert("Terima Kasih..")
