
let txtnum = window.document.getElementById('num')
let res = window.document.getElementById('res')
let info = window.document.getElementById('info')
let valores = [] 

function add(){
    let num = Number(txtnum.value)
if (num <1){
    alert('Número invalido')
} else if (num >=100) {
    alert ('Número demasiado grande')
} else if (valores.indexOf(num) != -1){
    alert ('Número repetido')
} else {
    valores.push(num)
    let item = document.createElement('option')
    item.text = `Valor ${num} adicionado.`
    res.appendChild(item)
    info.innerHTML = ''
}
    txtnum.value = ''
    txtnum.focus()
}


function analize(){
    let size = valores.length
    let soma = 0
    let media = 0
    if (size == 0){
        alert('Adicione valores.')
    } else {
        let maior = valores[0]
        let menor = valores [0]
        for( let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/size
    info.innerHTML = `<p>Adicionou ${size} valores <p>`
    info.innerHTML += `<p>O valor mais baixo é ${menor} <p>`
    info.innerHTML += `<p>O valor mais alto é ${maior} <p>`
    info.innerHTML += `<p>A soma dos valores é ${soma} <p>`
    info.innerHTML += `<p>A média dos valores é ${media} <p>`
    }
}