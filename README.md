# Belajar_JavaSript

belajar mandiri dengan sumber dari 
- infinite learning (Program Magang dan Studi Independen Bersertifikat)

![1234](https://github.com/halonoer/Belajar_JavaScript/assets/136947430/726359ca-38fe-4e6c-927a-4c6b1ceafcab)

Youtube : 
- Web Programming UNPAS
- Dea Afrizal

#JavaScript

JavaScript adalah bahasa pemrograman yang berbasis prototype, yang berarti objek dapat diwariskan lansung dari objek lain tanpa memerlukan kelas.

Peulisan Dinamis : JavaScript memiliki tipe data dinamis yang memungkinkan variabel berubah jenis datanya saat program berjalan

First-Class Function : Fungsi dalam JavaScript dianggap sebagai warga kelas satu (first-class Citizen), yang berarti fungsi dapat diperlukan sebagai Variabel, dapat diteruskan sebagai argumen, dana dapat dikembalikan oleh fungsi lain. ini mendukung konsep pemrograman fungsional.

Multi-Paradigma : JavaScript mendukung berbagai paradigma pemrograman seperti : 
- Object-Oriented Programming (OOP) : Pemrograman berorientasi objek, memungkinkan pengembangan menggunakan konsep seperti kelas dan object.
- Imperatif : Gaya pemrograman yang berfokus pada perintah dan urutan langkah-langkah untuk mencapai suatu tujuan
- Functional Programming : Gaya pemrograman yang menekankan pada penggunaan fungsi-fungsi, menghindari perubahan status dan data

pengunaan yang luas : awalnya hanya web interaktif, namun sekarang digunakan dimana saja, seperti server(misal Node.JS), app Mobile, Desktop, bahkan IoT

tipe data
number, string, boolean, object, function, undefined

tidak ada integer atau bilangan bulat, yang ada floating point
ukuran angka yang bisa disimpan oleh javascript 64 bit


angka
- angka tanpa desimal : 10, 500, 123456 ; akurat sampai 15 digit
- angka dengan desimal : 3.14, 0.5, 100.00
- eksponen : 123e5 // 123000
- bilangan negatif

jangan pernah mengawali angka dengan 0, 
- 022 maka dianggap sebagai bilangan oktal
- 0xFF akan dianggap sebagai bilangan hexadesimal

angka spesial
- Infinity = 2 / 0
- -Infinity = -2 / 0
- NaN = 100 / "apel"

operator
operator dalam javascript adalah sebuah simbol yang digunakan untuk melakukan operasi

operator
- aritmatika - binary
- penugasan - binary
- perbandingan - binary
- logika - binary
- string - binary
- kondisional - ternary
- typeof - unary

binary : membutuhkan 2 operator
unary : membutuhkan 1 operator
ternary : membutuhkan 3 operator

operator penugasan
- x += y
- x -= y
- x *= y
- x /= y
- x %= y

sama saja dengan 
- x = x + y
- x = x - y
- x = x * y
- x = x / y
- x = x % y

operator perbandingan / comparison
- ==  : sama dengan 
- !=  : tidak sama dengan
- === : strict sama dengan 
- !== : strict tidak sama dengan
- >   : lebih besar dari
- <   : lebih kecil dari
- >=  : lebih besar sama dengan
- <=  : lebih kecil sama dengan

boolean : true dan false

operator logika 
- && : AND
- || : OR
- ! - : NOT

operator string 
+

penjelasan tanda + ada 2 fungsi 
- jika operatornya angka maka menjadi operator aritmatika
- jika operatornya string/tulisan maka menjadi operator string

operator typeof (operand)

operator kondisional
operator untuk pengecekan dimana kondisi true / false
(kondisi) ? benar : salah


tipe strinng 
palin text "" / ''
"no" "jalan"

escape = character
- \0     : karakter null
- \'     : '
- \"     : "
- \\     : \
- \n     : new line / baris baru
- \t     : tab
- \b     : backspace
- \uXXXX : unicode

unicode 
\u00A9 : c
\u00AE : r
dll

concatenation 
"Noer" = "noer"
false

.length : menghitung panjang string
"Noer".length : 4

Bolean : sebuah tipe data yang digunakan untuk merepresentasikan logika true atau false

truthy : menghasilkan nilai true
falsy  : menghasilkan nilai false

truthy           |  falsy
true             |  false
non-zero number  |  0
"string"         |  ""
object           |  undefined
arrays           |  null
functions        |  NaN

undefined
null

variabel : sebuah 'tempat / wadah' yang memiliki nama, yang digunakan untuk menyimpan nilai

deklarasi    = mendaftarkan variabel ke dalam lingkup yang sesuai
inisialisasi = menyediakan memori untuk variabel
assignment   = menetapkan nilai yang spesifik kedalam variabel

var x; // deklarasi & inisialisasi
x = 20; // assignment

deklarasi variabel 
var 
let
const

var 
var <nama variabel> 
- ga boleh pake spasi, jika panjang maka dikasih _ / $ / panjang disambung
- boleh memakai angka tetapi tidak bileh ditaruh didepan
- nama awal huruf kecil dan selanjut huruf besar : haloSayaDariTadi // Camel Case
- keyword & reserved word

shorthand

dari ini
var nama;
var umur;
var lulus;

nama = "noer";
umur = 31;
lulus = true;

menjadi ini
var nama = "noer",
var umur = 31, 
lulus = true;

variable scope

script
- internal : js didalam dokumen
- external : js diluar dokumen

console.log = mencetak pesan

popup box / dialog box
- alert = 
  alert('hello world!');
- prompt = 
  prompt('masukkan nama:');
  , contoh : 
  var nama = prompt('masukkan nama : ');
  alert('nama');
- confirm = 
  confirm('kamu yakin??');
  , contoh :
  var tes = confirm('kamu yakin??');
  if( tes === true ) {
    alert('user menekan OK!');
  } else {
    alert('user menekan CANCEL');
  }
  
contoh semua popup : 
 - alert('selamat datang..');
  var lagi = true;
     while(lagi === true) {
     var nama = prompt('masukkan nama : ');
     alert('halo ' + nama);
     lagi = confirm('coba lagi?');
    }
  alert('terima kasih..');
  
control flow
normal flow = apabila kita memiliki lebih dari satu statement, maka statement tersebut akan dieksekusi dari atas ke bawah atau dari kiri ke kanan.

contoh : 
- var angka = prompt('masukkan angka :');
  alert('angka yang anda masukkan adalah : ' + angka);

control flow 
- pengulangan
- pengkodisian

1. pengulangan (loop/iteration) : 
- for : for(inisialisasi; kondisi; increment/decrement)
- while : inisialisasi; kondisi; increment
- do while : inisialisasi; blok kode; kondisi;

contoh : 
- for : 
   alert('mulai');
   for(var i = 0; i < 5; i++){
   alert('hello world!');
   }
   alert('selesai');

- while :
  var number = 10;
while (number > 1) {
    number /= 2;
    console.log(number);
}

- do while :
1. 
  do {
    // kode yang akan dijalankan berulang kali
} while (kondisi);
2. 
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);


