let num = [5,8,2,9,3]
num[5] = 6
num.push(7)
num.sort()

console.log('array')
console.log(num)
console.log('array size')
console.log(num.length)

console.log('individual')
for (let pos=0; pos<num.length;pos++){
    console.log(num[`${pos}`])
}

console.log('individual simplificado')

for(let pos in num){
    console.log(num[pos])
}

console.log('verificar a posiçao de um valor')
let x=1
let pos = num.indexOf(x) 
if (pos == -1){
    console.log('valor nao existe')
} else{
console.log(num.indexOf(x))
}