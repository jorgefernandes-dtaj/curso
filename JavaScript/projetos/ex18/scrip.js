
function calc() {

var tnum = document.getElementById('txtnum')
    if (tnum.value.length == 0){
    alert('Insira um numero')
    } else {
        var num = Number(tnum.value) 
        var res = document.getElementById('res')
        var mul = 1
        res.innerHTML = ''
        while ( mul <= 10 ){
            let item = document.createElement('option')
            item.text = `${num} x ${mul} = ${num*mul}`
            item.value = `tab${mul}`
            res.appendChild(item)
            mul++
        }
    }
}