# Belajar_JavaSript

belajar mandiri dengan sumber dari 
- infinite learning (Program Magang dan Studi Independen Bersertifikat)

![1234](https://github.com/halonoer/Belajar_JavaScript/assets/136947430/726359ca-38fe-4e6c-927a-4c6b1ceafcab)

Youtube : 
- Web Programming UNPAS
- Dea Afrizal

JavaScript 
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
022 maka dianggap sebagai bilangan oktal
0xFF akan dianggap sebagai bilangan hexadesimal

angka spesial
Infinity = 2 / 0
-Infinity = -2 / 0
NaN = 100 / "apel"

operator
operator dalam javasrcipt adalah sebuah simbol yang digunakan untuk melakukan operasi

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
- !  : NOT

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

undefined =  
null      =
