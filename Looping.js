// ! Perulangan di javascript
// ? for, for Of, for in, foreach 
// * while & do while 

// looping part 1

for(let i = 1; i <= 10; i++){
    // console.log('data ke - ', i )
    if (i % 2 !== 0) console.log('data ke - ', i )
}

let x = 1
while(x<=10){
    // console.log('data x ke - ', x)
    if(x % 2 !==0){
        console.log('data x ke - ', x)
    }
    x++
}

let y = 1
do {
    console.log('data y ke -', y)
    y++
} while(y<=10)

// ! Perulangan di javascript
// ? for, for Of, for in, foreach 
// * while & do while 
// ! MAP

// looping part 2

const pacarsaya = ['agnes', 'putri', 'angela', 'vexana', 'kity']

console.log(pacarsaya)

for(let pacar of pacarsaya){
    console.log(pacar)
}

for(let pacar in pacarsaya){
    console.log(pacar)
}

pacarsaya.forEach((pacar, index) => {
    console.log(pacar, index)
});