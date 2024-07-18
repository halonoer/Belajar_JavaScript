// function addName(firstname, lastname) {
//     // console.log(firstname, lastname)
//     console.log('nama depan:', firstname)
//     console.log('nama belakang:', lastname)
// }

// function addName() {
//     // console.log(firstname, lastname)
//     console.log(arguments[0])
//     console.log(arguments[1])
// }

// function addName() {
//     for (let i = 0; 1<arguments.length; i++){
//         console.log('nama lengkap: ', arguments[i])
//     }
// }

// function addName(firstname, lastname) {
//     // console.log(firstname, lastname)
//     console.log('nama depan:', firstname)
//     console.log('nama belakang:', lastname)
// }

// addName('Muhammad', 'Noer')

// function printSum(result) {
//     console.log(result);
// }

// function sum(a, b) {
//     return a + b;
// }

// printSum(sum(5, 5)); // This will print 10

// cara 1 keyword new function
const sum = new Function('console.log("x + y")')

// cara 2
function sum2(x, y) {
    console.log(x + y)
}

// cara 3 arrow function
const sum3 = (x, y) => {
    console.log(x+y)
}

// random
function randomize(){
    const randomnumber = ~~(Math.random() * 1000)
    if(randomnumber > 500){
        console.log('lebih dari 500', randomnumber)
    }else {
        console.log(randomnumber)
    }
}

randomize()


sum(1, 1)
sum2(2, 2)
sum3(27, 3)

// Persegi
const persegi = new Function('console.log("s*s")')
persegi()

// Persegi Panjang
const PP=(x, y)=>{
console.log(x*y)
}
PP(4,7)

// Lingkaran 
function Lingkaran(){
    const p = 3.14
    const r = ~~(Math.random() * 10); // Menghasilkan jari-jari antara 0 dan 9
    const luas = p * (r*r)
    if(luas>100){
        console.log('lebih dari 100', luas)
    }else{
        console.log(luas)
    }
}

Lingkaran()

// segitigas
function segitiga(){
    const a = ~~(Math.random()*10);
    const t = ~~(Math.random()*10);
    const Li =0.5* a * t
    if(Li > 100){
        console('lebih dari 100', Li)
    }else{
        console.log(Li)
    }
} 

segitiga()