2. pengkondisian (percabangan) :
- of
- if ... else
- if ... else if ... else

contoh : 
var angka prompt('masukkan angka :');
if( angka % 2 === 0 ) {
  alert(angka + ' adalah bilangan GENAP');
} else {
  alert(angka + ' adalah bilangan GANJIL');
}

.......
pengulangan (while)

while(kondisi){
aksi
}

contoh condingan : 
infinite loop /looping forever 

dihentikan oleh user = 

while(true){
console.log('hello world');
}

- 

var ulang = true;
while(ulang){
cosole.log('hello world');
ulang = confirm('lagi?');
}

dihentikan oleh program

while (kondisi terminasi) {

aksi

increment / decrement
}
- 
var nilaiAwal = 1;
while(nilaiAwal <=5) {
console.log('hello world' +nilaiAwal + 'x');
nilaiAwal++;
}
- 
var nilaiAwal = 1;
while(nilaiAwal <= 10){
    console.log('Angkot No. ' + nilaiAwal+ ' beroperasi dengan baik.' );
    nilaiAwal++;
}
- 
var jmlAngkot = 10;
var noAngkot = 1;
while(noAngkot <= jmlAngkot){
console.log('Ankot No. '+ noAngkot + 'beropearsi dengan baik.');
noAngkot++;
}

