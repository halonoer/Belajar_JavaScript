console.log(document.title)
document.title = 'noi'
console.log(document.title)

console.log(document.body)
const body = document.body
body.append("HELLO WORLD")

const h1 = document.createElement('h1')
h1.textContent = 'ANJAY INI H1 BRO'
h1.innerHTML = 'hihi'
h1.innerText = 'haha'

body.append(h1)
