
function contar() {
   
    var tstart = document.getElementById('txtstart') 
    var tend = document.getElementById('txtend') 
    var tstep = document.getElementById('txtstep') 
    var start = Number(tstart.value)
    var end = Number(tend.value)
    var step = Number(tstep.value)
    var res = document.getElementById('res')
    res.innerHTML = 'Contando:'
        if (start == 0 || end == 0 || step == 0){
    window.alert('[ERRO] Faltou dados')}
        else { 
            for( var tt = start ; tt <= end; tt += step){
        res.innerHTML += `➡️${tt} `
            }
        }        
} 

    
