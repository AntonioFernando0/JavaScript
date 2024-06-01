function carregar () {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date() 
    let hora = data.getHours()
  

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'sunset.png.jpg'
        document.body.style.background = '#CE5111'
        
    } else if (hora >= 12 && hora < 18){
        //Boa tarde 
        img.src = 'tarde.png.jpeg'
        document.body.style.background = '#C8B590'
        
    }
    else{
        //Boa tarde 
        img.src = 'noite.png.jpg'
        document.body.style.background = '#38505E'
        
    }
}