..................
var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi) {
console.log('Angkot no. ' + noAngkot + 'beroperasi dengan baik');
noAngkot++;
}

for (noAngkot = angkotBeropasi + 1 ; noAngkot <= jmlAngkot; noAngkot++;){
console.log('Angkot No. ' + noAngkot + 'sedang tidak beroperasi.');
}


......................

if
1. 
if (kondisi) {
aksi (lakukan aksi jika kondisi bernilai true)
}
... (keluar dari blok jika kondisi bernilai false)


contoh codingan :
1. 
var angka 2;
if(angka < 5) {
alert(angka + 'lebih kecil dari 5');
}

2. a
var angka = 2;
if(angka % 2 == 0) {
alert(angka + 'adalah bilangan GENAP');
}

var angka = 2;
if(angka % 2 == 1) {
alert(angka + 'adalah bilangan GANJIL');
}

3.
jika menggunakan else maka seperti ini
var angka = prompt ('memasukkan angka:');
if(angka % 2 == 0) {
alert(angka + 'adalah bilangan GENAP');
}else {
alert(angka + 'adalah bilangan GANJIL');
}

4. 
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot no.' + noAngkot + ' sedang beroperasi');
    }else{
        console.log('Angkot no.' + noAngkot + ' tidak beroperasi')
    }
}

5. 
var angka = prompt ('memasukkan angka:');
if(angka % 2 == 0) {
alert(angka + 'adalah bilangan GENAP');
}else if(angka % 2 === 1) {
alert(angka + 'adalah bilangan GANJIL');
} else {
  alert('yang anda masukkan bukan angka!!');
}

6. 
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
var angkotLembur = 8 || 10;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot no.' + noAngkot + ' sedang beroperasi');
    }else if(noAngkot === angkotLembur){
        console.log('Angkot no.' + noAngkot + ' lembur');
    } else {
        console.log('Angkot no.' + noAngkot + ' tidak beroperasi');
    }
}

7. 
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot no.' + noAngkot + ' sedang beroperasi');
    }else if(noAngkot === 8 || noAngkot === 10){
        console.log('Angkot no.' + noAngkot + ' lembur');
    } else {
        console.log('Angkot no.' + noAngkot + ' tidak beroperasi');
    }
}

switch

if(kondisi 1){
aksi 1
} else if(kondisi 2){
aksi 3
} ...
else if(kondisi n){
aksi n
} else {
aksi default
}

contoh : 
1. 
switch(ekspresi){
case "nilai 1":
aksi 1
[break;]
case "nilai 2" :
aksi 2
[break;]
case "nilai n":
aksi n
[break;]
default:
aksi default
[break;]
}

contoh :
var angka = prompt(masukkan angka :);

if( angka == 1 ) {
alert('anda memasukkan angka 1');
} else if( angka ==2 ){
alert('anda memasukkan angka 2');
} else {
alert('angka yang anda masukkan salah!);
}

------------------------------------------
var angka = prompt('masukkan angka :');

switch( angka ){
case 1 :
alert('anda memasukkan angka 1');
break;
case 2 :
alert('anda memasukkan angka 2');
break;
case 3 : 
alert('anda memasukkan angka 3');
break;
default :
alert('angka yang anda masukkan salah');
break;

--------------------------------------------
var item = 
