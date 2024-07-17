// document.title = 'noi'
// console.log(document.title)

// console.log(document.body)
// const body = document.body
// body.append("HELLO WORLD")

// 1. document.title
// Deskripsi: Ini adalah properti yang digunakan untuk mendapatkan atau mengatur judul dokumen. Judul ini adalah teks yang muncul di tab browser.
// contoh
// console.log(document.title); // Mendapatkan judul dokumen
// document.title = 'Judul Baru'; // Mengatur judul dokumen baru

// 2. document.body
// Deskripsi: Ini adalah properti yang mengacu pada elemen <body> dari dokumen HTML. Anda bisa menggunakannya untuk memanipulasi konten utama dari halaman.
// contoh
// console.log(document.body); // Mendapatkan elemen body
// document.body.innerHTML = '<h1>Halo Dunia!</h1>'; // Mengatur konten dalam elemen body

// 3. document.head
// Deskripsi: Mengacu pada elemen <head> dari dokumen. Elemen ini biasanya berisi metadata, link ke stylesheet, dan skrip.
// contoh
// console.log(document.head); // Mendapatkan elemen head

// 4. document.documentElement
// Deskripsi: Mengacu pada elemen root dari dokumen, biasanya elemen <html>.
// contoh 
// console.log(document.documentElement); // Mendapatkan elemen root <html>

// 5. document.URL
// Deskripsi: Menyediakan URL lengkap dari dokumen saat ini.
// contoh
// console.log(document.URL); // Mendapatkan URL dokumen saat ini

// 6. document.domain
// Deskripsi: Menyediakan domain dari dokumen saat ini.
// contoh
// console.log(document.domain); // Mendapatkan domain dokumen saat ini

// 7. document.cookie
// Deskripsi: Mengatur atau mendapatkan cookie yang terkait dengan dokumen.
// contoh
// document.cookie = "username=JohnDoe"; // Mengatur cookie
// console.log(document.cookie); // Mendapatkan cookie

// 8. document.getElementById()
// Deskripsi: Mengembalikan elemen yang memiliki atribut id yang sesuai.
// contoh
// const element = document.getElementById('myElement');
// console.log(element); // Mendapatkan elemen dengan id 'myElement'

// 9. document.getElementsByClassName()
// Deskripsi: Mengembalikan kumpulan elemen yang memiliki kelas yang sesuai.
// contoh
// const elements = document.getElementsByClassName('myClass');
// console.log(elements); // Mendapatkan semua elemen dengan kelas 'myClass'

// 10. document.querySelector()
// Deskripsi: Mengembalikan elemen pertama yang cocok dengan selektor CSS yang diberikan.
// contoh
// const element = document.querySelector('.myClass');
// console.log(element); // Mendapatkan elemen pertama yang cocok dengan kelas 'myClass'

// 11. document.querySelectorAll()
// Deskripsi: Mengembalikan semua elemen yang cocok dengan selektor CSS yang diberikan.
// contoh
// const elements = document.querySelectorAll('.myClass');
// console.log(elements); // Mendapatkan semua elemen yang cocok dengan kelas 'myClass'


// Membuat elemen <h1>
// const nama = document.createElement('element')
// const h1 = document.createElement('h1')
// const haha = document.createElement('p')
// const hihi = document.createElement('b')

// Mengatur textContent dari <h1> menjadi 'ANJAY INI H1 BRO'
// h1.textContent = '<marquee>ANJAY BRO</marquee>'

// Mengatur innerHTML dari <h1> menjadi 'hihi'
// Ini akan menggantikan konten sebelumnya
// haha.innerHTML = '<marquee>hihi</marquee>'

// Mengatur innerText dari <h1> menjadi 'haha'
// Ini akan menggantikan konten sebelumnya
// hihi.innerText = '<marquee>ANJAY</marquee>'

// Pada akhirnya, teks dalam elemen <h1> adalah 'haha'

// body.append(h1)
// body.append(haha)
// body.append(hihi)

// getElementById hanya bisa memanggil id saja
// didalam kurung tidak pakai .(class) atau #(id), tapi lansung aja karena khusus untuk id
// querySelector universal
// didalam kurung bisa .(class) atau #(id)

// const body = document.body
// // body.append('hello world')
// const h1 = document.createElement('h1')
// h1.textContent = 'coba pake h1 di js'

// const kotasaya = document.createElement('b')
// kotasaya.innerText = 'Gresik'

// const kotakampus = document.createElement('p')
// kotakampus.innerHTML = '<marquee>Surabaya</marquee>'

// body.append(h1)
// body.append(kotasaya)
// body.append(kotakampus)
document.title = 'noi'
// console.log(document.title)
const body = document.body
const btn1 = document.getElementById('btn1')
btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'aqua'

const defaultText = 'klik saya 1'
btn1.textContent = defaultText

// ganti warna menggunakan fungsi
function gantiwarna(){
    if (btn1.style.background === 'aqua') {
        btn1.style.background = 'red'
    } else {
        btn1.style.background = 'aqua'
    }
    const newtext = document.createElement('p')
    newtext.textContent = "halo saya noi"
    body.append(newtext)
}
// ganti text menggunakan fungsi
function gantitext(){
    btn1.textContent = 'boleh lah'
}

// mengganti text seperti semula menggunkan fungsi 
function oritext(){
    btn1.textContent = defaultText
}

const nambahkata= 'klik saya 2'
btn1.textContent = defaultText
const btn2 = document.getElementById('btn2')
btn2.style.border = 'none'
btn2.style.padding = '8px'
btn2.style.fontSize = '24px'
btn2.style.background = 'orange'

// function to add text
function nambahtext(){
    const nambahkata = document.createElement('b')
    nambahkata.textContent = " coba buat teks"
    nambahkata.style.color = 'red'
    document.body.append(nambahkata)
}


// function to change color of btn2
function nambahwarna(){
    const nambahkata = document.querySelector('body b:last-child')
    if (nambahkata) {
        nambahkata.style.color = 'blue'
    }
    if (btn2.style.background === 'orange') {
        btn2.style.background = 'orange'
    } else {
        btn2.style.background = 'aqua'
    }
}

const btn3 = document.querySelector('.btn3')
btn3.style.border = 'none'
btn3.style.padding = '8px'
btn3.style.fontSize = '24px'
btn3.style.background = 'green'
btn3.style.margin = '1px'



//