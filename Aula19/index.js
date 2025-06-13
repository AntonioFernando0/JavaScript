const titulo = "Notas dos Alunos"
const paragrafo = "As notas disponibilizadas deverão ser preenchidades nos campos abaixo: "

document.getElementById('titulo').innerText = titulo;
document.getElementById('paragrafo').innerText = paragrafo

function verificar(){
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);


    let media = (nota1 + nota2 + nota3) / 3

    let mensagem = ""

    if(media >= 7){
        mensagem = "🎉 PARABÉNS. VOCÊ ESTÁ APROVADO";
        
    }else if (media >= 4 && media < 7){
        mensagem = "⚠️ VOCÊ ESTÁ EM RECUPERAÇÃO";
    }else{
       
        mensagem = "❌ VOCÊ ESTÁ REPROVADO";
    }
    document.getElementById('apr').innerText = mensagem;
}

