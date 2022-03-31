function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if(hora >= 0 && hora<12){
        img.src = 'img/manha.png' 
        document.body.style.background = '#37564f'
    }else if(hora >=12 && hora <=18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#f7882a'
    }else{
        img.src = 'img/noite.png'
        document.body.style.background ="#2f243d"
    }
}
   
