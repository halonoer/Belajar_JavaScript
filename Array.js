/*
BERSENANDUNG BERSAMA ARRAY

**/

// const arraysaya = ['a', 'b', 'c']
// console.log(arraysaya)

// const arraykamu = []
// arraykamu[0] = 'a'
// arraykamu[1] = 'b'
// arraykamu[2] = 'c'
// console.log(arraykamu)

// const arraykita = new Array('a', 'b')
// console.log(arraykita)

// const arraykita = new Array()
// arraykita[0] = 'a'
// arraykita[3] = 'b'
// arraykita[1] = 'c'
// console.log(arraykita[3])

// const arraysaya = ['🥦', '🍈', '🍉',  '🍌', '🍇'] 
// length = 5
// 

// const banana = arraysaya.includes('🍌')

// if(banana){
//     const posisibanana = arraysaya.indexOf('🍌')
//     const indexbefore = posisibanana - 1
//     const indexafter = posisibanana + 1
//     const before = arraysaya[indexbefore]
//     const after = arraysaya[indexafter] 
//     console.log(`buah sebelum banana adalah ${before}`)
//     console.log(`buah setelah banana adalah ${after}`)
//     // console.log(`buah banana itu ada dan dia berada di posisi index ke- ${posisibanana} `)
//     const buahawal = arraysaya.shift()
//     console.log(`buah awal adalah ${buahawal}`)
//     // const buahakhir = arraysaya.pop()
//     const buahakhir = arraysaya[arraysaya.length-1]
//     console.log(`buah terakhir adalah ${buahakhir}`)
// } else {
//     console.log('saya tidak tahu posisinya dimana')
// }

// console.log(banana)

// const arraysaya = []

// arraysaya['apukat'] = 'a'
// arraysaya['banana'] = 'b'

// console.log(arraysaya['banana'])

// const arraysaya = ['🥦', '🍈', '🍉',  '🍌', '🍇']; 
// const newArraySaya = [...arraysaya]; // Shallow copy menggunakan spread operator

// newArraySaya[0] = '📍';

// console.log({ arraysaya }); // Output: { arraysaya: [ '🥦', '🍈', '🍉', '🍌', '🍇' ] }
// console.log({ newArraySaya }); // Output: { newArraySaya: [ '📍', '🍈', '🍉', '🍌', '🍇' ] }

// const arraysaya = ['🍌', 10, {tomato: function (){console.log('ini tomat')}}, ['eat', 'food']]

// console.log(arraysaya[3][1]) // mengambil array dari array

// console.log(arraysaya[2]) // output : {tomato: ƒ}
// console.log(arraysaya[2].tomato) // output : ƒ (){console.log('ini tomat')}
// arraysaya[2].tomato() // kenapa bisa dipanggil tomatonya? karena tomato sebuah function
// output : ini tomat


// dua buah array menjadi satu atau pengabungan array

const arraysaya = ['🍌','📍','🥑']
const arraykamu = ['🥦','🚀','🍉']

const mergeArray = arraysaya.concat(arraykamu)

// console.log(mergeArray)

// for (list of mergeArray) console.log(list) // muncul perurutan dari isi array

// for (list in mergeArray) console.log(list) // kalo kepengen muncul index-nya

// mergeArray.map((value, index) => console.log(value, index))    

const datas = [
    {nama:'noi', umur: '21', hobi: 'futsal'},
    {nama:'nurul', umur: '23', hobi: 'tidur'},
    {nama:'ikmal', umur: '21', hobi: 'jalan-jalan'}
]

// datas.map((value, index)=> 
//     console.log(value.nama, value.hobi)
// ) // cara memanggil data

// datas.sort((a,b) => b.umur - a.umur).map((value) => console.log(value))

datas.filter((x) => x.umur >= 30).map((values) => console.log(values))

// selesai