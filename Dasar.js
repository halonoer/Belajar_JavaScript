// alert('heyy')

// // nilai bisa dirubah
// var usia = 30
// // nilai tidak bisa dirubah
// const x = 1
// // nilai bisa dirubah
// let y = 2
// console.log("dani usia kamu adalah " + usia);

// let usia = prompt('berapa usia kamu ?')
// alert('usia anda adalah '+ usia)

// let nama = 'muhammad noer' //tipe string
// let usia = 30 // tipe intenger number
// let tinggibadan = 172.5 //tipe double float
// let beratbadan
// let pacar = 2

// beratbadan = 65

// if(pacar == null){
//     pacar = 'belum punya'
// } else {
//     pacar = 'sudah punya'
// }

// let saldoawal = 8e3
// let saldotambahan = 8e3
// const hutang = 3e3
// const saldoakhir = saldoawal + saldotambahan - hutang

// const x = 25
// const y = 8
// const z = x / y

// alert(`nilai  x = ${x} / nilai y = ${y} maka hasilnya adalah ${z}`)

// // switch(pacar) {
// //     case 1:
// //         pacar = "punya 1 aja"
// //         break
// //     case 2:
// //         pacar = "punya pacar 2, aku cukup playboy"
// //         break
// //     default:
// //         pacar = "belum punya pacar"
// //         break
// // }

// alert(`nama saya ${nama}, usia saya itu ${usia}, tinggi badan saya adalah ${tinggibadan} cm, berat badan saya ${beratbadan} kg, dan pacar saya ${pacar}`)

// alert(`saldo awal saya sebesar ${saldoawal} & saldo tambahan yang akan saya miliki sebesar ${saldotambahan} jadi total saldo yang saya miliki adalah sebanyak ${saldoakhir}`)

// let namaGuru = ['jodi', 'bunga', 'raka'] // array bisa menaruh banyak nilai / berjumlah banyak
// namaGuru.push('dea', 'nur') // menambahkan 
// namaGuru.shift() // menghapus awal
// namaGuru.pop() //  menghapus akhir
// alert(namaGuru)

// for loop

// 3 statement
// const nama = ['noi', 'farin', 'dea', 'bunga']
// for(let i = 0; i < nama.length; i++){
//     // i1 = 0
//     // i2 = 1
//     // i3 = 2
//     // i4 = 3
//     console.log(nama[i])
// }

// let i = 0
// while(i < 10){
//     i++
//     console.log('noi')
// }

// let i = 0
// do { 
//     i++
//     console.log('noi')
// } while(i < 1)

/* 
1. promp untuk mengetahui saldo akhir dari apa yang diinputkan oleh user



2. menentukan hari dari tanggal yang ada saat ini di pc kalian
**/

// 1. promp untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
let saldoawal = prompt("Silakan input saldo Anda:");
while (isNaN(saldoawal) || saldoawal === "") {
    saldoawal = prompt("Input tidak valid. Silakan masukkan saldo yang valid dalam bentuk angka:");
}
saldoawal = Number(saldoawal);

let saldotambahan = 10000;
let hutang = 20000;
const saldoakhir = saldoawal + saldotambahan - hutang;

if (saldoakhir > 50000) {
    console.log(`Saldo Anda mencukupi yaitu Rp ${saldoakhir}`);
    alert(`Saldo Anda mencukupi yaitu Rp ${saldoakhir}`);
} else {
    console.log(`Saldo Anda tidak mencukupi yaitu Rp ${saldoakhir}`);
    alert(`Saldo Anda tidak mencukupi yaitu Rp ${saldoakhir}`);
}

// 2. menentukan hari dari tanggal yang ada saat ini di pc kalian
let hari = new Date().getDay();


switch(hari) {
    case 1 :
        hari = "Senin";
        console.log(`hari ini adalah hari ${hari}`);
        alert(`hari ini adalah hari ${hari}`);
        break;
    case 2 :
        hari = "Selasa";
        console.log(`hari ini adalah hari ${hari}`);
        alert(`hari ini adalah hari ${hari}`);
        break;
    case 3 :
        hari = "Rabu";
        console.log(`hari ini adalah hari ${hari}`);
        alert(`hari ini adalah hari ${hari}`);
        break;  
    case 4 :
        hari = "Kamis";
        console.log(`hari ini adalah hari ${hari}`);
        alert(`hari ini adalah hari ${hari}`);
        break;  
    case 5 :
        hari = "Jum'at";
        console.log(`hari ini adalah hari ${hari}`);
        alert(`hari ini adalah hari ${hari}`);
        break;  
    case 6 :
        hari = "Sabtu";
        console.log(`hari ini adalah hari ${hari}`);
        alert(`hari ini adalah hari ${hari}`);
        break;  
    case 7 :
        hari = "Minggu";
        console.log(`hari ini adalah hari ${hari}`);
        alert(`hari ini adalah hari ${hari}`);
        break;  
}

// Selesai


