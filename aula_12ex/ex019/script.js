function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano ){
        window.alert('[ERROR] Verique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade<=10){
                img.setAttribute('src', 'img/menino.png')
                document.body.style.background = '#fd9d3f'
            }else if(idade >=11 && idade <21){
                img.setAttribute('src', 'img/rapaz.png')
                document.body.style.background = '#1d45cd'
            }else if(idade >=21 && idade < 55){
                img.setAttribute('src', 'img/homen.png')
                document.body.style.background = '#ff8a82'
            }else{
                img.setAttribute('src', 'img/idoso.png')
                document.body.style.background = '#9d937a'
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade<=10){
                img.setAttribute('src', 'img/menina.png')
                document.body.style.background = '#87abd2'
            }else if(idade >=11 && idade <21){
                img.setAttribute('src', 'img/moca.png')
                document.body.style.background = '#f0dcdd'
            }else if(idade >=21 && idade < 55){
                img.setAttribute('src', 'img/mulher.png')
                document.body.style.background = '#bb3c4d'
            }else{
                img.setAttribute('src', 'img/idosa.png')   
                document.body.style.background = '#f0dac2'      
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} com idade ${idade} `
        res.appendChild(img)
    } 

}