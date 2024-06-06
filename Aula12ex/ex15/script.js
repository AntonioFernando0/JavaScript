
function verificar() {
    var  data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =  document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert( '[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 18) {
                //criança
                gênero = 'criança';
                img.setAttribute('src', 'imagem/criançam.jpg')
            } else if (idade < 21) {
                //jovem 
                gênero = 'jovem';
                img.setAttribute('src', 'imagem/jovemm.jpg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/adultof.jpg')
            } else {
                // Idoso
                gênero = 'Idoso';
                img.setAttribute('src', 'imagem/idoso.jpg')
            }  
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        
        
            if (idade >= 0 && idade < 18) {
                //criança
                gênero = 'criança';
                img.setAttribute('src', 'imagem/criançaf.jpg')
            } else if (idade < 21) {
                //jovem 
                gênero = 'jovem';
                img.setAttribute('src', 'imagem/jovemf.jpg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/adultam.jpg')
            } else {
                // Idoso
                gênero = 'Idosa';
                img.setAttribute('src', 'imagem/idosa.jpg')
            }  
        
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}