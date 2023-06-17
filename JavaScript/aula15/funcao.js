function parimpar(n){
    if (n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = 
console.log(parimpar(0))

function soma(n1=0, n2=0){
    return n1+n2
}
console.log(soma(35,5675))

// 5! = 5x4x3x2x1

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    } 
    return fat
}

console.log(fatorial(5))

// recursividade
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n* fatorial(n-1)
    }
}
console.log(fatorial(12))