function contar(){
    var ini = document.getElementById('txtin')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossivel contar'
        window.alert('[ERROR] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
       
        if(p<=0){
            window.alert('Passo iválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){
            for(var c = i; c <= f; c+=p ){
            res.innerHTML += `${c} \u{1F449}`
        }
            
        }else{
            for(var c = i; c >= f ; c-=p ){
            res.innerHTML += `${c} \u{1F449}`
        }
         
     }res.innerHTML += `\u{1F3C1}`
     }
    
}

